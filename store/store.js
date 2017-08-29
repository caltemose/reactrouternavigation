import { createStore } from 'redux';

const addPlant = (state, action) => {
  return [
    ...state,
    action.payload,
  ]
};

const reducers = (state, action) => {
  switch (action.type) {
    case 'ADD_PLANT':
      return {
        ...state,
        plants: addPlant(state.plants, action),
      };

    case 'SET_PLANTS':
      return {
        ...state,
        plants: action.payload,
      };

    case 'TEST':
      return {
        ...state,
        count: state.count + 1,
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
