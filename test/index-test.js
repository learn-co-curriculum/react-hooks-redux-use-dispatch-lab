import { expect } from 'chai';
import sinon from 'sinon';
import { configure, shallow, mount } from 'enzyme';
import React from 'react';
import { ConnectedRestaurantInput, RestaurantInput } from '../src/components/RestaurantInput';
import { configureStore } from '../src/index.js';
import { Provider } from 'react-redux';
import App from '../src/App';
import { ConnectedRestaurants, Restaurants }  from '../src/components/Restaurants';
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('restaurants input', () => {
  it('has an add restaurant type', () => {
    let store = configureStore();
    const wrapper = mount(
      <Provider store={store}>
        < ConnectedRestaurantInput />
      </Provider>
    );
    let WrapperConnectedRestaurantInput = wrapper.find(ConnectedRestaurantInput).first();
    let WrapperRestaurantInput = wrapper.find(RestaurantInput).first();
    expect(typeof(WrapperRestaurantInput.props().addRestaurant)).to.deep.equal('function');
  });

  it('updates the store', () => {
    let store = configureStore();
    const wrapper = mount(
      <Provider store={store}>
        < ConnectedRestaurantInput />
      </Provider>
    );
    let WrapperConnectedRestaurantInput = wrapper.find(ConnectedRestaurantInput).first();
    let WrapperRestaurantInput = wrapper.find(RestaurantInput).first();
    WrapperRestaurantInput.props().addRestaurant({ name: 'chilis', location: 'philly' });
    expect(store.getState().restaurants[0]).to.deep.include({ name: 'chilis', location: 'philly' });
  })

  it('updates the store when the form is submitted', () => {
    let store = configureStore();
    const wrapper = mount(
      <Provider store={store}>
        < ConnectedRestaurantInput />
      </Provider>
    );
    let WrapperConnectedRestaurantInput = wrapper.find(ConnectedRestaurantInput).first();
    let WrapperRestaurantInput = wrapper.find(RestaurantInput).first();
    let restaurantNameInput = wrapper.find('input').first();
    restaurantNameInput.simulate('change', { target: { value: 'chilis' } });
    let locationInput = wrapper.find({type: 'text'}).last();
    locationInput.simulate('change', { target: { value: 'philly' } });
    let form = wrapper.find('form').first();
    form.simulate('submit',  { preventDefault() {} });
    expect(store.getState().restaurants[0]).to.deep.include({ name: 'chilis', location: 'philly' })
  });
});
