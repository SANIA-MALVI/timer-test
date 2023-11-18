import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeOptionsFormComponent } from './time-options-form.component';

describe('TimeOptionsFormComponent', () => {
  let component: TimeOptionsFormComponent;
  let fixture: ComponentFixture<TimeOptionsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimeOptionsFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimeOptionsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
