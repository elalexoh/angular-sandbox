import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VcoachPageComponent } from './vcoach-page.component';

describe('VcoachPageComponent', () => {
  let component: VcoachPageComponent;
  let fixture: ComponentFixture<VcoachPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VcoachPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VcoachPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
