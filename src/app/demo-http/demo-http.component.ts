import { Component, OnInit } from '@angular/core';
import {Course, CourseService} from '../course.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-demo-http',
  templateUrl: './demo-http.component.html',
  styleUrls: ['./demo-http.component.css'],
  providers: [ CourseService ],
})
export class DemoHttpComponent implements OnInit {

  data = [];
  constructor(private courseService: CourseService) { }
  showCourse() {
    this.courseService.getCourse().subscribe(data => this.data = data);
  }
  ngOnInit() {
    this.showCourse();
  }

}
