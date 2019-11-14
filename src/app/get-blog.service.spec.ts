import { TestBed } from '@angular/core/testing';

import { GetBlogService } from './get-blog.service';

describe('GetBlogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetBlogService = TestBed.get(GetBlogService);
    expect(service).toBeTruthy();
  });
});
