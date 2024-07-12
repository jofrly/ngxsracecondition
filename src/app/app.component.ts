import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngxs/store';
import { AppState } from './store/app.state';
import { CommonModule } from '@angular/common';
import { LoadTodos } from './store/app.actions';
import { TodoComponent } from './todo/todo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, CommonModule, TodoComponent],
})
export class AppComponent {
  todos$ = inject(Store).select(AppState.todos);

  constructor(private store: Store) {}

  ngOnInit() {
    this.loadTodos();
  }

  loadTodos() {
    this.store.dispatch(new LoadTodos());
  }
}
