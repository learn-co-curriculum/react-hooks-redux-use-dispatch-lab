import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Restaurants extends Component {

  render() {

    let restaurants = this.props.restaurants.map((restaurant, index) => <li key={index}>{restaurant.restaurantName}</li>);

    return (
      <div>
        <ul>
          {restaurants}
        </ul>
      </div>
    );
  }
};

function mapStateToProps(state){
  return {restaurants: state.restaurants}
}

export const ConnectedRestaurants = connect(mapStateToProps)(Restaurants);
