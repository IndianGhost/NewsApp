import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NytPage } from './nyt.page';

describe('NytPage', () => {
  let component: NytPage;
  let fixture: ComponentFixture<NytPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NytPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NytPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
