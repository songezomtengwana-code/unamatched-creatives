import { TestBed } from '@angular/core/testing';

import { ArtistModalService } from './artist-modal.service';

describe('ArtistModalService', () => {
  let service: ArtistModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtistModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
