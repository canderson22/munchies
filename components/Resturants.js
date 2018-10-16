import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Text
} from 'react-native';
import {
  ListView,
  ImageBackground,
  Tile,
  Overlay,
  Button,
  Heading,
  Icon,
  Subtitle,
  Title,
  Divider
} from '@shoutem/ui';
import MonoText from '../components/StyledText';
import getDirections from 'react-native-google-maps-directions';
const Viewport = Dimensions.get('window');

class ResturantsView extends React.Component {
  static navigationOptions = {
    title: 'Restaurants'
  };

  constructor(props) {
    super(props);

    this.state = {
      map: null,
      longitude: null,
      latitude: null
    };

    this.renderMap = this.renderMap.bind(this);

    this.renderRow = this.renderRow.bind(this);
  }
  componentWillMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        this.setState({
          latitude,
          longitude
        });
      },
      { enableHighAccuracy: true, timeout: 20000, maxiumAge: 1000 }
    );
  }
  renderMap() {
    const { latitude, longitude } = this.state;
    const data = {
      source: {
        latitude,
        longitude
      },
      destination: {
        latitude: this.props.restaurants[0].coordinates.latitude,
        longitude: this.props.restaurants[0].coordinates.longitude
      },
      params: [
        {
          key: 'travelmode',
          value: 'driving' // may be "walking", "bicycling" or "transit" as well
        },
        {
          key: 'dir_action',
          value: 'navigate' // this instantly initializes navigation using the given travel mode
        }
      ]
    };

    getDirections(data);
  }

  renderRow(restaurant) {
    console.log(restaurant);
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            this.setState({ map: restaurant });
            this.renderMap();
          }}
        >
          <ImageBackground
            styleName="large-banner"
            source={{ uri: restaurant.image_url }}
          >
            <Tile>
              <Overlay style={{ width: '100%' }}>
                <Heading styleName="md-gutter-bottom">
                  {restaurant.name}
                </Heading>
                <Title styleName="sm-gutter-horizontal">
                  {restaurant.location.address1}
                </Title>
                <Title>{restaurant.location.address2}</Title>
                <Title>{restaurant.location.city}</Title>
                <Subtitle>{restaurant.display_phone}</Subtitle>
              </Overlay>
            </Tile>
          </ImageBackground>
        </TouchableOpacity>
        <Divider styleName="line" />
      </View>
    );
  }

  render() {
    // console.log(this.props);
    return (
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'space-between'
        }}
      >
        <View style={styles.backView}>
          <Button onPress={() => this.props.goBack()}>
            <Icon name="back" />
            <Text>Back</Text>
          </Button>
        </View>
        <ListView data={this.props.restaurants} renderRow={this.renderRow} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    height: '100%',
    width: '100%'
  },
  backView: {
    alignItems: 'flex-start',
    backgroundColor: '#fff'
  }
});

export default ResturantsView;
