import { createStore } from 'redux';

const reducers = (state, action) => {
  switch (action.type) {
    case 'TEST':
      return {
        ...state,
        count: state.count + 1
      };

    default:
      return state;
  }
}

const defaultState = {
  version: '0.1.0',
  plants: [],
  count: 0,
}

const configureStore = () => {
  return createStore(reducers, defaultState);
};

export default configureStore;
