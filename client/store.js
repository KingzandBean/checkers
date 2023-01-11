import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

//import path from path
import reducers from './reducers/index';
import { loadBoard } from './actions/actions';

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk)),
);

//store.dispatch(loadBoard());

export default store;