import { Component, OnInit } from '@angular/core';
import { WritingService } from 'src/app/service/writing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  writings: any;
  oneWriting: any;

  constructor(private writingService: WritingService) { }

  ngOnInit(): void {
    this.retrieveLastWriting();
  }

  retrieveLastWriting(): void {
    this.writingService.getLast().subscribe(
      (data) => {
        if (data.length) {
          this.oneWriting = data[0];
          console.log(data);
        } else {
          console.log("There is no writings in DB");
        }
        
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
