/*
 * Modified from FormidableLabs code at
 *
 * https://github.com/FormidableLabs/victory-native-demo
 *
 * @flow
 */
import { random, range } from 'lodash';
import React, { Component } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Platform,
  Text,
  View
} from 'react-native';
import Svg from 'react-native-svg';
import {
  VictoryAxis,
  VictoryChart,
  VictoryGroup,
  VictoryStack,
  VictoryCandlestick,
  VictoryErrorBar,
  VictoryBar,
  VictoryLine,
  VictoryArea,
  VictoryScatter,
  VictoryTooltip,
  VictoryZoomContainer,
  VictoryVoronoiContainer,
  VictorySelectionContainer,
  VictoryTheme,
  VictoryBrushContainer,
  VictoryPie,
  createContainer
} from 'victory-native';

import {
  Title,
  BulletedList,
  SlideText,
  UrlSlideText
} from './StyledComponents';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    paddingLeft: 0,
    paddingRight: 50,
    paddingTop: 50
  },
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === 'ios' ? 'Helvetica' : 'monospace',
    fontWeight: 'bold',
    marginTop: 25,
    marginBottom: 20
  },
  heading: {
    fontSize: 27,
    fontFamily: Platform.OS === 'ios' ? 'Helvetica' : 'monospace',
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 30
  }
});

const candleData = [
  { x: 1, open: 9, close: 30, high: 56, low: 7 },
  { x: 2, open: 80, close: 40, high: 120, low: 10 },
  { x: 3, open: 50, close: 80, high: 90, low: 20 },
  { x: 4, open: 70, close: 22, high: 70, low: 5 },
  { x: 5, open: 20, close: 35, high: 50, low: 10 },
  { x: 6, open: 35, close: 30, high: 40, low: 3 },
  { x: 7, open: 30, close: 90, high: 95, low: 30 },
  { x: 8, open: 80, close: 81, high: 83, low: 75 }
];

const VictoryZoomVoronoiContainer = createContainer('zoom', 'voronoi');

class VictoryDemo extends Component<
  {},
  {
    scrollEnabled: boolean,
    y: Function,
    style: Object,
    transitionData: Object,
    randomData: Object,
    staticRandomData: Object,
    data: Object
  }
> {
  constructor(props: Object) {
    super(props);
    this.state = {
      scrollEnabled: true,
      y: this.getYFunction(),
      style: this.getStyles(),
      transitionData: this.getTransitionData(),
      randomData: this.generateRandomData(),
      staticRandomData: this.generateRandomData(15),
      data: this.getData()
    };
  }
  getYFunction() {
    const n = random(2, 7);
    return (data: Object) =>
      Math.exp(-n * data.x) * Math.sin(2 * n * Math.PI * data.x);
  }

  generateRandomData(points: number = 6) {
    return range(1, points + 1).map(i => ({ x: i, y: i + random(-1, 2) }));
  }

  getData() {
    return range(1, 10).map(i => ({ x: i, y: random(1, 10) }));
  }

  getStyles() {
    const colors = ['red', 'orange', 'magenta', 'gold', 'blue', 'purple'];
    return {
      stroke: colors[random(0, 5)],
      strokeWidth: random(1, 5)
    };
  }

  getTransitionData() {
    const n = random(4, 10);
    return range(n).map(i => {
      return {
        x: i,
        y: random(2, 10)
      };
    });
  }

  changeScroll(scrollEnabled: boolean) {
    this.setState({ scrollEnabled });
  }

  updateDemoData() {
    this.setState({
      y: this.getYFunction(),
      style: this.getStyles(),
      transitionData: this.getTransitionData(),
      randomData: this.generateRandomData(),
      data: this.getData()
    });
  }

  componentDidMount() {
    setInterval(this.updateDemoData.bind(this), 3000);
  }
  render() {
    return (
      <View style={{ alignItems: 'center', margin: 20 }}>
        <Image
          style={{ width: 400, height: 88 }}
          source={{ uri: 'formidable' }}
        />
        <UrlSlideText text="https://formidable.com/open-source/victory/docs/native/" />
        <View style={{ flexDirection: 'row' }}>
          <View style={{ alignItems: 'center' }}>
            <SlideText text="&lt;VictoryBar/&gt;" />
            <VictoryChart width={500} theme={VictoryTheme.material}>
              <VictoryBar
                width={500}
                style={{
                  labels: { fontSize: 30 },
                  data: { fill: 'tomato', opacity: 0.5 }
                }}
                data={[
                  { x: 15, y: 20, label: 1, fill: 'red' },
                  { x: 25, y: 30, label: 2, fill: 'orange' },
                  { x: 35, y: 65, label: 3, fill: 'gold' },
                  { x: 45, y: 50, label: 4, fill: 'blue' },
                  { x: 55, y: 40, label: 5, fill: 'cyan' },
                  { x: 65, y: 30, label: 6, fill: 'green' }
                ]}
              />
              <VictoryScatter
                style={{ data: { fill: 'black' } }}
                data={[
                  { x: 15, y: 20 },
                  { x: 25, y: 30 },
                  { x: 35, y: 65 },
                  { x: 45, y: 50 },
                  { x: 55, y: 40 },
                  { x: 65, y: 30 }
                ]}
              />
            </VictoryChart>
          </View>
          <View style={{ alignItems: 'center' }}>
            <SlideText text="&lt;VictoryPie/&gt;" />

            <VictoryPie
              colorScale="qualitative"
              width={400}
              height={400}
              innerRadius={50}
              labelRadius={120}
              style={{ labels: { fontSize: 30 } }}
              data={this.state.randomData}
              animate={{ duration: 1500 }}
            />
          </View>

          <View style={{ alignItems: 'center' }}>
            <SlideText text="&lt;VictoryScatter/&gt;" />

            <VictoryChart width={500}>
              <VictoryScatter
                style={{
                  tickValues: { fontSize: 30 },
                  labels: { fontSize: 30 }
                }}
                data={[
                  {
                    x: 1,
                    y: 3,
                    fill: 'red',
                    symbol: 'plus',
                    size: 6,
                    label: 'Red'
                  },
                  {
                    x: 2,
                    y: 5,
                    fill: 'magenta',
                    size: 9,
                    opacity: 0.4,
                    label: 'Magenta'
                  },
                  {
                    x: 3,
                    y: 4,
                    fill: 'orange',
                    size: 5,
                    label: 'Orange'
                  },
                  {
                    x: 4,
                    y: 2,
                    fill: 'brown',
                    symbol: 'square',
                    size: 6,
                    label: 'Brown'
                  },
                  {
                    x: 5,
                    y: 5,
                    fill: 'black',
                    symbol: 'triangleUp',
                    size: 5,
                    label: 'Black'
                  }
                ]}
              />
            </VictoryChart>
          </View>
        </View>
      </View>
    );
  }
}

module.exports = VictoryDemo;
