import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestLogsComponent } from './gest-logs.component';

describe('GestLogsComponent', () => {
  let component: GestLogsComponent;
  let fixture: ComponentFixture<GestLogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestLogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
