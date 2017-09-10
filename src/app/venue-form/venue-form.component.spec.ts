import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueFormComponent } from './venue-form.component';

describe('VenueFormComponent', () => {
  let component: VenueFormComponent;
  let fixture: ComponentFixture<VenueFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenueFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenueFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
