/*
 * Demo code from
 *
 * https://github.com/ldn0x7dc/react-native-media-kit
 *
 * modified for Apple TV
 */
'use strict';

import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity
} from 'react-native';

const width = 1080;
const height = 640;

import {Video} from 'react-native-media-kit';

const HTTP = [
  'http://www.html5videoplayer.net/videos/toystory.mp4'
];

export default class MediaKitDemo extends Component {

  state = {
    muted: false,
    width: width,
    height: width / (16/9),
    controls: false
  };

  render() {
    return (
      <ScrollView
        style={{flex: 1, backgroundColor: '#ffffff'}}>
        <Video
          style={{width: this.state.width, height: this.state.height, marginTop: 50, backgroundColor: 'black'}}
          autoplay={false}
          preload='none'
          loop={true}
          controls={this.state.controls}
          muted={this.state.muted}
          src={'bach-handel-corelli.mp4'}
        />

        <View
          style={{flexDirection: 'row', height: 40}}>
          <TouchableOpacity
            onPress={() => {
              this.setState({
                muted: !this.state.muted
              })
            }}
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>toggle muted</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.setState({
                controls: !this.state.controls
              })
            }}
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>toggle controls</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    );
  }
}
