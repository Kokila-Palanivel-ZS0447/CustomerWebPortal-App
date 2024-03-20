import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmsExploreComponent } from './farms-explore.component';

describe('FarmsExploreComponent', () => {
  let component: FarmsExploreComponent;
  let fixture: ComponentFixture<FarmsExploreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FarmsExploreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FarmsExploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
