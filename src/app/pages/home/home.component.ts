import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
import { BlogPost } from 'src/app/shared/interfaces/blog-post.interface';
import { DataSharingService } from 'src/app/shared/service/data-sharing.service';
import { MetaTagsService } from 'src/app/shared/service/meta-tags.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  private isBrowser: boolean = false;
  blogs: BlogPost[] = []
  totalData: BlogPost[] = []
  trendingBlogs: BlogPost[] = []
  sportsBlogs: BlogPost[] = []
  entertainmentBlogs: BlogPost[] = []
  isLoading = true;
  totalSkeleton = [1,2,3,4,5,6,7,8,9,10];

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: false,
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
  page = 0;

  constructor(
    private dataSharingService: DataSharingService,
    private metaService: MetaTagsService,
    @Inject(PLATFORM_ID) private platformId: any ) {
      this.isBrowser = isPlatformBrowser(this.platformId);
    }

  ngOnInit(): void {
    const metaObject = {
      title: 'QuickBlogs - Your Source for Quick and Informative Content',
      description: "Explore QuickBlogs for concise and insightful articles on a wide range of topics. Get your daily dose of knowledge and stay informed with informative content.",
      keywords: 'Quick Blog, Blog posts, Sports News, Game Analysis, Athlete Profiles, Sports Highlights, Team Updates, Sports Commentary, Match Previews, Sports Predictions, Player Statistics, Sporting Events, Financial Insights, Investment Tips, Market Analysis, Personal Finance, Economic News, Stock Market Trends, Financial Planning, Wealth Management, Portfolio Strategies, Tax Strategies, Nifty Forecast, Bank Nifty Analysis, Stock Index Predictions, Market Volatility, Trading Strategies, Technical Analysis, Market Trends, Options Trading, Investment Forecast, Market Sentiment',
    }
    this.metaService.updateMetaTags(metaObject, 'https://quickblogs.vercel.app/assets/images/logo.png');
    this.dataSharingService.getBlogs().subscribe(pData => {
      this.blogs = pData.reverse();
    
      this.isLoading = false;
    })
  }

  getPassedData(data: SlidesOutputData) {
    this.dataSharingService.changedSlides$.next(true)
  }

  loadMoreBlogs(): void {
    if(this.blogs.length != this.totalData.length) {
      this.page = this.page + 1;
      const data = this.totalData.slice(9 * this.page, this.blogs.length + 9);
      this.blogs = [...this.blogs, ...data];
      console.log(data, this.totalData, this.blogs)
    }
  }
}
