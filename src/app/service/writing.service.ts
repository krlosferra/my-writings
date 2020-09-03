import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const apiUrl = 'http://localhost:9999/api/writings';

@Injectable({
  providedIn: 'root'
})
export class WritingService {

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<any> {
    return this.http.get(apiUrl);
  }

  get(id): Observable<any> {
    return this.http.get(`${apiUrl}/${id}`);
  }

  create(data): Observable<any> {
    return this.http.post(apiUrl, data);
  }

  update(id, data): Observable<any> {
    return this.http.put(`${apiUrl}/${id}`, data);
  }

  delete(id): Observable<any> {
    return this.http.delete(`${apiUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(apiUrl);
  }

  findByTitle(title): Observable<any> {
    return this.http.get(`${apiUrl}?title=${title}`);
  }

  getLast(): Observable<any> {
    return this.http.get(`${apiUrl}` + "/last");
  }

}
