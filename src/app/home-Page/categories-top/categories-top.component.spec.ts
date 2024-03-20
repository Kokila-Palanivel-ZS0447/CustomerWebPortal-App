import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesTopComponent } from './categories-top.component';

describe('CategoriesTopComponent', () => {
  let component: CategoriesTopComponent;
  let fixture: ComponentFixture<CategoriesTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoriesTopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoriesTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
