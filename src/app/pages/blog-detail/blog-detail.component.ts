import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPost } from 'src/app/shared/interfaces/blog-post.interface';
import { DataSharingService } from 'src/app/shared/service/data-sharing.service';
import { MetaTagsService } from 'src/app/shared/service/meta-tags.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent {

  public blog: BlogPost;
  isBrowser = false;
  constructor(
    private dataService: DataSharingService, 
    private route: ActivatedRoute,
    private metaService: MetaTagsService,
    @Inject(PLATFORM_ID) private platformId: any) {
      this.isBrowser = isPlatformBrowser(this.platformId)
    }

  ngOnInit(): void {
    this.route.params.subscribe(params => {   
      this.dataService.getProject(params['id']).subscribe(blog => {
        console.log(blog)
        this.blog = blog;

        const meta = {
          title: this.blog?.title,
          description: this.blog?.intro,
          keywords: '',
        }
        this.metaService.updateMetaTags(meta, '')
        if(this.isBrowser) {
          const thumbnail = `${window.location.origin}/${this.blog?.thumbnail}`
          this.metaService.updateMetaTags(meta, thumbnail)
        }
      })
    })
    }
}
