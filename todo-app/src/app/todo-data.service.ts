import { Injectable } from '@angular/core';
import { Todo } from './todo'

@Injectable()
export class TodoDataService {

	lastId: number = 0;

	todos: Todo[] = [];

  constructor() { }

// Add todo. With Api Change to Getter
	addTodo(todo: Todo): TodoDataService{
		if(!todo.id){
			todo.id = ++this.lastId;
		}
		this.todos.push(todo);
		return this;
	}

// delete todo
	deleteTodoById(id: number): TodoDataService {
		this.todos = this.todos
			.filter(todo => todo.id !== id);
		return this;
	}

// update todo
	updateTodoById(id: number, values: Object = {}): Todo {
		let todo = this.getTodoById(id);
		if(!todo){
			return null;
		}
		Object.assign(todo, values);
		return todo;
	}

// return all todos
	getAllTodos(): Todo[]{
		return this.todos;
	}

	getTodoById(id: number): Todo {
		return this.todos
			.filter(todo => todo.id === id)
			.pop()
	}

	toggleTodoComplete(todo: Todo){
		let updatedTodo = this.updateTodoById(todo.id, {
			complete: !todo.complete
		});
		return updatedTodo;
	}

}