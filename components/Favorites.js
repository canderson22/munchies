import React from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import {
  ListView,
  Spinner,
  ImageBackground,
  Tile,
  Heading,
  Divider,
  Screen
} from '@shoutem/ui';

class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.renderRow = this.renderRow.bind(this);
  }

  componentWillMount() {}

  renderRow(food) {
    return (
      <Screen>
        <TouchableOpacity onPress={() => this.props.selectFood(food)}>
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
      </Screen>
    );
  }

  render() {
    const { foods } = this.props;
    return (
      <View>
        {foods.length > 0 ? (
          <ScrollView>
            <ListView data={foods} renderRow={this.renderRow} />
          </ScrollView>
        ) : (
          <Spinner style={{ color: 'red' }} styleName="large" />
        )}
      </View>
    );
  }
}

export default withNavigation(Favorites);
