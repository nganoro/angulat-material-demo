import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableCardComponentComponent } from './reusable-card-component.component';

describe('ReusableCardComponentComponent', () => {
  let component: ReusableCardComponentComponent;
  let fixture: ComponentFixture<ReusableCardComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReusableCardComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReusableCardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
