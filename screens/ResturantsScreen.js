import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Screen } from '@shoutem/ui';

class ResturantsScreeen extends React.Component {
  static navigationOptions = {
    title: 'Restaurants'
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props.navigation.getParam('category', 'none'));
  }

  render() {
    return (
      <View>
        <View style={styles.backView}>
          <Button
            onPress={() => this.props.navigation.navigate('Munchies')}
            title="Go Back"
          />
        </View>
        <View
          style={{
            flexGrow: 1,
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Text>REstruants Screen</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#fff'
  },
  backView: {
    alignItems: 'flex-start'
  }
});

export default withNavigation(ResturantsScreeen);
