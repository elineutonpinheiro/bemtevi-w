import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAlunosComponent } from './add-alunos.component';

describe('AddAlunosComponent', () => {
  let component: AddAlunosComponent;
  let fixture: ComponentFixture<AddAlunosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAlunosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAlunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
