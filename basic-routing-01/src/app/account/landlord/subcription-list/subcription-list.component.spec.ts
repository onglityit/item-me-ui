import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcriptionListComponent } from './subcription-list.component';

describe('SubcriptionListComponent', () => {
  let component: SubcriptionListComponent;
  let fixture: ComponentFixture<SubcriptionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubcriptionListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubcriptionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
