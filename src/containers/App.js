import React from 'react';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import appStore from '../reducers';
import Notes from './Notes';

const middleWare = applyMiddleware(thunkMiddleware)

let store = createStore(
  appStore,
  middleWare,
)


const App = () => (
  <Provider store={store}>
    <Notes />
  </Provider>
)

export default App;
