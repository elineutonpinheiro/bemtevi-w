import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProfissionaisComponent } from './add-profissionais.component';

describe('AddProfissionaisComponent', () => {
  let component: AddProfissionaisComponent;
  let fixture: ComponentFixture<AddProfissionaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProfissionaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProfissionaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
