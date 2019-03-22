import React from 'react';
import { StyleSheet, Text, View, ScrollView, Animated } from 'react-native';
import { MapView } from 'expo';


// The map will stay at the same size
// the content is a layer above the map
// the map is below the content via zIndex
// when content is moved up and down, the map top margin is adjusted accordingly
export default class App extends React.Component {

  state = {
    contentMarginTop: 200,
    contentMarginTopAnim: new Animated.Value(100),
    mapTopMargin: 0
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }}
        >

          <MapView
            onPress={() => {
              console.log('click');
              // this.setState({ contentMarginTop: 300 })

              Animated.timing(
                this.state.contentMarginTopAnim,
                {
                  toValue: 400,
                  duration: 1000
                }
              ).start();
            }}
            style={{
              width: "100%",
              height: 400,
              position: "absolute",
              left: 0,
              top: 50,
              zIndex: 1
            }}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}

          />
          <Animated.View style={{
            height: 300,
            width: "100%",
            position: "absolute",
            left: 0,
            top: this.state.contentMarginTopAnim,
            zIndex: 2,
            backgroundColor: "red"
          }}>
            <Text>hello world</Text>
          </Animated.View>

        </ScrollView>

      </View>
    );
  }
}