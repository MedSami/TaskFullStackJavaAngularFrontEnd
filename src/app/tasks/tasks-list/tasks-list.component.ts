import { Component, OnInit } from '@angular/core';
import {Task} from '../task.model';
import {TaskServiceService} from '../task-service.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  tasks: any;
  constructor(private taskService: TaskServiceService) { }

  ngOnInit() {
      this.taskService.getTasks().subscribe(data =>{
          this.tasks = data;

      },error1 => {
          console.log(error1);
      });
      this.taskService.onTaskAdded.subscribe(
          (task: Task) => this.tasks.push(task)
      );
  }

    getDueDateLabel(task: Task){
        return task.completed ? 'badge-success' : 'badge-primary';
    }

    onTaskChange(event, task) {
     this.taskService.saveTask(task, event.target.checked).subscribe();
    }

}
