import { Component, OnInit } from '@angular/core';
import { WritingService } from '../../service/writing.service';
//import { Writing } from "../../model/Writing";

@Component({
  selector: 'app-writing',
  templateUrl: './writing-add.component.html',
  styleUrls: ['./writing-add.component.css'],
})
export class WritingAddComponent implements OnInit {
  writing = {
    title: '',
    text: '',
    note: '',
    location: '',
    choosen: false,
  };

  submitted = false;

  constructor(private writingService: WritingService) {}

  ngOnInit(): void {}

  saveWriting(): void {
    const data = {
      title: this.writing.title,
      text: this.writing.text,
      note: this.writing.note,
      location: this.writing.location,
      choose: this.writing.choosen
    };

    this.writingService.create(data).subscribe(
      (response) => {
        console.log(response);
        this.submitted = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  newWriting(): void {
    this.submitted = false;
    this.writing = {
      title: '',
      text: '',
      note: '',
      location: '',
      choosen: false,
    };
  }
}
