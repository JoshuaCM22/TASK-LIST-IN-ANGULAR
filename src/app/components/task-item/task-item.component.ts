import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Task } from '../../models/Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task: Task;
  @Output() deleteTask: EventEmitter<Task> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  setClasses() {
    let classes = {
      task: true,
      'is-complete': this.task.completed,
    };
    return classes;
  }

  onToggle(task):void {
    task.completed = !task.completed;
  }

  onDelete(task):void {
    this.deleteTask.emit(task);
  }
}
