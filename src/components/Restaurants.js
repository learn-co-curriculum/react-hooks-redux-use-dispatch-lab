import React, { Component } from 'react';
import { connect } from 'react-redux'

export class Restaurants extends Component {
  render(){
    let restaurants = this.props.restaurants.map(function(restaurant){
      return <li>{restaurant.restaurantName}</li>
    })
    return(
        <div>
          <ul>
            {restaurants}
          </ul>
        </div>
    )
  }
}


export const ConnectedRestaurants = connect(mapStateToProps)(Restaurants)


function mapStateToProps(state){
  return {restaurants: state.restaurants}
}
