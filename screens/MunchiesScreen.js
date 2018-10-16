import React from 'react';
import { View, ScrollView } from 'react-native';
import Favorites from '../components/Favorites';
import ResturantsView from '../components/Resturants';

import axios from 'axios';

export default class MunchiesScreen extends React.Component {
  static navigationOptions = {
    title: 'My Munchies 🌮'
  };

  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      foods: [],
      restaurants: [],
      showResturants: false
    };
  }

  componentDidMount() {
    fetch('http://192.168.0.25:3000/foods')
      .then(res => res.json())
      .then(data => data)
      .then(foods => {
        this.setState({ foods });
      })
      .catch(err => console.log('err', err));
    navigator.geolocation.getCurrentPosition(
      position => {
        const latitude = JSON.stringify(position.coords.latitude);
        const longitude = JSON.stringify(position.coords.longitude);

        this.setState({
          latitude,
          longitude
        });
      },
      { enableHighAccuracy: true, timeout: 20000, maxiumAge: 1000 }
    );
  }

  _selectFood(food) {
    fetch(
      `http://192.168.0.25:3000/restaurants?food=${food.name}&latitude=${
        this.state.latitude
      }&longitude=${this.state.longitude}`
    )
      .then(res => res.json())
      .then(data => {
        this.setState(previousState => {
          return {
            restaurants: data,
            showResturants: !previousState.showResturants
          };
        });
      });
  }

  _goBack() {
    this.setState(previousState => {
      return { showResturants: !previousState.showResturants };
    });
  }

  render() {
    // console.log(this.state);
    return (
      <View
        style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}
      >
        {this.state.showResturants ? (
          <ResturantsView
            restaurants={this.state.restaurants}
            goBack={this._goBack.bind(this)}
          />
        ) : (
          <Favorites
            foods={this.state.foods}
            selectFood={this._selectFood.bind(this)}
          />
        )}
      </View>
    );
  }
}
