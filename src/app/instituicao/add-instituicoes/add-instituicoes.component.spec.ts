import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInstituicoesComponent } from './add-instituicoes.component';

describe('AddInstituicoesComponent', () => {
  let component: AddInstituicoesComponent;
  let fixture: ComponentFixture<AddInstituicoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddInstituicoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInstituicoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
