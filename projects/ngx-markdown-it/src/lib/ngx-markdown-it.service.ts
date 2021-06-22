/*
 * @file ngx-markdown-it.service.ts
 *
 * @brief Markdown It service
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

import { Injectable, Optional } from '@angular/core';

import { NgxMarkdownItConfig } from "./ngx-markdown-it-config.class";

import * as MarkdownIt from 'markdown-it';

@Injectable({
  providedIn: 'root'
})
export class NgxMarkdownItService {

  private markdownIt: MarkdownIt;

  constructor(@Optional() config?: NgxMarkdownItConfig) {

    var presetName : MarkdownIt.PresetName = 'default';

    if (config && config.presetName) {
      presetName = config.presetName;

    }

    this.markdownIt = new MarkdownIt(presetName);

    if (config && config.plugins) {
        config.plugins.forEach(plugin => this.markdownIt.use(plugin));
    }
  }

  /**
   * Renders a markdown string to HTML
   *
   * @param {markdown} raw Markdown string that you want to render.
   * @returns {string}
   */
  public render(markdown: string): string {
    return `${this.markdownIt.render(markdown)}`;
  }
}
