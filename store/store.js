import { createStore } from 'redux';

const addPlant = (state, action) => {
  return [
    ...state,
    action.payload,
  ]
};

const addPlantToObject = (state, action) => {
  return {
    ...state,
    [action.payload.id]: action.payload,
  }
}

const addPlantIdToArray = (state, action) => {
  return [
    ...state,
    action.payload.id,
  ]
}

const createAllIds = (plants) => {
  const allIds = [];
  plants.forEach(plant => {
    allIds.push(plant.id);
  });
  return allIds;
}

const createById = (plants) => {
  const byId = {};
  plants.forEach(plant => {
    byId[plant.id] = { ...plant };
  });
  return byId;
}

const reducers = (state, action) => {
  switch (action.type) {
    case 'ADD_PLANT':
      return {
        ...state,
        plants: addPlant(state.plants, action),
        plantsById: addPlantToObject(state.plantsById, action),
        plantIds: addPlantIdToArray(state.plantIds, action),
      };

    case 'SET_PLANTS':
      return {
        ...state,
        plants: action.payload,
        plantsById: createById(action.payload),
        plantIds: createAllIds(action.payload),
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

export const getPlantById = (state, id) => {
  return state.plantsById[id] || {}
}
