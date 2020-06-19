import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopItemKWComponent } from './shop-item-kw.component';

describe('ShopItemKWComponent', () => {
  let component: ShopItemKWComponent;
  let fixture: ComponentFixture<ShopItemKWComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopItemKWComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopItemKWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
