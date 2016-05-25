import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { RodolphAppComponent } from '../app/rodolph.component';

beforeEachProviders(() => [RodolphAppComponent]);

describe('App: Rodolph', () => {
  it('should create the app',
      inject([RodolphAppComponent], (app: RodolphAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'rodolph works!\'',
      inject([RodolphAppComponent], (app: RodolphAppComponent) => {
    expect(app.title).toEqual('rodolph works!');
  }));
});
