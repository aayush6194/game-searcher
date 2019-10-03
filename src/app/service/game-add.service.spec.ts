import { TestBed } from '@angular/core/testing';

import { GameAddService } from './game-add.service';

describe('GameAddService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GameAddService = TestBed.get(GameAddService);
    expect(service).toBeTruthy();
  });
});
