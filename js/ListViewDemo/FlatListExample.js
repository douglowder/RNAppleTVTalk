/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow
 */

import type { Item } from './ListExampleShared';

import React from 'react';
import ReactNative from 'react-native';

const { Alert, Animated, StyleSheet, View } = ReactNative;

const {
  ItemComponent,
  ListEmptyComponent,
  ItemSeparatorComponent,
  SeparatorComponent,
  genItemData,
  getItemLayout,
  pressItem
} = require('./ListExampleShared');

const VIEWABILITY_CONFIG = {
  minimumViewTime: 3000,
  viewAreaCoveragePercentThreshold: 100,
  waitForInteraction: true
};

type Props = $ReadOnly<{||}>;
type State = {|
  data: Array<Item>,
  debug: boolean,
  horizontal: boolean,
  inverted: boolean,
  filterText: string,
  fixedHeight: boolean,
  logViewable: boolean,
  virtualized: boolean,
  empty: boolean
|};

class FlatListExample extends React.PureComponent<Props, State> {
  state = {
    data: genItemData(100),
    debug: false,
    horizontal: false,
    inverted: false,
    filterText: '',
    fixedHeight: true,
    logViewable: false,
    virtualized: true,
    empty: false
  };

  _scrollPos = new Animated.Value(0);

  _scrollSinkX = Animated.event(
    [{ nativeEvent: { contentOffset: { x: this._scrollPos } } }],
    { useNativeDriver: true }
  );

  _scrollSinkY = Animated.event(
    [{ nativeEvent: { contentOffset: { y: this._scrollPos } } }],
    { useNativeDriver: true }
  );

  _listRef: Animated.FlatList;

  componentDidUpdate() {
    this._listRef.getNode().recordInteraction(); // e.g. flipping logViewable switch
  }

  _captureRef = ref => {
    this._listRef = ref;
  };

  _pressItem = (key: string) => {
    this._listRef.getNode().recordInteraction();
    pressItem(this, key);
  };

  _getItemLayout = (data: any, index: number) =>
    getItemLayout(data, index, this.state.horizontal);

  _onEndReached = () => {
    if (this.state.data.length >= 1000) {
      return;
    }
    this.setState(state => ({
      data: state.data.concat(genItemData(100, state.data.length))
    }));
  };

  _onRefresh = () => Alert.alert('onRefresh: nothing to refresh :P');

  _renderItemComponent = ({ item, separators }) => (
    <ItemComponent
      item={item}
      horizontal={this.state.horizontal}
      fixedHeight={this.state.fixedHeight}
      onPress={this._pressItem}
      onShowUnderlay={separators.highlight}
      onHideUnderlay={separators.unhighlight}
    />
  );

  // This is called when items change viewability by scrolling into or out of
  // the viewable area.
  _onViewableItemsChanged = (info: {
    changed: Array<{
      key: string,
      isViewable: boolean,
      item: any,
      index: ?number,
      section?: any
    }>
  }) => {
    // Impressions can be logged here
    if (this.state.logViewable) {
      console.log('onViewableItemsChanged');
    }
  };

  render() {
    const filterRegex = new RegExp(String(this.state.filterText), 'i');
    const filter = item =>
      filterRegex.test(item.text) || filterRegex.test(item.title);
    const filteredData = this.state.data.filter(filter);
    return (
      <View style={styles.container}>
        <SeparatorComponent />
        <Animated.FlatList
          ItemSeparatorComponent={ItemSeparatorComponent}
          ListEmptyComponent={ListEmptyComponent}
          data={this.state.empty ? [] : filteredData}
          debug={this.state.debug}
          disableVirtualization={!this.state.virtualized}
          getItemLayout={
            this.state.fixedHeight ? this._getItemLayout : undefined
          }
          horizontal={this.state.horizontal}
          inverted={this.state.inverted}
          key={
            (this.state.horizontal ? 'h' : 'v') +
            (this.state.fixedHeight ? 'f' : 'd')
          }
          keyboardShouldPersistTaps="always"
          keyboardDismissMode="on-drag"
          numColumns={3}
          onEndReached={this._onEndReached}
          onRefresh={this._onRefresh}
          onScroll={
            this.state.horizontal ? this._scrollSinkX : this._scrollSinkY
          }
          onViewableItemsChanged={this._onViewableItemsChanged}
          ref={this._captureRef}
          refreshing={false}
          renderItem={this._renderItemComponent}
          contentContainerStyle={styles.list}
          viewabilityConfig={VIEWABILITY_CONFIG}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(239, 239, 244)',
    width: '100%',
    height: 500
  },
  list: {
    backgroundColor: 'white',
    width: '100%',
    flexGrow: 1
  },
  options: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center'
  },
  searchRow: {
    paddingHorizontal: 10
  }
});

module.exports = FlatListExample;
