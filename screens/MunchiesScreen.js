import React from 'react';
import { View, ScrollView } from 'react-native';
import Favorites from '../components/Favorites';
import ResturantsView from '../components/Resturants';

import axios from 'axios';

// import {
//   ListView,
//   ImageBackground,
//   Tile,
//   Subtitle,
//   Title,
//   Divider
// } from '@shoutem/ui';

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
    axios
      .get('http://localhost:3000/foods')
      .then(res => res.data)
      .then(foods => {
        this.setState({ foods });
      });
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
    axios
      .get('http://localhost:3000/restaurants', {
        params: {
          food: food.name,
          latitude: this.state.latitude,
          longitude: this.state.longitude
        }
      })
      .then(res => {
        console.log('res', res);
        this.setState(previousState => {
          return {
            restaurants: res.data,
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

// renderRow(restaurant) {
//   return (
//     <View>
//       <ImageBackground
//         styleName="large-banner"
//         source={{ uri: restaurant.image.url }}
//       >
//         <Tile>
//           <Title styleName="md-gutter-bottom">{restaurant.name}</Title>
//           <Subtitle styleName="sm-gutter-horizontal">
//             {restaurant.address}
//           </Subtitle>
//         </Tile>
//       </ImageBackground>
//       <Divider styleName="line" />
//     </View>
//   );
// }
