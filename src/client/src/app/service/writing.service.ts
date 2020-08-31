import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import "rxjs";
import { map } from 'rxjs/operators';

import { Writing } from '../model/Writing'
//var Writing = require('../model/Writing');

@Injectable({
  providedIn: 'root'
})
export class WritingService {

  rootUrl: string = 'http://localhost:3000'; //process.env.ROOT_URL;

  constructor(
    private _http:HttpClient
  ) { }

  getWritings(){
    return this._http.get<Writing[]>(`${this.rootUrl}/api/writing`)
    .pipe(map(res => res));
  }

  getLastWriting(){
    return this._http.get<Writing>(`${this.rootUrl}/api/lastWriting`)
    .pipe(map(res => res));
  }

  addWriting(newWriting: Writing) {
    return this._http.post<Writing>(`${this.rootUrl}/api/writing`, newWriting)
    .pipe(map(res => res));
  }

  deleteWriting(id) {
    return this._http.delete<Writing>(`${this.rootUrl}/api/writing/${id}`)
    .pipe(map(res => res)).toPromise();
  }

  updateWriting(newWriting) {
    return this._http.put<Writing>(`${this.rootUrl}/api/writing/${newWriting._id}`, newWriting)
    .pipe(map(res => res)).toPromise();
  }
}
