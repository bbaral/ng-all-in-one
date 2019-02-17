import { Component, OnInit } from '@angular/core';
import {DatePipe} from '@angular/common';
import * as moment from 'moment';

@Component({
  selector: 'app-due-date',
  templateUrl: './due-date.component.html',
  styleUrls: ['./due-date.component.scss']
})
export class DueDateComponent implements OnInit {

  scheduleDate = new Date();
  dueDate = new Date();
  actualSdate: any;
  actualDdate: any;
  pattern: string = 'MM/dd/yyyy HH:mm';
  
  newScheduledate: any;
  newDuedate: any;

  constructor(private datePipe: DatePipe) {

  }

  ngOnInit() {
    this.actualSdate = this.scheduleDate.setDate(20);
    this.actualDdate = this.dueDate.setDate(25);
    
    if (this.actualSdate === moment(Date.now()).add(3, 'days')) {
      this.newScheduledate = 'Today';
    } else {
      // this.newScheduledate = this.datePipe.transform(this.actualSdate.toString());
      this.newScheduledate = moment().add(3, 'days');
    }

  }

}
