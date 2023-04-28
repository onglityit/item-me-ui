import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ANewSubcriptionComponent } from './a-new-subcription.component';

describe('ANewSubcriptionComponent', () => {
  let component: ANewSubcriptionComponent;
  let fixture: ComponentFixture<ANewSubcriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ANewSubcriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ANewSubcriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
