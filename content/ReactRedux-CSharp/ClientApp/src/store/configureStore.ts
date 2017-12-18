import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { ApplicationState, reducers } from './';
import { History } from 'history';

export default function configureStore(history: History, initialState?: ApplicationState) {

  const middleware = [
    thunk,
    routerMiddleware(history)
  ];

  const windowIfDefined = typeof window === 'undefined' ? null : window as any;

  // In development, use the browser's Redux dev tools extension if installed
  const enhancers = [];
  const isDevelopment = process.env.NODE_ENV === 'development';
  if (isDevelopment && typeof window !== 'undefined' && windowIfDefined.devToolsExtension) {
    enhancers.push(windowIfDefined.devToolsExtension());
  }

  const rootReducer = combineReducers({
    ...reducers,
    routing: routerReducer
  });

  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware), ...enhancers)
  );
}
