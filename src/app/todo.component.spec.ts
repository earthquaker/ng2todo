import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { TodoAppComponent } from '../app/todo.component';

beforeEachProviders(() => [TodoAppComponent]);

describe('App: Todo', () => {
  it('should create the app',
      inject([TodoAppComponent], (app: TodoAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'todo works!\'',
      inject([TodoAppComponent], (app: TodoAppComponent) => {
    expect(app.title).toEqual('todo works!');
  }));
});
