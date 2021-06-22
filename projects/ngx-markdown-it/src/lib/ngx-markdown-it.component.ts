/*
 * @file ngx-markdown-it.component.ts
 *
 * @brief Component to render markdown to html
 * @author David Suárez
 * @date Mon, 21 Jun 20 19:45:15 +0200
 *
 * @license
 *
 * ngx-markdown-it: angular markdown-it module
 *
 * Copyright (c) 2021 David Suárez
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 *
 */

import { Component, AfterViewInit, EventEmitter, ElementRef, Input, Output } from '@angular/core';

import { NgxMarkdownItService } from "./ngx-markdown-it.service";

@Component({
  selector: 'markdown-it',
  template: `<ng-content></ng-content>`,
  styles: []
})
export class NgxMarkdownItComponent implements AfterViewInit  {

  _markdown: string | undefined;

  @Output() ready = new EventEmitter<void>();

  @Input()
  set markdown(val: string) {
    this._markdown = val;
    this.render(this._markdown);
  }

  constructor(
    public element: ElementRef<HTMLElement>,
    private markdownService: NgxMarkdownItService,
  ) { }

  ngAfterViewInit(): void {
    if (this._markdown == null) {
      this.render(this.element.nativeElement.innerHTML.trim());
      return;

    } else {
      /*
       * This is probably done in markdown() setter, but because before the view is init, our component or parents ones
       *  are not in a safe state, we should signal again.
       */
      this.ready.emit();
      return;
    }
  }

  render(markdown: string): void {
    this.element.nativeElement.innerHTML = this.markdownService.render(markdown);
    this.ready.emit();
  }
}
