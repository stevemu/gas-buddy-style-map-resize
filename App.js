import React from 'react';
import { StyleSheet, Text, View, ScrollView, Animated } from 'react-native';
import { MapView } from 'expo';


// The map will stay at the same size
// the content is a layer above the map
// the map is below the content via zIndex
// when content is moved up and down, the map top margin is adjusted accordingly
export default class App extends React.Component {

  constructor() {
    super();

    // this.map = React.createRef();
  }

  state = {
    contentMarginTopAnim: new Animated.Value(150),
    mapTopMarginAnim: new Animated.Value(-300),
    latitude: 42.2531763,
    longitude: -71.013743,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
          <Animated.View style={{
            width: "100%",
            height: 800,
            position: "absolute",
            left: 0,
            top: this.state.mapTopMarginAnim,
            zIndex: 1
          }}>
            <MapView
              ref={(ref) => { this.map = ref }}
              style={{ flex: 1 }}
              onPress={() => {

                // animate the content area
                Animated.timing(
                  this.state.contentMarginTopAnim,
                  {
                    toValue: 400,
                    duration: 1000
                  }
                ).start();

                // this.setState({
                //   latitude: 42.229069,
                //   longitude: -71.0408741,
                // })

                this.map.animateToRegion({
                  latitude: this.state.latitude - 0.01,
                  longitude: this.state.longitude,
                  latitudeDelta: this.state.latitudeDelta,
                  longitudeDelta: this.state.longitudeDelta
                }, 350);

              }}

              initialRegion={{
                latitude: this.state.latitude,
                longitude: this.state.longitude,
                latitudeDelta: this.state.latitudeDelta,
                longitudeDelta: this.state.longitudeDelta
              }}

            >
              <MapView.Marker
                coordinate={{
                  latitude: this.state.latitude,
                  longitude: this.state.longitude,
                }}
              ></MapView.Marker>

            </MapView>
          </Animated.View>

          <Animated.View style={{
            height: 800,
            width: "100%",
            position: "absolute",
            left: 0,
            top: this.state.contentMarginTopAnim,
            zIndex: 2,
            backgroundColor: "red"
          }}>
            <Text>hello world</Text>
            <Text>hello world</Text>
            <Text>hello world</Text>
            <Text>hello world</Text>
            <Text>hello world</Text>
          </Animated.View>

        </ScrollView>

      </View>
    );
  }
}