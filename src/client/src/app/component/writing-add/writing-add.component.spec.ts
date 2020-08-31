import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WritingAddComponent } from './writing-add.component';

describe('WritingAddComponent', () => {
  let component: WritingAddComponent;
  let fixture: ComponentFixture<WritingAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WritingAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WritingAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
