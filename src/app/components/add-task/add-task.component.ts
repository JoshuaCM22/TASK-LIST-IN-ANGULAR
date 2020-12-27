import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  @Output() addTask: EventEmitter<any> = new EventEmitter();
  id: number;
  titleOfTask: string;
  constructor() {}

  ngOnInit(): void {}
 

  onSubmit():void {
     
    const task = {
      id: uuid(),
      title: this.titleOfTask,
      completed: false,
    };
    
    this.addTask.emit(task);
    this.titleOfTask = null;
  }
}
