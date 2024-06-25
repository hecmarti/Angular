import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyService {
  private apiUrl = 'https://localhost:5001/api/mycontroller'; // URL de tu API

  constructor(private http: HttpClient) { }

  function1(): Observable<any> {
    return this.http.get(`${this.apiUrl}/function1`);
  }

  function2(): Observable<any> {
    return this.http.get(`${this.apiUrl}/function2`);
  }
}
