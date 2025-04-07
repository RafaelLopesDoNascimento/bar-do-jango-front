import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import {
  PoButtonModule,
  PoDialogService,
  PoMenuModule,
  PoModalComponent,
  PoModalModule,
  PoNotificationService,
  PoPageModule,
  PoTableAction,
  PoToolbarModule
} from '@po-ui/ng-components';
import { PoTableColumn, PoTableComponent, PoDividerModule, PoTableModule, PoInfoModule } from '@po-ui/ng-components';
import { ServiceRestService } from '../services/service-rest.service';


@Component({
  selector: 'app-clients',
  imports: [PoToolbarModule, PoPageModule, PoMenuModule, PoDividerModule, PoTableModule, PoInfoModule, PoInfoModule, PoButtonModule, PoModalModule ],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent implements AfterViewInit, OnInit {

  columns: Array<PoTableColumn>;
  columnsDefault: Array<PoTableColumn>;
  detail: any;
  items: Array<any>;
  total: number = 0;
  totalExpanded = 0;
  initialColumns: Array<string>;

  model:any;

  constructor(
    private serviceRest: ServiceRestService,
    private poNotification: PoNotificationService
    )
  {
     this.initialColumns = [];
     this.items = [];
     this.columnsDefault = [];
     this.columns = [];

    
   }
  @ViewChild(PoModalComponent) poModal!: PoModalComponent;
  @ViewChild(PoTableComponent) poTable!: PoTableComponent;

  actions: Array<PoTableAction> = [
    {
      action: this.discount.bind(this),
      icon: 'an an-currency-circle-dollar',
      label: 'Apply Discount',
      disabled: this.validateDiscount.bind(this)
    },
    { action: this.details.bind(this), icon: 'an an-info', label: 'Details' },
    { action: this.remove.bind(this), icon: 'po-icon an an-trash', label: 'Remove' }
  ];

  getModel() {
    
  }

  ngOnInit(): void {
    this.serviceRest.getAll().subscribe({
      next: (response: any[]) => {
        this.serviceRest.setModel(response); // armazena os dados da API no service
  
        this.model = response; // se quiser usar diretamente
        this.items = this.serviceRest.getItems(); // agora com os dados da API
  
        this.columns = this.serviceRest.getColumns();
  
        console.log(this.items); // imprime no console os dados prontos pra tabela
      }
    });
  }

  ngAfterViewInit(): void {
    this.columnsDefault = this.columns;
    if (localStorage.getItem('initial-columns')) {
      const storedColumns = localStorage.getItem('initial-columns');
      this.initialColumns = storedColumns ? storedColumns.split(',') : [];
      
      const result = this.columns.map(el => ({
        ...el,
        visible: this.initialColumns.includes(el.property  ?? '')
      }));

      const newColumn = [...result]; 
      newColumn.sort((a, b) => this.sortFunction(a, b));
      this.columns = newColumn;
    }
  }

  sortFunction(a: any, b: any) {
    const storedTest = localStorage.getItem('initial-columns');
    this.initialColumns = storedTest ? storedTest.split(',') : [];
  
    const teste = storedTest ? storedTest.split(',') : [];
    const indexA = teste.indexOf(a.property);
    const indexB = teste.indexOf(b.property);
  
    if (indexA === -1) return 1;
    if (indexB === -1) return -1;
    if (indexA < indexB) return -1;
    if (indexA > indexB) return 1;
    return 0; 
  }

  addToCart() {
    
    // const selectedItems = this.poTable.getSelectedRows();

    // if (selectedItems.length > 0) {
    //   this.poDialog.confirm({
    //     title: 'Add to cart',
    //     message: `Would you like to add ${selectedItems.length} items to cart?`,
    //     confirm: () => this.confirmItems(selectedItems),
    //     cancel: () => {}
    //   });
    // }
  }

  confirmItems(selectedItems: Array<any>) {
    selectedItems.forEach(item => {
      switch (item.status) {
        case 'available':
          this.poNotification.success(`${this.getDescription(item)} added succesfully`);
          break;
        case 'reserved':
          this.poNotification.warning(
            `${this.getDescription(item)} added succesfully, verify your e-mail to complete reservation`
          );
          break;
        case 'closed':
          this.poNotification.error(`${this.getDescription(item)} is closed and not available anymore`);
          break;
      }
    });

    this.poTable.unselectRows();
  }

  collapseAll() {
    this.items.forEach((item, index) => {
      if (item.detail) {
        this.onCollapseDetail();
        this.poTable.collapse(index);
      }
    });
  }

  decreaseTotal(row: any) {
    if (row.value) {
      this.total -= row.value;
    }
  }

  deleteItems(items: Array<any>) {
    this.items = items;
  }

  details(item: any) {
    this.detail = item;
    this.poModal.open();
  }

  remove(item: { [key: string]: any }) {
    this.poTable.removeItem(item);
  }

  discount(item: any) {
    if (!item.disableDiscount) {
      const updatedItem = { ...item, value: item.value - item.value * 0.2, disableDiscount: true };
      this.poTable.updateItem(item, updatedItem);
    }
  }

  expandAll() {
    this.totalExpanded = 0;
    this.items.forEach((item, index) => {
      if (item.detail) {
        this.onExpandDetail();
        this.poTable.expand(index);
      }
    });
  }

  onCollapseDetail() {
    this.totalExpanded -= 1;
    this.totalExpanded = this.totalExpanded < 0 ? 0 : this.totalExpanded;
  }

  onExpandDetail() {
    this.totalExpanded += 1;
  }

  sumTotal(row: any) {
    if (row.value) {
      this.total += row.value;
    }
  }

  restoreColumn() {
    this.columns = this.columnsDefault;
  }

  changeColumnVisible(event: any) {
    localStorage.setItem('initial-columns', event);
  }

  private getDescription(item: any) {
    return `Airfare to ${item.destination} - ${item.initials}`;
  }

  private validateDiscount(item: any) {
    return item.disableDiscount;
  }
}