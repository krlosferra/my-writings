import { Component, OnInit } from '@angular/core';
import { WritingService } from 'src/app/service/writing.service';

@Component({
  selector: 'app-writing-list',
  templateUrl: './writing-list.component.html',
  styleUrls: ['./writing-list.component.css'],
})
export class WritingListComponent implements OnInit {
  writings: any;
  currentWriting = null;
  currentIndex = -1;
  title = '';

  constructor(private writingService: WritingService) {}

  ngOnInit(): void {
    this.retrieveWritings();
  }

  retrieveWritings(): void {
    this.writingService.getAll().subscribe(
      (data) => {
        this.writings = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  refreshList(): void {
    this.retrieveWritings();
    this.currentWriting = null;
    this.currentIndex = -1;
  }

  setActiveWriting(tutorial, index): void {
    this.currentWriting = tutorial;
    this.currentIndex = index;
  }

  removeAllWritings(): void {
    this.writingService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveWritings();
        },
        error => {
          console.log(error);
        });
  }

  searchTitle(): void {
    this.writingService.findByTitle(this.title)
      .subscribe(
        data => {
          this.writings = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }


}
