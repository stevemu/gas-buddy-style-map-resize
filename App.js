import React from 'react';
import { StyleSheet, Text, View, ScrollView, Animated, TouchableOpacity } from 'react-native';
import { MapView } from 'expo';


// The map will stay at the same size
// the content is a layer above the map
// the map is below the content via zIndex
// when content is moved up and down, the map top margin is adjusted accordingly

let contentMarginTopAnim = new Animated.Value(200);
let mapTopMarginAnim = new Animated.Value(-250);


export default class App extends React.Component {

  state = {
    region: {
      latitude: 42.2276473,
      longitude: -71.0355173,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
          <View style={{ backgroundColor: "black", height: 1400 }}></View>
          <Animated.View
            style={{
              width: "100%",
              height: 800,
              position: "absolute",
              left: 0,
              top: mapTopMarginAnim,
              zIndex: 1
            }}
          >
            <MapView
              style={{ flex: 1 }}
              onPress={() => {
                Animated.timing(
                  contentMarginTopAnim,
                  {
                    toValue: 400,
                    duration: 1000
                  }
                ).start();

                Animated.timing(
                  mapTopMarginAnim,
                  {
                    toValue: -100,
                    duration: 1000
                  }
                ).start();

              }}
              initialRegion={this.state.region}
            >
              <MapView.Marker
                coordinate={this.state.region}
              ></MapView.Marker>

            </MapView>
          </Animated.View>
          <Animated.View style={{
            width: "100%",
            position: "absolute",
            left: 0,
            top: contentMarginTopAnim,
            zIndex: 2,
            backgroundColor: "red"
          }}
          >
            <TouchableOpacity onPress={() => {
              // console.log('pressed');
              Animated.timing(
                contentMarginTopAnim,
                {
                  toValue: 200,
                  duration: 1000
                }
              ).start();

              Animated.timing(
                mapTopMarginAnim,
                {
                  toValue: -250,
                  duration: 1000
                }
              ).start();
            }}>
              <View>
                <Text>Press to make map smaller again</Text>
              </View>
            </TouchableOpacity>
            <Text>content</Text>
            <Text>content</Text>
            <Text>content</Text>
            <Text>content</Text>
            <Text>content</Text>
            <Text>content</Text>
            <Text>content</Text>
            <Text>content</Text>
            <Text>content</Text>
            <Text>content</Text>
            <Text>content</Text>
            <Text>content</Text>
            <Text>content</Text>
            <Text>content</Text>
            <Text>content</Text>
            <Text>content</Text>
            <Text>content</Text>
            <Text>content</Text>
            <Text>content</Text>
            <Text>content</Text>
            <Text>content</Text>
            <Text>content</Text>
            <Text>content</Text>
            <Text>content</Text>
            <Text>content</Text>
            <Text>content</Text>
            <Text>content</Text>
            <Text>content</Text>
            <Text>content</Text>
            <Text>content</Text>
            <Text>content</Text>
            <Text>content</Text>
            <Text>content</Text>
            <Text>content</Text>
            <Text>content</Text>
            <Text>content</Text>
            <Text>content</Text>
            <Text>content</Text>
            <Text>content</Text>
            <Text>content</Text>
            <Text>content</Text>
            <Text>content</Text>
            <Text>content</Text>
            <Text>content</Text>
            <Text>content</Text>
            <Text>content</Text>
            <Text>content</Text>
            <Text>content</Text>
          </Animated.View>
        </ScrollView>
      </View>
    );
  }
}