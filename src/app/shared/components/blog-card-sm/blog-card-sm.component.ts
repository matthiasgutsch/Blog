import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-card-sm',
  templateUrl: './blog-card-sm.component.html',
  styleUrls: ['./blog-card-sm.component.scss']
})
export class BlogCardSmComponent {

  getRandomLinks(): string {
    return `https://picsum.photos/500`
  }

}
