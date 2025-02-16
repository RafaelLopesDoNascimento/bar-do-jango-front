import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaipirasComponent } from './caipiras.component';

describe('CaipirasComponent', () => {
  let component: CaipirasComponent;
  let fixture: ComponentFixture<CaipirasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaipirasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaipirasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
