import React from 'react';
import { MapView } from 'expo';

export default class Map extends React.Component {
  render() {
    return (
      <View>
        <MapView
          style={{ flex: 1 }}
          region={{
            latitude: 40.76727216,
            longitude: -73.99392888,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
        />
      </View>
    );
  }
}
