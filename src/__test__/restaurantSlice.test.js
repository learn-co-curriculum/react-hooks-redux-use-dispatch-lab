import { createStore } from "redux";
import { expect } from "chai";
import restaurantsReducer, {
  addRestaurant,
} from "../features/restaurant/restaurantsSlice";

describe("restaurantsReducer", () => {
  it("updates the store on successful dispatch", () => {
    let store = createStore(restaurantsReducer);

    store.dispatch(
      addRestaurant({ name: "Blooming Hill", location: "Blooming Grove, NY" })
    );
    expect(store.getState().restaurants.length).to.equal(1);
    expect(store.getState().restaurants[0].name).to.equal("Blooming Hill");
    expect(store.getState().restaurants[0].location).to.equal(
      "Blooming Grove, NY"
    );
  });
});
