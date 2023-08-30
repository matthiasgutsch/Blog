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
  blogs = []
  trendingBlogs: BlogPost[] = []
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
      title: 'QuickBlogs - Your Source for Quick and Informative Content',
      description: "Explore QuickBlogs for concise and insightful articles on a wide range of topics. Get your daily dose of knowledge and stay informed with informative content.",
      keywords: 'Quick Blog, Blog posts, Sports News, Game Analysis, Athlete Profiles, Sports Highlights, Team Updates, Sports Commentary, Match Previews, Sports Predictions, Player Statistics, Sporting Events, Financial Insights, Investment Tips, Market Analysis, Personal Finance, Economic News, Stock Market Trends, Financial Planning, Wealth Management, Portfolio Strategies, Tax Strategies, Nifty Forecast, Bank Nifty Analysis, Stock Index Predictions, Market Volatility, Trading Strategies, Technical Analysis, Market Trends, Options Trading, Investment Forecast, Market Sentiment',
    }
    this.metaService.updateMetaTags(metaObject, 'https://quickblogs.vercel.app/assets/images/logo.png');
    this.dataSharingService.getBlogs().subscribe(blogs => {
      this.blogs = blogs.reverse();
      this.trendingBlogs = this.blogs.filter(x => x.isTrending == true);
    })
  }

  getPassedData(data: SlidesOutputData) {
    this.dataSharingService.changedSlides$.next(true)
  }
}
