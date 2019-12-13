import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrillesComponent } from './grilles.component';

describe('GrillesComponent', () => {
  let component: GrillesComponent;
  let fixture: ComponentFixture<GrillesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrillesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrillesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
