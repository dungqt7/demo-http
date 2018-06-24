import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError, retry, map} from 'rxjs/operators';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
export interface Course {
  description: string;
  courseListIcon: string;
  iconUrl: string;
  longDescription: string;
  url: string;
}
@Injectable({
  providedIn: 'root'
})
export class CourseService {
  constructor( private http: HttpClient ) { }
  getCourse(): Observable<Course[]> {
    return this.http.get<Course[]>('https://angular-http-guide.firebaseio.com/courses.json').pipe(
      retry(3),
      catchError(this.handleError)
    );
  }
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status},` + `body was: ${error.error}`
      );
    }
    return throwError( 'Something bad happened; please try again later.');
  }
}

