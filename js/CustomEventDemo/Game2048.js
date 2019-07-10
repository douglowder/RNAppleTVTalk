/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * Game2048 example from https://github.com/facebook/react-native,
 * modified for Apple TV.
 *
 */

const React = require('react');
const ReactNative = require('react-native');
const Platform = require('Platform');
const TVEventHandler = require('TVEventHandler');

const { StyleSheet, Text, View } = ReactNative;

const Animated = require('Animated');
const TouchableBounce = require('TouchableBounce');
const GameBoard = require('./GameBoard');

const SCALE = Platform.isTVOS ? 1.5 : 1;

const BOARD_PADDING = SCALE * 3;
const CELL_MARGIN = SCALE * 4;
const CELL_SIZE = SCALE * 60;
const BORDER_RADIUS = SCALE * 5;

const SIZE_40 = SCALE * 40;
const SIZE_24 = SCALE * 24;
const SIZE_20 = SCALE * 20;
const SIZE_18 = SCALE * 18;

class Cell extends React.Component {
  render() {
    return <View style={styles.cell} />;
  }
}

class Board extends React.Component {
  render() {
    return (
      <View style={styles.board}>
        <View style={styles.row}>
          <Cell />
          <Cell />
          <Cell />
          <Cell />
        </View>
        <View style={styles.row}>
          <Cell />
          <Cell />
          <Cell />
          <Cell />
        </View>
        <View style={styles.row}>
          <Cell />
          <Cell />
          <Cell />
          <Cell />
        </View>
        <View style={styles.row}>
          <Cell />
          <Cell />
          <Cell />
          <Cell />
        </View>
        {this.props.children}
      </View>
    );
  }
}

class Tile extends React.Component<{}, {}> {
  static _getPosition(index): number {
    return (
      BOARD_PADDING + (index * (CELL_SIZE + CELL_MARGIN * 2) + CELL_MARGIN)
    );
  }

  constructor(props: {}) {
    super(props);

    const tile = this.props.tile;

    this.state = {
      opacity: new Animated.Value(0),
      top: new Animated.Value(Tile._getPosition(tile.toRow())),
      left: new Animated.Value(Tile._getPosition(tile.toColumn()))
    };
  }

  calculateOffset(): { top: number, left: number, opacity: number } {
    const tile = this.props.tile;

    const offset = {
      top: this.state.top,
      left: this.state.left,
      opacity: this.state.opacity
    };

    if (tile.isNew()) {
      Animated.timing(this.state.opacity, {
        duration: 100,
        toValue: 1
      }).start();
    } else {
      Animated.parallel([
        Animated.timing(offset.top, {
          duration: 100,
          toValue: Tile._getPosition(tile.toRow())
        }),
        Animated.timing(offset.left, {
          duration: 100,
          toValue: Tile._getPosition(tile.toColumn())
        })
      ]).start();
    }
    return offset;
  }

  render() {
    const tile = this.props.tile;

    const tileStyles = [
      styles.tile,
      styles[`tile${tile.value}`],
      this.calculateOffset()
    ];

    const textStyles = [
      styles.value,
      tile.value > 4 && styles.whiteText,
      tile.value > 100 && styles.threeDigits,
      tile.value > 1000 && styles.fourDigits
    ];

    return (
      <Animated.View style={tileStyles}>
        <Text style={textStyles}>{tile.value}</Text>
      </Animated.View>
    );
  }
}

class GameEndOverlay extends React.Component {
  render() {
    const board = this.props.board;

    if (!board.hasWon() && !board.hasLost()) {
      return null;
    }

    const message = board.hasWon() ? 'Good Job!' : 'Game Over';

    return (
      <View style={styles.overlay}>
        <Text style={styles.overlayMessage}>{message}</Text>
        <TouchableBounce onPress={this.props.onRestart} style={styles.tryAgain}>
          <Text style={styles.tryAgainText}>Try Again?</Text>
        </TouchableBounce>
      </View>
    );
  }
}

class Game2048 extends React.Component<
  {},
  {
    board: GameBoard
  }
