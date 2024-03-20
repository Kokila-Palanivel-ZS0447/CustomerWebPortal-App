import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterPathComponent } from './footer-path.component';

describe('FooterPathComponent', () => {
  let component: FooterPathComponent;
  let fixture: ComponentFixture<FooterPathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterPathComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
