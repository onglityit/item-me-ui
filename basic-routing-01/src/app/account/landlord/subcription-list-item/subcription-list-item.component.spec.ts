import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcriptionListItemComponent } from './subcription-list-item.component';

describe('SubcriptionListItemComponent', () => {
  let component: SubcriptionListItemComponent;
  let fixture: ComponentFixture<SubcriptionListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubcriptionListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubcriptionListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
