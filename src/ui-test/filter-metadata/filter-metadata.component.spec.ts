import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterMetadataComponent } from './filter-metadata.component';

describe('FilterMetadataComponent', () => {
  let component: FilterMetadataComponent;
  let fixture: ComponentFixture<FilterMetadataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterMetadataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterMetadataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
