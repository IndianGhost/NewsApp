import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheguardianPage } from './theguardian.page';

describe('TheguardianPage', () => {
  let component: TheguardianPage;
  let fixture: ComponentFixture<TheguardianPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheguardianPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheguardianPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
