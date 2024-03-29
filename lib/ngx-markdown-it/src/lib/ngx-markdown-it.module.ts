/*
 * @file ngx-markdown-it.module.ts
 *
 * @brief Library module
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

import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';

import { NgxMarkdownItComponent } from './ngx-markdown-it.component';
import { NgxMarkdownItService } from "./ngx-markdown-it.service";
import { NgxMarkdownItConfig } from "./ngx-markdown-it-config.class";

@NgModule({
  declarations: [
    NgxMarkdownItComponent
  ],
  imports: [
  ],
  exports: [
    NgxMarkdownItComponent
  ]
})
export class NgxMarkdownItModule {

  constructor(@Optional() @SkipSelf() parentModule?: NgxMarkdownItModule) {
    if (parentModule) {
      throw new Error(
        'NgxMarkdownItModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(config?: NgxMarkdownItConfig): ModuleWithProviders<NgxMarkdownItModule> {
    return {
      ngModule: NgxMarkdownItModule,
      providers: [{
          provide: NgxMarkdownItConfig,
          useValue: config
        }
      ]
    };
  }
}

