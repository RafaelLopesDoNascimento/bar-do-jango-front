import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundoMenuComponent } from './segundo-menu.component';

describe('SegundoMenuComponent', () => {
  let component: SegundoMenuComponent;
  let fixture: ComponentFixture<SegundoMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SegundoMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SegundoMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
