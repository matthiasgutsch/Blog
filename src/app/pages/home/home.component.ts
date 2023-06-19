import { Component } from '@angular/core';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
import { DataSharingService } from 'src/app/shared/service/data-sharing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  blogs = []
  slides = [
    {img: "http://placehold.it/350x150/000000"},
    {img: "http://placehold.it/350x150/111111"},
    {img: "http://placehold.it/350x150/333333"},
    {img: "http://placehold.it/350x150/666666"}
  ];

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

  constructor(private dataSharingService: DataSharingService) {}

  ngOnInit(): void {
    this.dataSharingService.getBlogs().subscribe(blogs => {
      console.log(blogs)
      this.blogs = blogs;
    })
  }

  getPassedData(data: SlidesOutputData) {
    this.dataSharingService.changedSlides$.next(true)
  }
}
