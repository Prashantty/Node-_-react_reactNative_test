import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCompComponent } from './product-comp.component';

describe('ProductCompComponent', () => {
  let component: ProductCompComponent;
  let fixture: ComponentFixture<ProductCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCompComponent]
    });
    fixture = TestBed.createComponent(ProductCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
