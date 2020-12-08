// Action Creators
export function addRestaurant(restaurant) {
  return {
    type: "restaurants/add",
    payload: restaurant,
  };
}

// Reducer
const initialState = {
  restaurants: [],
};

export default function restaurantsReducer(state = initialState, action) {
  switch (action.type) {
    case "restaurants/add":
      return {
        ...state,
        restaurants: [...state.restaurants, action.payload],
      };

    default:
      return state;
  }
}
