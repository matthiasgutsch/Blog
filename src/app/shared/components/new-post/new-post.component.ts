import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { DataSharingService } from '../../service/data-sharing.service';
import { debounceTime, map, take, takeLast, tap } from 'rxjs';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit{
  @Input() initSlide = false;


  constructor(private dataSharingService: DataSharingService) {}

  getRandomLinks(): string {
    return `https://picsum.photos/500`
  }

  ngOnInit(): void {
    //init first slide
    this.dataSharingService.changedSlides$.next(true);

    this.dataSharingService.changedSlides$.pipe(tap(x => this.initSlide = false)).subscribe((res: boolean) => {
      setTimeout(() => {
        if(res) this.initSlide = res;
      }, 200);
    })
  }
}
