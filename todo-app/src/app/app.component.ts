import {Component} from '@angular/core';
import{Todo} from './todo';
import { TodoDataService } from './todo-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[TodoDataService]
})
export class AppComponent {

// new Todo
	newTodo: Todo = new Todo();
  constructor(private todoDataService: TodoDataService){

  }

// adding to list
  addTodo(todo) {
  	this.todoDataService.addTodo(this.newTodo);
  	this.newTodo = new Todo();
  }

// toggle status
  toggleTodoComplete(todo){
  	this.todoDataService.toggleTodoComplete(todo);
  }

// delete entirely
  removeTodo(todo){
  	this.todoDataService.deleteTodoById(todo.id);
  }

// Return all todos
  get todos(){
  	return this.todoDataService.getAllTodos();
  }
}


