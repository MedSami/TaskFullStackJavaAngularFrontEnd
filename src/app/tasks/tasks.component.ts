import { Component, OnInit } from '@angular/core';
import {TaskServiceService} from './task-service.service';
import {Task} from './task.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(private taskService: TaskServiceService) { }

  ngOnInit() {

  }

}
