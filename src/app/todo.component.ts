import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'todo-app',
  templateUrl: 'todo.component.html',
  styleUrls: ['todo.component.css']
})
export class TodoAppComponent {
  title = 'todo works!';
}
