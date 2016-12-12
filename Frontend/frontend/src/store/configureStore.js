import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers/IndexReducer';

export default function configureStore(){
  const store = createStore(
    reducer,
    undefined,
    compose(
      applyMiddleware(
        thunk,
      ),
      f => f
    )
  );

  return store
}
