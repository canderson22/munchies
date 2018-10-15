import React from 'react';
import { View, ScrollView } from 'react-native';
import Favorites from '../components/Favorites';
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
      longitude: null
    };
  }

  componentDidMount() {
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

  render() {
    const { food } = this.state;
    return (
      <View
        style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}
      >
        <Favorites />
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
