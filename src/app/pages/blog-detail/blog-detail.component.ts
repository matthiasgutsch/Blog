import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPost } from 'src/app/shared/interfaces/blog-post.interface';
import { DataSharingService } from 'src/app/shared/service/data-sharing.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent {

  blog: BlogPost;
  constructor(private dataService: DataSharingService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {   
      this.dataService.getProject(params['id']).subscribe(blog => {
        console.log(blog)
        this.blog = blog;
      })
    })
    }
}
