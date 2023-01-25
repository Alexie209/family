import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuzzleLvl2Component } from './puzzle-lvl2.component';

describe('PuzzleLvl2Component', () => {
  let component: PuzzleLvl2Component;
  let fixture: ComponentFixture<PuzzleLvl2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuzzleLvl2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuzzleLvl2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
