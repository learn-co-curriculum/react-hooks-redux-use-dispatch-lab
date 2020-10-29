# mapDispatchToProps Lab

## Objectives

Use the __React Redux__ library to connect the store to the __React__
application.   Utilize the __Provider__ component, and the __connect()__
function in the process. Make sure to also implement __mapDispatchToProps()__.

## Overview

In this application we will be building an application to keep track of our
favorite restaurants. We will keep our __React__ application separated from our
__Redux__ application by using the __Provider__ component and the __connect()__
function. We will not include a reference to the store in any component except
for the __Provider__.

## Instructions

Redux is already set up through `index.js` and the reducer `manageRestaurants`.
Write a __mapDispatchToProps()__ function that allows us to pass dispatched
actions as props.

Remember that __mapDispatchToProps()__ is provided `dispatch` as an argument
(passed in by `connect` when called), so we can wrap an imported action with
`dispatch` within __mapDispatchToProps()__. Don't forget that the action
provided in `actions/restaurants.js` is a function that _must be called_ in
order to return the action object.

