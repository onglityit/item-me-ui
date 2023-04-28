import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingSubcriptionComponent } from './existing-subcription.component';

describe('ExistingSubcriptionComponent', () => {
  let component: ExistingSubcriptionComponent;
  let fixture: ComponentFixture<ExistingSubcriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExistingSubcriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExistingSubcriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
