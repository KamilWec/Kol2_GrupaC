import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopDetailsKWComponent } from './shop-details-kw.component';

describe('ShopDetailsKWComponent', () => {
  let component: ShopDetailsKWComponent;
  let fixture: ComponentFixture<ShopDetailsKWComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopDetailsKWComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopDetailsKWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
