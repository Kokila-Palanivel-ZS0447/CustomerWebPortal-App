import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromosFeaturedComponent } from './promos-featured.component';

describe('PromosFeaturedComponent', () => {
  let component: PromosFeaturedComponent;
  let fixture: ComponentFixture<PromosFeaturedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PromosFeaturedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PromosFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
