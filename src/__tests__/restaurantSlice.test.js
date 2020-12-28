import { createStore } from "redux";
import restaurantsReducer, {
  addRestaurant,
} from "../features/restaurant/restaurantsSlice";

describe("restaurantsReducer", () => {
  test("updates the store on successful dispatch", () => {
    let store = createStore(restaurantsReducer);

    store.dispatch(
      addRestaurant({ name: "Blooming Hill", location: "Blooming Grove, NY" })
    );
    expect(store.getState().restaurants.length).toBe(1);
    expect(store.getState().restaurants[0].name).toBe("Blooming Hill");
    expect(store.getState().restaurants[0].location).toBe("Blooming Grove, NY");
  });
});
