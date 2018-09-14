import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnouncementAlertComponent } from './announcement-alert.component';

describe('AnnouncementAlertComponent', () => {
  let component: AnnouncementAlertComponent;
  let fixture: ComponentFixture<AnnouncementAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnouncementAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnouncementAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
