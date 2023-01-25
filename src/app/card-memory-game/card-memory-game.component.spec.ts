import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMemoryGameComponent } from './card-memory-game.component';

describe('CardMemoryGameComponent', () => {
  let component: CardMemoryGameComponent;
  let fixture: ComponentFixture<CardMemoryGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardMemoryGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardMemoryGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
