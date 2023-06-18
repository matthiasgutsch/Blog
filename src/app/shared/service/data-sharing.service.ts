import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  path = '/assets/data/data.json'

  changedSlides$ = new Subject();
  
  constructor(private http: HttpClient) { }

  private static handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      return throwError(`Client-Side error: ${error.error.message}`);
    } else {
      return throwError(`Backend returned code ${error.status} (body was omitted)`);
    }
  }

  getProject(blogId: string | number): Observable<any> {
    console.log(blogId)
    return this.http.get(this.path)
    .pipe(
      map((res: any) => {
        console.log(res)
        return res.blog.find(item => item.id == blogId);
      }),
      catchError(DataSharingService.handleError))
  }

}
