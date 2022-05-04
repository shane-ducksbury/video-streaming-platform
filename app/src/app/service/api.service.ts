import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  apiUrl: string = 'http://localhost:8080';
  apiSuffix: string = '/api/v1'

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) {}

  //Get Greeting
  getGreeting() {
    this.http.get<any>(`${this.apiUrl}/greeting`).subscribe(
      response => {
        console.log(response);
        return response;
      }
    );
  }

  getAllVideos(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}${this.apiSuffix}/video/`).pipe(catchError(err => {
      return err;
    }))
  }

  getVideoDetails(id: String): Observable<any> {
    const apiRequestUrl = `${this.apiUrl}${this.apiSuffix}/video/${id}`;
    return this.http.get(apiRequestUrl).pipe(catchError(err => {
      return of([]);
    }));
  }

  uploadVideo(formData: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}${this.apiSuffix}/video/upload`, formData, {
      reportProgress: true,
      observe: 'events'
    }).pipe(catchError(err => {
      return of([])
    }));
  }
}
