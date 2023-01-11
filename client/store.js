import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import path from path
import reducers from path.resolve(__dirname, './reducers/index');
