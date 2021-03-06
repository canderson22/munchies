import React from 'react';
import { ScrollView, View, Text, StyleSheet, Dimensions } from 'react-native';
import Toast, { DURATION } from 'react-native-easy-toast';

import { withNavigation } from 'react-navigation';
import { MonoText } from '../components/StyledText';
import {
  Heading,
  TextInput,
  Button,
  Divider,
  Title,
  Icon,
  Spinner
} from '@shoutem/ui';
const Viewport = Dimensions.get('window');

class PlateScreen extends React.Component {
  static navigationOptions = {
    title: 'Fill my Plate 🍽'
  };

  constructor(props) {
    super(props);
    this.state = {
      item1: '',
      item2: '',
      item3: '',
      spinner: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { item1, item2, item3 } = this.state;
    fetch('http://10.6.64.40:3000/getfoods/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        item1,
        item2,
        item3
      })
    })
      .then(res => {
        this.refs.toast.show('Your munchies were added!', DURATION.LENGTH_LONG);
        this.setState(previousState => {
          return { item1: '', item2: '', item3: '', rendering: false };
        });
      })
      .catch(err => {
        console.log(err);
        this.refs.toast.show(
          'Already saved in your munchies',
          DURATION.LENGTH_LONG
        );
        this.setState(previousState => {
          return { item1: '', item2: '', item3: '', rendering: false };
        });
      });
    this.setState(previousState => {
      return { item1: '', item2: '', item3: '', rendering: true };
    });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Toast
          ref="toast"
          style={{
            backgroundColor: 'white',
            borderWidth: 2,
            borderColor: '#333'
          }}
          position="top"
          positionValue={200}
          fadeInDuration={750}
          fadeOutDuration={1000}
          opacity={0.8}
          textStyle={{ color: '#333', fontSize: 20 }}
        />
        {this.state.rendering ? (
          <Spinner style={{ color: 'red' }} />
        ) : (
          <View style={styles.textBox}>
            <Heading>
              <MonoText style={{ textAlign: 'center' }}>
                Enter some of your favorite foods.
              </MonoText>
            </Heading>
            <Divider />
            <Divider styleName="line" />
            <Divider />
            <Title>Food type</Title>
            <Divider />
            <TextInput
              selectionColor={'black'}
              onChangeText={item1 => this.setState({ item1 })}
              style={{
                backgroundColor: '#d3d3d3',
                borderColor: 'silver',
                borderWidth: 1,
                color: '#333',
                width: '100%',
                fontSize: 20
              }}
              placeholder={'Favorite Food'}
              defaultValue={this.state.item1}
            />
            <Divider />
            <Divider styleName="line" />
            <Divider />
            <TextInput
              selectionColor={'black'}
              onChangeText={item2 => this.setState({ item2 })}
              style={{
                backgroundColor: '#d3d3d3',
                borderColor: 'silver',
                borderWidth: 1,
                color: '#333',
                width: '100%',
                fontSize: 20
              }}
              placeholder={'Favorite Food'}
              defaultValue={this.state.item2}
            />
            <Divider />
            <Divider styleName="line" />
            <Divider />
            <TextInput
              selectionColor={'black'}
              onChangeText={item3 => this.setState({ item3 })}
              style={{
                backgroundColor: '#d3d3d3',
                borderColor: 'silver',
                borderWidth: 1,
                color: '#333',
                width: '100%',
                fontSize: 20
              }}
              placeholder={'Favorite Food'}
              defaultValue={this.state.item3}
            />
            <Divider />
            <Button
              styleName="secondary full-width"
              title=""
              onPress={this.handleSubmit}
            >
              <Icon name="add-to-cart" style={{ fontSize: 20 }} />
              <Text style={{ color: '#fff', fontSize: 20 }}>ADD</Text>
            </Button>
          </View>
        )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
    height: Viewport.height
  },
  textBox: {
    flex: 1,
    alignItems: 'center'
  },
  input: {
    backgroundColor: 'gray',
    borderColor: 'silver'
  }
});

export default withNavigation(PlateScreen);
