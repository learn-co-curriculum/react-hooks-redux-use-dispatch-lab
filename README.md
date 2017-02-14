# mapDispatchToProps Lab

## Objectives

Use the __React Redux__ library to connect the store to the __React__ application.  
Utilize the __Provider__ component, and the __connect()__ function in the process. Make sure to also implement __mapDispatchToProps()__.

## Overview

In this application we will be building an application to keep track of our favorite restaurants. We will keep our __React__ application separated from our __Redux__ application by using the __Provider__ component and the __connect()__ function. We will not include a reference to the store in any component except for the __Provider__.  

## Instructions

What we want to do here is use the __bindActionCreators()__ function from the __Redux__ library and and pass dispatch into our __mapDispatchToProps()__ function so that we can __connect()__ the __addRestaurant()__ function as a props to our __RestaurantInput__ component. 