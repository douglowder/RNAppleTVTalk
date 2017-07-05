/*
 * Copyright (c) 2017-present, salesforce.com, inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification, are permitted provided
 * that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of conditions and the
 * following disclaimer.
 *
 * Redistributions in binary form must reproduce the above copyright notice, this list of conditions and
 * the following disclaimer in the documentation and/or other materials provided with the distribution.
 *
 * Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or
 * promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED
 * WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A
 * PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR
 * ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED
 * TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
 * HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 *
 * @flow
 */
import React, {
  Component
} from 'react';

import {
  Text,
  View,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Button
} from 'react-native';

import {
  Title,
  BulletedList,
  SlideText,
} from './StyledComponents';

import Icon from './Icon';

import ParallaxExamples from './ParallaxExamples';

const styles = require('./styles').default;

const pages = [
  {
    "key" : "titlePage",
    "title": "React Native\non the Apple TV Platform",
    "body": (
      <View style={{flexDirection: 'row'}}>
        <View>
          <SlideText text="Doug Lowder"/>
          <SlideText text="<dlowder@salesforce.com>" />
        </View>
        <View>
        <Image style={{width: 800, height: 450}}
               source={{uri: 'appletv'}} />
        </View>
      </View>
    )
  },
  {
    "key" : "whatIsTVOS",
    "title" : "Apple TV",
    "body": (
      <BulletedList lines={[
                            'Set top box for HDTVs',
                            'Interaction via a remote control with trackpad',
                            'Has its own App Store',
                            'Great for content, data display, games'
                           ]} />
    )
  },
  {
    "key" : "iOStvOS1",
    "title": "tvOS much like iOS",
    "body": (
      <BulletedList lines={[
                            'Xcode, Objective C, Swift',
                            'tvOS has most iOS Foundation APIs ',
                            'tvOS has most iOS UIKit APIs',
                            '90% of tvOS RN native code is common with iOS'
                          ]} />
    )
  },
  {
    "key" : "iOStvOS2",
    "title": "tvOS is not iOS",
    "body": (
      <BulletedList lines={[
                            'No browser or web views',
                            'No sliders, no switches, no status bar',
                            'Cannot persist data in documents directory'
                          ]} />
    )
  },
  {
    "key" : "iOSTVOS3",
    "title": "tvOS is not iOS",
    "body": (
      <View>
      <SlideText text='No touchscreen!' />
      <SlideText text='Completely different UI input:' />
      <SlideText text='Apple TV focus engine' />
        <Image style={{width: 800, height: 400}}
               source={{uri: 'focusengine'}} />
      </View>

    )
  },
  {
    "key" : "focusEngineToTouchable",
    "title" : "Surfacing focus changes",
    "body" : (
      <View>
        <BulletedList lines={[
          'Native: RCTTVView fires notification',
          'Native: Event emitter fires JS event',
          'JS: Touchable.js receives event and calls Touchable pressIn or pressOut method'
        ]} />
      </View>

    )
  },
  {
    "key": "parallax",
    "title": "Parallax Animations",
    "body" : (
      <View>
        <SlideText text='&lt;TouchableOpacity tvParallaxProperties={...}&gt;' />
        <ParallaxExamples />
      </View>
    )
  },
  {
    "key" : "quickStart",
    "title" : "Try it yourself!",
    "body" : (
      <View>
        <SlideText text='react-native init AwesomeTVApp --version 0.44.3'/>
      <View style={{flexDirection: 'row'}}>
        <BulletedList lines={[
          'Open AwesomeTVApp.xcodeproj',
          'Change to AwesomeTVApp-tvOS scheme',
          'Build and run'
        ]} />
        <Image style={{width: 499, height: 305}}
               source={{uri: 'awesometvapp'}} />

      </View>
      </View>
    )
  },
];

module.exports = pages;
