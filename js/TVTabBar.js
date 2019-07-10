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

import { TabBarIOS } from 'react-native';

type Tab = {
  key: string,
  name: string,
  value: Object
};

export default class TVTabBar extends Component<
  {
    barColor: string,
    textColor: string,
    selectedTextColor: string,
    tabs: Tab[],
    defaultTabKey?: string
  },
  {
    selectedTabKey: string
  }
> {
  static defaultProps = {
    defaultTabKey: ''
  };

  constructor(props: Object) {
    super(props);
    this.state = {
      selectedTabKey: this.props.defaultTabKey || this.props.tabs[0].key
    };
  }

  updateTab(newTabKey: string) {
    if (this.state.selectedTabKey !== newTabKey) {
      this.setState({
        selectedTabKey: newTabKey
      });
    }
  }

  render() {
    return (
      <TabBarIOS
        unselectedTintColor={this.props.textColor}
        tintColor={this.props.selectedTextColor}
        barTintColor={this.props.barColor}
      >
        {this.props.tabs.map(t => (
          <TabBarIOS.Item
            key={t.key}
            title={t.name}
            selected={this.state && this.state.selectedTabKey === t.key}
            onPress={() => this.updateTab(t.key)}
          >
            {t.value}
          </TabBarIOS.Item>
        ))}
      </TabBarIOS>
    );
  }
}
