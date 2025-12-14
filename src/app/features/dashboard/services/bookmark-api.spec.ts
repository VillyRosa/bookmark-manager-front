import { TestBed } from '@angular/core/testing';

import { BookmarkApi } from './bookmark-api';

describe('BookmarkApi', () => {
  let service: BookmarkApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookmarkApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
