import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lvl3Component } from './lvl3.component';

describe('Lvl3Component', () => {
  let component: Lvl3Component;
  let fixture: ComponentFixture<Lvl3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lvl3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lvl3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
