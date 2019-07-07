import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddResponsaveisComponent } from './add-responsaveis.component';

describe('AddResponsaveisComponent', () => {
  let component: AddResponsaveisComponent;
  let fixture: ComponentFixture<AddResponsaveisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddResponsaveisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddResponsaveisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
