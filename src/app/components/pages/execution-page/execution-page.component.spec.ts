import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutionPageComponent } from './execution-page.component';

describe('ExecutionPageComponent', () => {
  let component: ExecutionPageComponent;
  let fixture: ComponentFixture<ExecutionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExecutionPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecutionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
