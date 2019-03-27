import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BbcPage } from './bbc.page';

describe('BbcPage', () => {
  let component: BbcPage;
  let fixture: ComponentFixture<BbcPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BbcPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BbcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
