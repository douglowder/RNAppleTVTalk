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
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS 'AS IS' AND ANY EXPRESS OR IMPLIED
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
import React, { Component } from 'react';

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
  SmallSlideText,
  UrlSlideText
} from './StyledComponents';

import Icon from './Icon';

import ParallaxExamples from './ParallaxExamples';

const styles = require('./styles').default;

const pages = [
  {
    key: 'titlePage',
    title: 'React Native\non the Big Screen',
    body: (
      <View style={{ flexDirection: 'row' }}>
        <View style={{ margin: 20 }}>
          <SlideText text="Doug Lowder" />
          <SmallSlideText text="Principal Software Engineer, Salesforce" />
          <SmallSlideText text="dlowder@salesforce.com" />
          <SmallSlideText text="Twitter: @douglowder" />
        </View>
        <View>
          <Image
            style={{ width: 800, height: 450 }}
            source={{ uri: 'appletv2' }}
          />
        </View>
      </View>
    )
  },
  {
    key: 'Overview',
    title: 'Overview',
    body: (
      <BulletedList
        lines={['Motivation', 'Apple TV', 'Other TV platforms', 'Future work']}
      />
    )
  },
  {
    key: 'About1',
    title: 'About the author',
    body: (
      <BulletedList
        lines={[
          'Former physicist at UC Berkeley',
          'Been to the South Pole',
          'Plays music on the side',
          'Likes TV (Apple TV in particular)'
        ]}
      />
    )
  },
  {
    key: 'About2',
    title: '',
    body: (
      <View style={{ flexDirection: 'row' }}>
        <Image
          style={{ width: 612, height: 612 }}
          source={{ uri: 'doug-pole' }}
        />
        <Image
          style={{ width: 612, height: 612 }}
          source={{ uri: 'doug-working-cold' }}
        />
      </View>
    )
  },
  {
    key: 'About3',
    title: '',
    body: (
      <Image
        style={{ width: 573, height: 859 }}
        source={{ uri: 'doug-fiddle' }}
      />
    )
  },
  {
    key: 'About4',
    title: '',
    body: (
      <Image
        style={{ width: 1024, height: 768 }}
        source={{ uri: 'doug-sleeping' }}
      />
    )
  },
  {
    key: 'About5',
    title: '',
    body: (
      <Image
        style={{ width: 1024, height: 768 }}
        source={{ uri: 'doug-thinking-react' }}
      />
    )
  },
  {
    key: 'Philosophy',
    title: '',
    body: (
      <Image style={{ width: 800, height: 800 }} source={{ uri: 'despair' }} />
    )
  },
  {
    key: 'RNatSalesforce',
    title: 'React Native at Salesforce',
    body: (
      <View style={{ flexDirection: 'row' }}>
        <View style={{ width: 600 }}>
          <SmallSlideText text="React Native is supported by the Salesforce Mobile SDK" />
          <UrlSlideText text="https://developer.salesforce.com/docs/atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/react_native_samples.htm" />
          <SmallSlideText text="&quot;Dreamhouse&quot; demo app on React Native shown at Dreamforce last year" />
          <UrlSlideText text="https://github.com/ForceDotComLabs/dreamhouse-mobile-react" />
        </View>
        <Image
          style={{ width: 707, height: 671 }}
          source={{ uri: 'dreamhouse' }}
        />
      </View>
    )
  },
  {
    key: 'whatIsTVOS',
    title: 'Apple TV',
    body: (
      <BulletedList
        lines={[
          'Set top box for HDTVs',
          'Interaction via a remote control with trackpad',
          'Has its own App Store',
          'Great for content, data display, games'
        ]}
      />
    )
  },
  {
    key: 'iOStvOS1',
    title: 'tvOS much like iOS',
    body: (
      <BulletedList
        lines={[
          'Xcode, Objective C, Swift',
          'tvOS has most iOS Foundation APIs ',
          'tvOS has most iOS UIKit APIs',
          '90% of tvOS RN native code is common with iOS'
        ]}
      />
    )
  },
  {
    key: 'iOStvOS2',
    title: 'tvOS is not iOS',
    body: (
      <BulletedList
        firstLineStyle={{ color: 'red' }}
        lines={[
          'No browser or web views!!!!!',
          'No sliders, no switches, no status bar',
          'Cannot persist data in documents directory'
        ]}
      />
    )
  },
  {
    key: 'iOSTVOS3',
    title: 'tvOS is not iOS',
    body: (
      <View>
        <SlideText extraStyle={{ color: 'red' }} text="No touchscreen!" />
        <SlideText text="Completely different UI input:" />
        <SlideText text="Apple TV focus engine" />
        <Image
          style={{ width: 800, height: 400 }}
          source={{ uri: 'focusengine' }}
        />
      </View>
    )
  },
  {
    key: 'rntvostimeline',
    title: 'React Native for Apple TV',
    body: (
      <View>
        <BulletedList
          lines={[
            'Begun mid-2016',
            'Merged to facebook/react-native master',
            'Works in releases 0.43 and later',
            'Compilation is tested in Travis CI'
          ]}
        />
        <UrlSlideText text="https://facebook.github.io/react-native/docs/building-for-apple-tv.html" />
        <UrlSlideText text="https://dlowder-salesforce.github.io/react-native-apple-tv/" />
      </View>
    )
  },
  {
    key: 'focusEngineToTouchable',
    title: 'Surfacing focus changes',
    body: (
      <View>
        <BulletedList
          firstLineStyle={{ color: 'blue' }}
          lines={[
            'Uses Touchable components: iOS/Android code works without changes! :)',
            'Native: RCTTVView fires notification',
            'Native: RCTTVNavigationEventEmitter fires JS event',
            'JS: Touchable.js receives event and calls Touchable pressIn or pressOut method'
          ]}
        />
      </View>
    )
  },
  {
    key: 'parallax',
    title: 'Parallax Animations',
    body: (
      <View>
        <SlideText text="&lt;TouchableOpacity tvParallaxProperties={...}&gt;" />
        <ParallaxExamples />
      </View>
    )
  },
  {
    key: 'customEventHandling',
    title: 'Custom handling of TV remote events',
    body: (
      <View>
        <BulletedList
          lines={[
            'Native: RCTTVRemoteHandler gesture recognizers fire notifications',
            'Native: RCTTVNavigationEventEmitter fires JS event',
            'JS: TVEventHandler instances receive the event'
          ]}
        />
      </View>
    )
  },
  {
    key: 'customEventHandling2',
    title: 'Custom handling of TV remote events',
    body: (
      <View>
        <View style={{ height: 50 }} />
        <Image
          style={{ width: 768 * 1.2, height: 616 * 1.2 }}
          source={{ uri: 'tveventhandler' }}
        />
      </View>
    )
  },
  {
    key: 'tvOSTips',
    title: 'UI Tips',
    body: (
      <BulletedList
        lines={[
          'Large sizes for fonts and views (2x - 3x phone)',
          'TabBarIOS for top menu navigation',
          'List views need removeClippedSubviews=false'
        ]}
      />
    )
  },
  {
    key: 'tvOSShippingApp',
    title: 'RN Apple TV apps have shipped!',
    body: (
      <View>
        <UrlSlideText text="https://tv.unsplash.com/" />
        <Image
          style={{ width: 1056 * 0.8, height: 679 * 0.8 }}
          source={{ uri: 'unsplash' }}
        />
      </View>
    )
  },
  {
    key: 'quickStart',
    title: 'Try it yourself!',
    body: (
      <View>
        <SlideText text="react-native init AwesomeTVApp" />
        <View style={{ flexDirection: 'row' }}>
          <BulletedList
            lines={[
              'Open AwesomeTVApp.xcodeproj',
              'Change to tvOS scheme',
              'Build and run'
            ]}
          />
          <Image
            style={{ width: 499, height: 305 }}
            source={{ uri: 'awesometvapp' }}
          />
        </View>
      </View>
    )
  },
  {
    key: 'thanks',
    title: 'Thanks',
    body: (
      <BulletedList
        lines={[
          'Salesforce',
          'Facebook React Native team, esp. Pieter (@javache)',
          'Chain React organizers'
        ]}
      />
    )
  }
];

module.exports = pages;
