import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenuesListComponent } from './venues-list.component';

describe('VenuesListComponent', () => {
  let component: VenuesListComponent;
  let fixture: ComponentFixture<VenuesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenuesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenuesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
