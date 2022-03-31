import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  apiUrl: string = 'http://localhost:8080';

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
}
