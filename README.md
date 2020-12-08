# Using the useDispatch Hook Lab

## Objectives

Use the `react-redux` library to connect the store to our `react`
application. Utilize the `Provider` component to give your components access
to the Redux store. Make sure to also implement `useDispatch()`.

## Overview

In this application we will be building an application to keep track of our
favorite restaurants. We will keep our `react` application separated from our
`redux` store by using the `Provider` component.

## Instructions

Redux is already set up through `index.js` and the reducer `restaurantsReducer`.
In the `RestaurantInput` component, use the `useDispatch` hook along with the `addRestaurant` action creator to dispatch an action to the store when the form is submitted.

Run this app in the browser to get a sense of how the app should function. Then,
write code to get the tests to pass!
