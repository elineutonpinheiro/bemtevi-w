import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTurmasComponent } from './add-turmas.component';

describe('AddTurmasComponent', () => {
  let component: AddTurmasComponent;
  let fixture: ComponentFixture<AddTurmasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTurmasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTurmasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
