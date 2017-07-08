/*
 * Demo code from
 *
 * https://github.com/ldn0x7dc/react-native-media-kit
 *
 * modified for Apple TV
 * @flow
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

const width = 1280;
const height = 720;

import {Video} from 'react-native-media-kit';

const HTTP = [
  'http://www.html5videoplayer.net/videos/toystory.mp4'
];

export default class MediaKitDemo extends Component {

  state = {
    muted: false,
    width: width,
    height: height,
    controls: true
  };

  render() {
    return (
      <View
        style={{margin: 0, flex: 1, backgroundColor: '#ffffff', alignItems:'flex-start'}}>

        <View
          style={{flexDirection: 'row', height: 50}}>
          <TouchableOpacity
            onPress={() => {
              this.setState({
                muted: !this.state.muted
              })
            }}
            style={{width: 400, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 30}}>toggle muted</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.setState({
                controls: !this.state.controls
              })
            }}
            style={{width: 400, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 30}}>toggle controls</Text>
          </TouchableOpacity>

        </View>

        <Video
          style={{width: this.state.width, height: this.state.height, marginTop: 50, backgroundColor: 'black'}}
          autoplay={false}
          preload='none'
          loop={true}
          controls={this.state.controls}
          muted={this.state.muted}
          src={'bach-handel-corelli.mp4'}
        />

      </View>
    );
  }
}
