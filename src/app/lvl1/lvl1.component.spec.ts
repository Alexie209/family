import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lvl1Component } from './lvl1.component';

describe('Lvl1Component', () => {
  let component: Lvl1Component;
  let fixture: ComponentFixture<Lvl1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lvl1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lvl1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
