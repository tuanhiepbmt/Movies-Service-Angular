import { TestBed } from '@angular/core/testing';

import { HttpClientServerService } from './http-client-movie.service';

describe('HttpClientServerService', () => {
  let service: HttpClientServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpClientServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
