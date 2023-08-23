import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataSharingService } from 'src/app/shared/service/data-sharing.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent {
  blogs = []
  constructor(
    private route: ActivatedRoute,
    private dataSharingService: DataSharingService
    ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params['type']) {
        const type = params['type'].toLowerCase();
        this.dataSharingService.getBlogByTypes(type).subscribe(blogs => {
          this.blogs = blogs
        })
      }
    })
  }
}
