import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUnidadesComponent } from './add-unidades.component';

describe('AddUnidadesComponent', () => {
  let component: AddUnidadesComponent;
  let fixture: ComponentFixture<AddUnidadesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUnidadesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUnidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
