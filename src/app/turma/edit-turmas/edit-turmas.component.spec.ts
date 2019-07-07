import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTurmasComponent } from './edit-turmas.component';

describe('EditTurmasComponent', () => {
  let component: EditTurmasComponent;
  let fixture: ComponentFixture<EditTurmasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTurmasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTurmasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
