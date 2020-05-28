import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderContactComponent } from './order-contact.component';

describe('OrderContactComponent', () => {
  let component: OrderContactComponent;
  let fixture: ComponentFixture<OrderContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
