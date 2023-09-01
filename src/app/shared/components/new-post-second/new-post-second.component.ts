import { Component, Input } from '@angular/core';
import { BlogPost } from '../../interfaces/blog-post.interface';

@Component({
  selector: 'app-new-post-second',
  templateUrl: './new-post-second.component.html',
  styleUrls: ['./new-post-second.component.scss']
})
export class NewPostSecondComponent {
  @Input() post: BlogPost;

  setAreaLabel(title: string) {
    return `Read more about ${title}`
  }
}
