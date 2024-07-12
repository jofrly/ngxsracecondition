import { Component, Input } from '@angular/core';
import { AppState, ExtendedTodo, Todo } from '../store/app.state';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  templateUrl: './todo.component.html',
  imports: [CommonModule],
})
export class TodoComponent {
  @Input() todo!: Todo;

  todo$!: Observable<ExtendedTodo>;

  constructor(private store: Store) {}

  ngOnInit() {
    console.log(`ngOnInit ${this.todo.id}`);
    this.todo$ = this.store.select(AppState.extendedTodoById(this.todo.id));
  }

  ngOnDestroy() {
    console.log(`ngOnDestroy ${this.todo.id}`);
  }
}
