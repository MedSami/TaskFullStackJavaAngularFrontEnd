import {EventEmitter, Injectable} from '@angular/core';
import {Task} from './task.model';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TaskServiceService {
    onTaskAdded = new EventEmitter<Task>();
  private host = 'http://localhost:8080/api/tasks/';

  constructor(private http: HttpClient) { }

  getTasks() {
      return this.http.get(this.host);
  }
  saveTask(task : Task, checked: boolean) {
      task.completed = checked;
      return this.http.post(this.host + 'save', task);
  }

    addTask(task: Task) {
        return this.http.post(this.host + 'save', task);
    }
}
