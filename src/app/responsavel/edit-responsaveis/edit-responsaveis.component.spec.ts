import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditResponsaveisComponent } from './edit-responsaveis.component';

describe('EditResponsaveisComponent', () => {
  let component: EditResponsaveisComponent;
  let fixture: ComponentFixture<EditResponsaveisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditResponsaveisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditResponsaveisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
