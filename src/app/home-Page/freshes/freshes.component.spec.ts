import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreshesComponent } from './freshes.component';

describe('FreshesComponent', () => {
  let component: FreshesComponent;
  let fixture: ComponentFixture<FreshesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FreshesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FreshesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
