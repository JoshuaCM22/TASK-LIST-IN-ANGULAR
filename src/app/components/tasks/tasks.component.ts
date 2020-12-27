import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[];

  constructor() {}

  ngOnInit(): void {
    this.tasks = [];
  }

  addTask(task: Task):void {
    this.tasks.push(task);
  }

  deleteTask(task: Task):void {
    this.tasks = this.tasks.filter((x) => x.id !== task.id);
  }
}
