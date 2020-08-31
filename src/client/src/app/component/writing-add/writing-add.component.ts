import { Component, OnInit } from '@angular/core';
import { WritingService } from "../../service/writing.service";
import { Writing } from "../../model/Writing";

@Component({
  selector: 'app-writing',
  templateUrl: './writing-add.component.html',
  styleUrls: ['./writing-add.component.css']
})
export class WritingAddComponent implements OnInit {

  writings: Writing[];
  title: string;
  location: string;
  note: string;
  text: string;
  date: string;
  choosen: boolean;

  constructor(
    private _writingService: WritingService
  ) { 
    this._writingService.getWritings()
      .subscribe(writings => {
        this.writings = writings;
      })
  }

  ngOnInit(): void {
  }

  /*
  public text:string = "";
        public date:string = "";
        public note:string = "";
        public location:string
  */

  addWriting(event){
    event.preventDefault();
    const newWriting:Writing = {
      title: this.title,
      text: this.text,
      date: this.date,
      note: this.note,
      location: this.location,
      choosen: this.choosen
    };
    this._writingService.addWriting(newWriting)
      .subscribe(writing => {
        this.writings.push(writing);
        this.title = '';
        this.text = '';
        this.date = '';
        this.note = '';
        this.location = '';
        this.choosen = false;
      })        
  };  

}
