import {Component, VERSION, ViewChild} from '@angular/core';

import * as packageInfo from '../../lib/ngx-markdown-it/package.json';

import { NgxMarkdownItService } from "ngx-markdown-it";
import { NgxMarkdownItComponent } from "ngx-markdown-it/src/lib/ngx-markdown-it.component";

import { markmap as MarkmapView } from 'markmap-lib/dist/view';

const {version} = packageInfo

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('ngxMarkdownIt') ngxMarkdownIt? : NgxMarkdownItComponent;

  angularVersion = VERSION.full;
  ngxMarkdownItVersion = version;
  markdown = `
# Edit the markdown text here, it will update

The markdown-it library has the markmap plugin, so you can render mindmaps like:
\`\`\`mindmap
# root
## child1
  - child3
## child2
  - child3
\`\`\`
  `;

  constructor(private ngxMarkdownItService: NgxMarkdownItService) { }

  markdownReady() : void {
    if (this.ngxMarkdownIt) {

      this.ngxMarkdownIt
          .element
          .nativeElement
          .querySelectorAll('.markmap-svg')
          .forEach(mindmap => MarkmapView(mindmap, JSON.parse(mindmap.innerHTML)))
    }
  }
}
