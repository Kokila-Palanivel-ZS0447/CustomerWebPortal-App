import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YogHurtComponent } from './yog-hurt.component';

describe('YogHurtComponent', () => {
  let component: YogHurtComponent;
  let fixture: ComponentFixture<YogHurtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YogHurtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YogHurtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
