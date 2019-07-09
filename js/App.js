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
  ScrollView,
  TabBarIOS,
  Text,
  Image,
  TextInput,
  TVMenuControl,
  TouchableOpacity,
  View
} from 'react-native';

import SlideShow from './SlideShow';

import Slide from './Slide';

import Game2048 from './Game2048';

import VideoDemo from './VideoDemo';

import VictoryDemo from './VictoryDemo';

import ListViewDemo from './ListViewDemo';

import Icon from './Icon';

import CustomEventDemo from './CustomEventDemo';

import TextInputDemo from './TextInputDemo';

import { UrlSlideText } from './StyledComponents';

const styles = require('./styles').default;

class App extends Component<
  {},
  {
    selectedTab: string,
    menuButtonEnabled: boolean
  }
> {
  constructor(props: Object) {
    super(props);
    this.state = {
      selectedTab: 'slideShow',
      menuButtonEnabled: false
    };
  }

  updateTab(newTab: string) {
    if (this.state.selectedTab !== newTab) {
      this.setState({
        selectedTab: newTab
      });
    }
  }

  toggleMenuButton() {
    if (this.state.menuButtonEnabled) {
      TVMenuControl.disableTVMenuKey();
      this.setState({
        menuButtonEnabled: false
      });
    } else {
      TVMenuControl.enableTVMenuKey();
      this.setState({
        menuButtonEnabled: true
      });
    }
  }

  render() {
    return (
      <TabBarIOS
        unselectedTintColor="white"
        tintColor="red"
        barTintColor="#00a1e0"
      >
        <TabBarIOS.Item
          title="Presentation"
          selected={this.state && this.state.selectedTab === 'slideShow'}
          onPress={() => this.updateTab('slideShow')}
        >
          <SlideShow />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Text input"
          selected={this.state && this.state.selectedTab === 'textInputDemo'}
          onPress={() => this.updateTab('textInputDemo')}
        >
          <Slide title="Text input example">
            <TextInputDemo />
          </Slide>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="List view"
          selected={this.state && this.state.selectedTab === 'listViewDemo'}
          onPress={() => this.updateTab('listViewDemo')}
        >
          <ListViewDemo />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="TV remote"
          selected={this.state && this.state.selectedTab === 'tvRemoteDemo'}
          onPress={() => this.updateTab('tvRemoteDemo')}
        >
          <Slide title="Siri remote events">
            <CustomEventDemo />
          </Slide>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Video"
          selected={this.state && this.state.selectedTab === 'videoDemo'}
          onPress={() => this.updateTab('videoDemo')}
        >
          <Slide title="react-native-video demo app">
            <VideoDemo uri="bach-handel-corelli" />
          </Slide>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Android"
          selected={this.state && this.state.selectedTab === 'Android'}
          onPress={() => this.updateTab('Android')}
        >
          <Slide title="Android TV">
            <UrlSlideText text="https://github.com/facebook/react-native/pull/16500" />
            <VideoDemo uri="android-tv" />
          </Slide>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="Data viz"
          selected={this.state && this.state.selectedTab === 'dataVizDemo'}
          onPress={() => this.updateTab('dataVizDemo')}
        >
          <Slide title="victory-native demo app">
            <VictoryDemo />
          </Slide>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

module.exports = App;
