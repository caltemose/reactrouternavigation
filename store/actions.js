export const test = () => (
  { type: 'TEST' }
);

export const addPlant = (plant) => (
  {
    type: 'ADD_PLANT',
    payload: plant,
  }
)