> {
  startX: number;

  startY: number;

  _tvEventHandler: any;

  constructor(props: Object) {
    super(props);
    this.state = {
      board: new GameBoard()
    };
    this.startX = 0;
    this.startY = 0;
  }

  componentDidMount() {
    this._enableTVEventHandler();
  }

  componentWillUnmount() {
    this._disableTVEventHandler();
  }

  _enableTVEventHandler() {
    this._tvEventHandler = new TVEventHandler();
    this._tvEventHandler.enable(this, (cmp, evt) => {
      if (evt && evt.eventType === 'right') {
        cmp.setState({ board: cmp.state.board.move(2) });
      } else if (evt && evt.eventType === 'up') {
        cmp.setState({ board: cmp.state.board.move(1) });
      } else if (evt && evt.eventType === 'left') {
        cmp.setState({ board: cmp.state.board.move(0) });
      } else if (evt && evt.eventType === 'down') {
        cmp.setState({ board: cmp.state.board.move(3) });
      } else if (evt && evt.eventType === 'playPause') {
        cmp.restartGame();
      }
    });
  }

  _disableTVEventHandler() {
    if (this._tvEventHandler) {
      this._tvEventHandler.disable();
      delete this._tvEventHandler;
    }
  }

  restartGame() {
    this.setState({ board: new GameBoard() });
  }

  handleTouchStart(event: Object) {
    if (this.state.board.hasWon()) {
      return;
    }

    this.startX = event.nativeEvent.pageX;
    this.startY = event.nativeEvent.pageY;
  }

  handleTouchEnd(event: Object) {
    if (this.state.board.hasWon()) {
      return;
    }

    const deltaX = event.nativeEvent.pageX - this.startX;
    const deltaY = event.nativeEvent.pageY - this.startY;

    let direction = -1;
    if (Math.abs(deltaX) > 3 * Math.abs(deltaY) && Math.abs(deltaX) > 30) {
      direction = deltaX > 0 ? 2 : 0;
    } else if (
      Math.abs(deltaY) > 3 * Math.abs(deltaX) &&
      Math.abs(deltaY) > 30
    ) {
      direction = deltaY > 0 ? 3 : 1;
    }

    if (direction !== -1) {
      this.setState(prevState => {
        prevState.board.move(direction);
      });
    }
  }

  render() {
    const tiles = this.state.board.tiles
      .filter(tile => tile.value)
      .map(tile => <Tile ref={tile.id} key={tile.id} tile={tile} />);

    return (
      <View
        style={styles.container}
        onTouchStart={event => this.handleTouchStart(event)}
        onTouchEnd={event => this.handleTouchEnd(event)}
      >
        <Board>{tiles}</Board>
        <GameEndOverlay
          board={this.state.board}
          onRestart={() => this.restartGame()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  board: {
    padding: BOARD_PADDING,
    backgroundColor: '#bbaaaa',
    borderRadius: BORDER_RADIUS
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(221, 221, 221, 0.5)',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  overlayMessage: {
    fontSize: SIZE_40,
    marginBottom: SIZE_20
  },
  tryAgain: {
    backgroundColor: '#887761',
    padding: SIZE_20,
    borderRadius: BORDER_RADIUS
  },
  tryAgainText: {
    color: '#ffffff',
    fontSize: SIZE_20,
    fontWeight: '500'
  },
  cell: {
    width: CELL_SIZE,
    height: CELL_SIZE,
    borderRadius: BORDER_RADIUS,
    backgroundColor: '#ddccbb',
    margin: CELL_MARGIN
  },
  row: {
    flexDirection: 'row'
  },
  tile: {
    position: 'absolute',
    width: CELL_SIZE,
    height: CELL_SIZE,
    backgroundColor: '#ddccbb',
    borderRadius: BORDER_RADIUS,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  value: {
    fontSize: SIZE_24,
    color: '#776666',
    fontFamily: Platform.isTVOS ? 'Helvetica' : 'Verdana',
    fontWeight: '500'
  },
  tile2: {
    backgroundColor: '#eeeeee'
  },
  tile4: {
    backgroundColor: '#eeeecc'
  },
  tile8: {
    backgroundColor: '#ffbb87'
  },
  tile16: {
    backgroundColor: '#ff9966'
  },
  tile32: {
    backgroundColor: '#ff7755'
  },
  tile64: {
    backgroundColor: '#ff5533'
  },
  tile128: {
    backgroundColor: '#eecc77'
  },
  tile256: {
    backgroundColor: '#eecc66'
  },
  tile512: {
    backgroundColor: '#eecc55'
  },
  tile1024: {
    backgroundColor: '#eecc33'
  },
  tile2048: {
    backgroundColor: '#eecc22'
  },
  whiteText: {
    color: '#ffffff'
  },
  threeDigits: {
    fontSize: SIZE_20
  },
  fourDigits: {
    fontSize: SIZE_18
  }
});

module.exports = Game2048;
