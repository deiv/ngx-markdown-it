import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMarkdownItComponent } from './ngx-markdown-it.component';
import { NgxMarkdownItConfig } from './ngx-markdown-it-config.class';

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

describe('NgxMarkdownItComponent sanitize option', () => {
  // A harmless handler: it only sets a flag, so nothing pops up when the unsanitized case is rendered.
  const hostile = '<img src="x" onerror="window.__ngxMarkdownItXss = true">';

  function render(config: NgxMarkdownItConfig, markdown: string): string {
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      declarations: [NgxMarkdownItComponent],
      providers: [{ provide: NgxMarkdownItConfig, useValue: config }],
    });
    const fixture = TestBed.createComponent(NgxMarkdownItComponent);
    fixture.componentInstance.markdown = markdown;
    return fixture.nativeElement.innerHTML;
  }

  it('removes raw HTML event handlers when sanitize is on', () => {
    const html = render({ presetName: 'commonmark', sanitize: true }, hostile);
    expect(html).not.toContain('onerror');
    expect(html).toContain('<img');
  });

  it('keeps the previous behaviour when sanitize is off', () => {
    expect(render({ presetName: 'commonmark' }, hostile)).toContain('onerror');
  });

  it('still renders normal markdown when sanitize is on', () => {
    expect(render({ sanitize: true }, '# Title\n\n**bold**')).toContain('<strong>bold</strong>');
  });
});
