import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUnidadesComponent } from './edit-unidades.component';

describe('EditUnidadesComponent', () => {
  let component: EditUnidadesComponent;
  let fixture: ComponentFixture<EditUnidadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditUnidadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUnidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
