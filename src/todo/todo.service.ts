import { Injectable } from '@nestjs/common';
import { Todo } from './entity/todo.entity';

@Injectable()
export class TodoService {
  private todos: Todo[] = [
    { id: 1, description: 'Descripción 1', done: false },
    { id: 2, description: 'Descripción 2', done: true },
    { id: 3, description: 'Descripción 3', done: false },
  ];

  findAll(): Todo[] {
    return this.todos;
  }
}
