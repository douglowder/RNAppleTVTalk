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

import { Text, View } from 'react-native';

const styles = require('./styles').default;

class Title extends Component<{
  text: string
}> {
  render() {
    return <Text style={styles.title}>{this.props.text}</Text>;
  }
}

class SlideText extends Component<{
  text: string,
  extraStyle?: Object
}> {
  render() {
    let style = this.props.extraStyle
      ? [styles.body, this.props.extraStyle]
      : styles.body;
    return <Text style={style}>{this.props.text}</Text>;
  }
}

class SmallSlideText extends Component<{
  text: string
}> {
  render() {
    return <Text style={styles.bodySmall}>{this.props.text}</Text>;
  }
}

class UrlSlideText extends Component<{
  text: string
}> {
  render() {
    return <Text style={styles.bodyUrl}>{this.props.text}</Text>;
  }
}

class BulletedList extends Component<{
  lines: string[],
  firstLineStyle?: Object
}> {
  _renderLine(text: string, i: number) {
    let bulletStyle =
      i == 0 && this.props.firstLineStyle
        ? [styles.body, this.props.firstLineStyle]
        : [styles.body];
    var textStyle = bulletStyle.map(i => i);
    textStyle.push({ flex: 1, paddingLeft: 5 });
    return (
      <View key={'' + i} style={{ flexDirection: 'row' }}>
        <Text style={bulletStyle}>{'\u2022'}</Text>
        <Text style={textStyle}>{text}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.bulletedListContainer}>
        {this.props.lines.map((l, i) => this._renderLine(l, i))}
      </View>
    );
  }
}

module.exports = {
  Title,
  BulletedList,
  SlideText,
  SmallSlideText,
  UrlSlideText
};
