import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
import { DataSharingService } from 'src/app/shared/service/data-sharing.service';
import { MetaTagsService } from 'src/app/shared/service/meta-tags.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  private isBrowser: boolean = false;
  blogs = []
  addAnimation = true;

  customOptions: OwlOptions = {
    loop: true,
    autoplay: false,
    center: true,
    dots: false,
    nav: true,
    autoHeight: true,
    autoWidth: true,
    navText: [ '<i class="fa-sharp fa-solid fa-angle-left"></i>', '<i class="fa-sharp fa-solid fa-angle-right"></i>' ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      }
    }
  }

  constructor(
    private dataSharingService: DataSharingService,
    private metaService: MetaTagsService,
    @Inject(PLATFORM_ID) private platformId: any ) {
      this.isBrowser = isPlatformBrowser(this.platformId);
    }

  ngOnInit(): void {
    const metaObject = {
      title: 'Quick Blog | Discover Inspiring Blog Posts for Every Passion | Your Go-To Source for Engaging Content',
      description: "Explore our diverse collection of blog posts covering a wide range of topics. From travel and lifestyle to technology and fashion, our blog has something for everyone. Get inspired and stay informed with our captivating content.",
      keywords: 'Quick Blog, Blog posts, Inspiring, Passion, Travel, Lifestyle, Technology, Fashion, Explore, Diverse, Stay informed',
    }
    this.metaService.updateMetaTags(metaObject, 'https://quickblogs.vercel.app/assets/images/logo.png');
    this.dataSharingService.getBlogs().subscribe(blogs => {
      this.blogs = blogs;
    })
  }

  getPassedData(data: SlidesOutputData) {
    this.dataSharingService.changedSlides$.next(true)
  }
}
