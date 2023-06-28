import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, Observable, Subject, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  // path = '/assets/data/data.json'
  path = `https://keval101.github.io/blog-json/db.json`

  changedSlides$ = new Subject();
  
  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: any) { }

  getBlogs():  Observable<any> {
    // return this.http.get(this.path).pipe(map((res: any) => res?.blog))
    return this.http.get(this.path).pipe(map((res: any) => res?.blog))
  }

  getProject(blogId: string | number): Observable<any> {
    // return this.http.get(this.path)
    return this.http.get(this.path)
    .pipe(
      map((res: any) => {
        console.log(res)
        return res.blog.find(item => item.id == blogId);
      }))
  }

}
