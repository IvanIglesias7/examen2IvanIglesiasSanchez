import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorterosFormComponent } from './porteros-form.component';

describe('PorterosFormComponent', () => {
  let component: PorterosFormComponent;
  let fixture: ComponentFixture<PorterosFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorterosFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PorterosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
