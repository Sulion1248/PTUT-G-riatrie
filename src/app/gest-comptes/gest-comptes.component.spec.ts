import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestComptesComponent } from './gest-comptes.component';

describe('GestComptesComponent', () => {
  let component: GestComptesComponent;
  let fixture: ComponentFixture<GestComptesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestComptesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestComptesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
