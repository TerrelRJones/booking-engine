import {
  Action,
  StateFromReducersMapObject,
  ThunkAction,
  configureStore,
} from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import middlewares from 'store/middlewares';
import reducers from 'store/rootReducers';

export type RootState = StateFromReducersMapObject<typeof reducers>;

export function createStore(preloadedState?: Partial<RootState>) {
  const store = configureStore({
    reducer: reducers,
    preloadedState,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(...middlewares),
  });

  setupListeners(store.dispatch);

  return store;
}

export const store = createStore();

export type AppStore = typeof store;
export type AppDispatch = ReturnType<typeof createStore>['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
