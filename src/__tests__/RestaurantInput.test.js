import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import App from "../App";
import restaurantsReducer from "../features/restaurant/restaurantsSlice";

let store;

beforeEach(() => {
  store = createStore(restaurantsReducer);
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});

test("updates the store when the form is submitted", () => {
  expect(store.getState().restaurants).toHaveLength(0);

  fireEvent.submit(screen.queryByText(/Submit/));

  expect(store.getState().restaurants).toHaveLength(1);
});

test("uses the values from the form to update the store", () => {
  expect(store.getState().restaurants).toHaveLength(0);

  fireEvent.change(screen.queryByPlaceholderText(/restaurant name/), {
    target: { value: "chilis" },
  });
  fireEvent.change(screen.queryByPlaceholderText(/location/), {
    target: { value: "philly" },
  });
  fireEvent.submit(screen.queryByText(/Submit/));

  expect(store.getState().restaurants).toHaveLength(1);
  expect(store.getState().restaurants[0]).toEqual({
    name: "chilis",
    location: "philly",
  });
});
