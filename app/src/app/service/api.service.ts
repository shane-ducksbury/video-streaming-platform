import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

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

  getAllVideos() {
    this.http.get<any>(`${this.apiUrl}${this.apiSuffix}/video/`).subscribe(
      response => {
        console.log(response);
        return response;
      }
    )
  }

  getVideoDetails(id: String): Observable<any> {
    // return this.http.get<any>(`${this.apiUrl}${this.apiSuffix}/video/${id}`).map((result: Response) => result.json()).catch(console.log('Error'));
    // return this.http.get(`${this.apiUrl}${this.apiSuffix}/video/${id}`).pipe(map((response: any) => response.json()));
    return this.http.get(`${this.apiUrl}${this.apiSuffix}/video/${id}`)}


}
