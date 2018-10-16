import React from 'react';
import { View, StyleSheet, ScrollView, Dimensions, Text } from 'react-native';
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
const Viewport = Dimensions.get('window');

class ResturantsView extends React.Component {
  static navigationOptions = {
    title: 'Restaurants'
  };

  constructor(props) {
    super(props);

    this.renderRow = this.renderRow.bind(this);
  }

  renderRow(restaurant) {
    console.log(restaurant);
    return (
      <View>
        <ImageBackground
          styleName="large-banner"
          source={{ uri: restaurant.image_url }}
        >
          <Tile>
            <Overlay style={{ width: '100%' }}>
              <Heading styleName="md-gutter-bottom">{restaurant.name}</Heading>
              <Title styleName="sm-gutter-horizontal">
                {restaurant.location.address1}
              </Title>
              <Title>{restaurant.location.address2}</Title>
              <Title>{restaurant.location.city}</Title>
              <Subtitle>{restaurant.display_phone}</Subtitle>
            </Overlay>
          </Tile>
        </ImageBackground>
        <Divider styleName="line" />
      </View>
    );
  }

  render() {
    console.log(this.props);
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
  backView: {
    alignItems: 'flex-start',
    backgroundColor: '#fff'
  }
});

export default ResturantsView;
