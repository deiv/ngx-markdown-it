import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { NgxMarkdownItModule } from "ngx-markdown-it";
import { NgxMarkdownItConfig } from "ngx-markdown-it";

import { default as markmapPlugin } from 'markdown-it-markmap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxMarkdownItModule.forRoot({
      plugins: [
        markmapPlugin
      ]
    } as NgxMarkdownItConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
