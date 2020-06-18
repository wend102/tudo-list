import { Component } from '@angular/core';
import { Todo } from './models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template: '<p>aqui pode ser colocado html,mas o ideal e fazer com templeteUrl como acima <p>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public todos: Todo[] = [];
  public title: String = 'Minhas tarefas';

  constructor() {
    this.todos.push(new Todo(1, 'passear com o cachorro',false));
    this.todos.push(new Todo(2, 'Ir ao supermerdo',true));
    this.todos.push(new Todo(3, 'corta o cabelo',false))
  }
  alterarTexto() {
    this.title = 'Texto alterado'
  }
}