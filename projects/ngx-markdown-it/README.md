# ngx-markdown-it

An Angular library that renders markdown using [markdown-it](https://github.com/markdown-it/markdown-it).

## Installation

Use your favorite package manager to install ngx-markdown-it. For example, with NPM:

```bash
npm install ngx-markdown
```

Don't forget to install [markdown-it](https://github.com/markdown-it/markdown-it) too:

```bash
npm install markdown-it
```

## Configuration

As usual, with Angular, you must import the module inside your main application:

```javascript
import { NgxMarkdownItModule } from "ngx-markdown-it";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgxMarkdownItModule.forRoot()
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
```

Optionally, you can pass a NgxMarkdownItConfig class to the module, to allow to configure the markdown-it library. For example, to use the [markdown-it-markmap](https://github.com/deiv/markdown-it-markmap) plugin:

```javascript
import { NgxMarkdownItModule } from "ngx-markdown-it";
import { NgxMarkdownItConfig } from "ngx-markdown-it";

import { default as markmapPlugin } from 'markdown-it-markmap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgxMarkdownItModule.forRoot({
      plugins: [
        markmapPlugin
      ]
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## Usage

The module provides a component and a service.

### markdown-it component

A simple component to render the mardown.

```html
<markdown-it [markdown]="markdown"></markdown-it>
```

```html
<markdown-it ngPreserveWhitespaces># A level 1 header</markdown-it>
```

### markdown-it service

A service to allow more advanced usage of the markdown-it parser.

```typescript
import { Component, OnInit } from '@angular/core';
import { NgxMarkdownItService } from 'ngx-markdown-it';

@Component({ ... })
export class Foo implements OnInit {
  constructor(private markdownItService: NgxMarkdownItService) { }

  ngOnInit() {
    console.log(this.markdownItService.render('# A level 1 header'));
  }
}
```

## Development

The library is located in _projects/ngx-markdown-it_. The root app is only a demo to test the library.
