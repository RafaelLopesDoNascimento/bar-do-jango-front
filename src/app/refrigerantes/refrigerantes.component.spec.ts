import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefrigerantesComponent } from './refrigerantes.component';

describe('RefrigerantesComponent', () => {
  let component: RefrigerantesComponent;
  let fixture: ComponentFixture<RefrigerantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RefrigerantesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefrigerantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
