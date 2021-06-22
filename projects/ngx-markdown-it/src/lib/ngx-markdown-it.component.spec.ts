import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMarkdownItComponent } from './ngx-markdown-it.component';

describe('NgxMarkdownItComponent', () => {
  let component: NgxMarkdownItComponent;
  let fixture: ComponentFixture<NgxMarkdownItComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxMarkdownItComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMarkdownItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
