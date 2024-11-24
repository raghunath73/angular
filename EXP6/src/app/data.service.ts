// data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://api.example.com/items'; // Replace with your actual API URL

  constructor(private http: HttpClient) { }

  // Method to fetch data from the server
  getItems(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
