import { TestBed } from '@angular/core/testing';

import { HttpClientPersonService } from './http-client-person.service';

describe('HttpClientPersonService', () => {
  let service: HttpClientPersonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpClientPersonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
