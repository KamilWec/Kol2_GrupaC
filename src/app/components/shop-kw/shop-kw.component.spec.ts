import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopKWComponent } from './shop-kw.component';

describe('ShopKWComponent', () => {
  let component: ShopKWComponent;
  let fixture: ComponentFixture<ShopKWComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopKWComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopKWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
