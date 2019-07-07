import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListResponsaveisComponent } from './list-responsaveis.component';

describe('ListResponsaveisComponent', () => {
  let component: ListResponsaveisComponent;
  let fixture: ComponentFixture<ListResponsaveisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListResponsaveisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListResponsaveisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
