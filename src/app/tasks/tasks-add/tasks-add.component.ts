import { Component, OnInit } from '@angular/core';
import {TaskServiceService} from '../task-service.service';
import {Task} from '../task.model';

@Component({
  selector: 'app-tasks-add',
  templateUrl: './tasks-add.component.html',
  styleUrls: ['./tasks-add.component.css']
})
export class TasksAddComponent implements OnInit {
    addTaskValue: string = null
  constructor(private taskService: TaskServiceService) { }

  ngOnInit() {
  }

    onTaskAdd(event) {
        let task: Task = new Task(null, event.target.value,false, this.getTodayAsString());
        this.taskService.addTask(task)
            .subscribe(
                (newTask: Task) => {
                    // clear the input
                    this.addTaskValue = ' ';
                    this.taskService.onTaskAdded.emit(newTask);
                }
            )
    }

    getTodayAsString() {
        let today = new Date();
        let dd: any = today.getDate();
        let mm: any = today.getMonth() + 1;
        let yyyy = today.getFullYear();

        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }

        return mm + '/' + dd + '/' + yyyy;
    }

}