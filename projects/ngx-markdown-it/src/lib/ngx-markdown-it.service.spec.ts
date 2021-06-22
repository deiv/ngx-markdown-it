import { TestBed } from '@angular/core/testing';

import { NgxMarkdownItService } from './ngx-markdown-it.service';

describe('NgxMarkdownItService', () => {
  let service: NgxMarkdownItService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxMarkdownItService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should render correctly', () => {
    expect(service.render("# a header")).toBe("<h1>a header</h1>\n");
    expect(service.render("## a level 2 header")).toBe("<h2>a level 2 header</h2>\n");
  });

});
