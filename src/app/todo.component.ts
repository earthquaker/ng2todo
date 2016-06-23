import { Component } from '@angular/core';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'todo-app',
  templateUrl: 'todo.component.html',
  styleUrls: ['todo.component.css'],
  directives: [MD_BUTTON_DIRECTIVES, MD_INPUT_DIRECTIVES, MD_CARD_DIRECTIVES, MD_TOOLBAR_DIRECTIVES]
})
export class TodoAppComponent {

  title = 'New Todo';

  todos: FirebaseListObservable<any>;

  constructor(af: AngularFire) {
  	this.todos = af.database.list('/todos');
  	console.log(this.todos);
  }

	addTodo(newTodo: string) {
		this.todos.push(newTodo);
	}
	deleteTodo(todoKey: string) {
		console.log(todoKey);
		this.todos.remove(todoKey);
	}
}
