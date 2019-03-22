import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { MapView } from 'expo';

export default class App extends React.Component {

  state = {
    mapHeight: 200
  }



  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{flex: 1}}>

          <MapView
            onPress={() => {
              console.log('click');
              this.setState({mapHeight: 300})
            }}
            style={{ flex: 1, height: this.state.mapHeight }}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}

          />
          <Text style={{ height: 300 }}
          >hello world</Text>
        </ScrollView>

      </View>
    );
  }
}