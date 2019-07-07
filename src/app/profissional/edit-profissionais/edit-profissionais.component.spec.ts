import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfissionaisComponent } from './edit-profissionais.component';

describe('EditProfissionaisComponent', () => {
  let component: EditProfissionaisComponent;
  let fixture: ComponentFixture<EditProfissionaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProfissionaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProfissionaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
