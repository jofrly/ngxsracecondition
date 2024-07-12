import { Injectable } from '@angular/core';
import {
  Action,
  createSelector,
  Selector,
  State,
  StateContext,
} from '@ngxs/store';
import { LoadTodos } from './app.actions';

export interface Todo {
  id: string;
  label: string;
}

export interface ExtendedTodo extends Todo {
  extendedProperty: string;
}

export interface AppStateModel {
  todos: Todo[];
}

@State<AppStateModel>({
  name: 'app',
  defaults: {
    todos: [],
  },
})
@Injectable()
export class AppState {
  @Selector([AppState])
  public static todos(state: AppStateModel): Todo[] {
    return state.todos;
  }

  public static todoById(id: string) {
    return createSelector([AppState.todos], (todos: Todo[]): Todo => {
      return todos.find((todo) => todo.id === id)!;
    });
  }

  public static extendedTodoById(id: string) {
    return createSelector(
      [AppState.todoById(id)],
      (todo: Todo): ExtendedTodo => {
        console.log(todo.id);

        return {
          ...todo,
          extendedProperty: `alo`,
        };
      }
    );
  }

  @Action(LoadTodos)
  loadTodos(ctx: StateContext<AppStateModel>) {
    const id = self.crypto.randomUUID();
    ctx.patchState({
      todos: [
        {
          id,
          label: id,
        },
      ],
    });
  }
}
