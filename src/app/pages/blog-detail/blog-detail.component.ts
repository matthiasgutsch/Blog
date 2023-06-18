import { Component } from '@angular/core';
import { DataSharingService } from 'src/app/shared/service/data-sharing.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent {

  blog: any;
  constructor(private dataService: DataSharingService) {}

  ngOnInit(): void {
    this.dataService.getProject("1").subscribe(res => {
      console.log(res)
      this.blog = res;
    })
    }
}
