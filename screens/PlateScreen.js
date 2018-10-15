import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import { MonoText } from '../components/StyledText';
import { Heading, TextInput, Button, Divider, Title, Icon } from '@shoutem/ui';

class PlateScreen extends React.Component {
  static navigationOptions = {
    title: 'Fill my Plate 🍽'
  };

  constructor(props) {
    super(props);
    this.state = {
      item1: '',
      item2: '',
      item3: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    console.log(this.state);
    this.props.navigation.navigate('Munchies');
  }

  render() {
    return (
      <ScrollView style={styles.container}>
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
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
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
