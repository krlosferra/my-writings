import { Component, OnInit } from '@angular/core';

import { WritingService } from "./service/writing.service";
import { Writing } from "./model/Writing";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  private _writingService: WritingService;
  
  lastWriting: Writing;

  ngOnInit(): void {
    this.getLastWriting();
  }

  getLastWriting() {
    //let lastWriting: Writing = {};
    this._writingService.getLastWriting()
    .subscribe(writing => {
      this.lastWriting = writing;
    })
  }

  title = 'client';
}
