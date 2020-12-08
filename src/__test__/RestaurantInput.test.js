import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { expect } from "chai";
import { configure, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import App from "../App";
import restaurantsReducer from "../features/restaurant/restaurantsSlice";

configure({ adapter: new Adapter() });

describe("RestaurantsInput", () => {
  let wrapper;
  let store;

  beforeEach(() => {
    store = createStore(restaurantsReducer);
    wrapper = mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  it("is connected to the store", () => {
    expect(store.getState().restaurants.length).to.equal(0);

    let form = wrapper.find("form").first();
    form.simulate("submit", { preventDefault() {} });

    expect(store.getState().restaurants.length).to.equal(1);
  });

  it("updates the store when the form is submitted", () => {
    expect(store.getState().restaurants.length).to.equal(0);

    let restaurantNameInput = wrapper.find("input").first();
    restaurantNameInput.simulate("change", { target: { value: "chilis" } });
    let locationInput = wrapper.find({ type: "text" }).last();
    locationInput.simulate("change", { target: { value: "philly" } });
    let form = wrapper.find("form").first();
    form.simulate("submit", { preventDefault() {} });
    expect(store.getState().restaurants[0]).to.deep.include({
      name: "chilis",
      location: "philly",
    });
    expect(store.getState().restaurants.length).to.equal(1);
  });
});
