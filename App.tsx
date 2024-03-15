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

import SlideShow from './js/SlideShow';

import Slide from './js/Slide';

import VideoDemo from './js/VideoDemo';

import VictoryDemo from './js/VictoryDemo';

import ListViewDemo from './js/ListViewDemo';

import CustomEventDemo from './js/CustomEventDemo';

import TextInputDemo from './js/TextInputDemo';

import FocusGuideDemo from './js/FocusGuideDemo';

import TVTabBar from './js/TVTabBar';

// import StyledComponents from './StyledComponents';

// const { UrlSlideText } = StyledComponents;

const tabs = [
  {
    key: 'slideShow',
    name: 'Presentation',
    value: <SlideShow />,
  },
  {
    key: 'textInputDemo',
    name: 'Text input',
    value: (
      <Slide title="Text input example">
        <TextInputDemo />
      </Slide>
    ),
  },
  {
    key: 'listViewDemo',
    name: 'List view',
    value: <ListViewDemo />,
  },
  {
    key: 'tvRemoteDemo',
    name: 'TV remote',
    value: (
      <Slide title="Siri remote events">
        <CustomEventDemo />
      </Slide>
    ),
  },
  {
    key: 'focusGuideDemo',
    name: 'Focus guide',
    value: (
      <Slide title="TVFocusGuideView">
        <FocusGuideDemo />
      </Slide>
    ),
  },
  {
    key: 'videoDemo',
    name: 'Video',
    value: (
      <Slide title="react-native-video demo app">
        <VideoDemo uri="bach-handel-corelli" />
      </Slide>
    ),
  },
  /*
  {
    key: 'androidDemo',
    name: 'Android',
    value: (
      <Slide title="Android TV">
        <UrlSlideText text="https://github.com/facebook/react-native/pull/16500" />
        <VideoDemo uri="android-tv" />
      </Slide>
    )
  },
 */
  {
    key: 'dataVizDemo',
    name: 'Data viz',
    value: (
      <Slide title="victory-native demo app">
        <VictoryDemo />
      </Slide>
    ),
  },
];

class App extends Component<{}> {
  render() {
    return (
      <TVTabBar
        barColor="#00a1e0"
        textColor="white"
        selectedTextColor="gray"
        tabs={tabs}
        defaultTabKey="slideShow"
      />
    );
  }
}

export default App;
