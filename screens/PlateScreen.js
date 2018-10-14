import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { MonoText } from '../components/StyledText';

export default class PlateScreen extends React.Component {
  static navigationOptions = {
    title: 'Fill my Plate 🍽'
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.textBox}>
          <MonoText>Enter your favorite foods.</MonoText>
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
  }
});
