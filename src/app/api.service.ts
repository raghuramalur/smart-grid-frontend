import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://localhost:7237/api/Nodes/optimize'; // Update this URL based on your backend

  constructor(private http: HttpClient) {}

  getOptimizedNetwork(nodes: any[]): Observable<any> {
    return this.http.post<any>(this.apiUrl, nodes);
  }
}
