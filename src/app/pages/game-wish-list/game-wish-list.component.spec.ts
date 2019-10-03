import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameWishListComponent } from './game-wish-list.component';

describe('GameWishListComponent', () => {
  let component: GameWishListComponent;
  let fixture: ComponentFixture<GameWishListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameWishListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameWishListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
