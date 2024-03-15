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

import { Text, View, Image, TouchableOpacity } from 'react-native';

const parallaxExamples: Object[] = [
  {
    name: 'default',
    value: {
      enabled: true,
      shiftDistanceX: 2.0,
      shiftDistanceY: 2.0,
      tiltAngle: 0.05,
      magnification: 1.0,
    },
  },
  {
    name: 'enabled = false',
    value: {
      enabled: false,
    },
  },
  {
    name: 'magnification = 1.2',
    value: {
      enabled: true,
      shiftDistanceX: 2.0,
      shiftDistanceY: 2.0,
      tiltAngle: 0.05,
      magnification: 1.2,
    },
  },
  {
    name: 'tiltAngle = 0.3',
    value: {
      enabled: true,
      shiftDistanceX: 2.0,
      shiftDistanceY: 2.0,
      tiltAngle: 0.3,
      magnification: 1.0,
    },
  },
];

class ParallaxExamples extends Component<{}> {
  pressAction() {
    // Need a press action for highlight to show on touchables
  }

  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        {parallaxExamples.map((p, i) => (
          <TouchableOpacity
            key={p.name}
            activeOpacity={0.5}
            onPress={this.pressAction}
            tvParallaxProperties={p.value}
          >
            <View>
              <Image
                style={{ width: 287, height: 201 }}
                source={require('../assets/images/react-logo.png')}
              />
              <Text style={{ width: 287, fontSize: 40 }}>{p.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

module.exports = ParallaxExamples;
