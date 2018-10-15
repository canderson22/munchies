import React from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import {
  ListView,
  Spinner,
  ImageBackground,
  Tile,
  Heading,
  Divider
} from '@shoutem/ui';
import axios from 'axios';

export default class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: []
    };

    this.renderRow = this.renderRow.bind(this);
  }

  componentDidMount() {
    axios
      .get('http://localhost:3000/foods')
      .then(res => res.data)
      .then(foods => {
        this.setState({ foods });
      });
  }

  renderRow(food) {
    return (
      <View>
        <TouchableOpacity>
          <ImageBackground
            styleName="large-banner"
            source={{ uri: food.image }}
          >
            <Tile>
              <Heading styleName="lg-gutter-bottom bold">{food.name}</Heading>
            </Tile>
          </ImageBackground>
        </TouchableOpacity>
        <Divider styleName="line" />
      </View>
    );
  }

  render() {
    const { foods } = this.state;
    return (
      <View>
        {foods.length > 0 ? (
          <ScrollView>
            <ListView data={foods} renderRow={this.renderRow} />
          </ScrollView>
        ) : (
          <Spinner color="blue" />
        )}
      </View>
    );
  }
}
