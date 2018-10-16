import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

class ResturantsView extends React.Component {
  static navigationOptions = {
    title: 'Restaurants'
  };

  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <View>
        <View style={styles.backView}>
          <Button onPress={() => this.props.goBack()} title="Go Back" />
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

export default ResturantsView;
