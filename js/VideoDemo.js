import React, { Component } from 'react';

import {
  AlertIOS,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  TVEventHandler,
  View,
} from 'react-native';

import Video from 'react-native-video';

class VideoPlayer extends Component<
  {},
  {
    rate: number,
    volume: number,
    muted: boolean,
    resizeMode: string,
    duration: number,
    currentTime: number,
    controls: boolean,
    paused: boolean,
    skin: string,
    ignoreSilentSwitch: ?boolean,
  },
> {
  player: any;

  _tvEventHandler: any;

  constructor(props: Object) {
    super(props);
    this.state = {
      rate: 1,
      volume: 1,
      muted: false,
      resizeMode: 'contain',
      duration: 0.0,
      currentTime: 0.0,
      controls: false,
      paused: true,
      skin: 'custom',
      ignoreSilentSwitch: null,
    };
  }

  componentDidMount() {
    this._enableTVEventHandler();
  }

  componentWillUnmount() {
    this._disableTVEventHandler();
  }

  onLoad(data) {
    console.log('On load fired!');
    this.setState({ duration: data.duration });
  }

  onProgress(data) {
    this.setState({ currentTime: data.currentTime });
  }

  getCurrentTimePercentage() {
    if (this.state.currentTime > 0) {
      return (
        parseFloat(this.state.currentTime) / parseFloat(this.state.duration)
      );
    } else {
      return 0;
    }
  }

  _enableTVEventHandler() {
    this._tvEventHandler = new TVEventHandler();
    this._tvEventHandler.enable(this, (cmp, evt) => {
      if (evt && evt.eventType === 'playPause') {
        cmp.setState({ paused: !cmp.state.paused });
      }
    });
  }

  _disableTVEventHandler() {
    if (this._tvEventHandler) {
      this._tvEventHandler.disable();
      delete this._tvEventHandler;
    }
  }

  renderPlayPauseControl() {
    const imageName = this.state.paused ? 'play' : 'pause';
    return (
      <TouchableOpacity
        hasTVPreferredFocus={true}
        onPress={() =>
          this.setState(prevState => ({ paused: !prevState.paused }))
        }>
        <Image source={{ uri: imageName }} style={{ width: 80, height: 80 }} />
      </TouchableOpacity>
    );
  }

  renderRewindControl() {
    return (
      <TouchableOpacity onPress={() => this.player.seek(0)}>
        <Image source={{ uri: 'back' }} style={{ width: 80, height: 80 }} />
      </TouchableOpacity>
    );
  }

  renderSkinControl(skin) {
    const isSelected = this.state.skin === skin;
    const selectControls = skin === 'native' || skin === 'embed';
    return (
      <TouchableOpacity
        onPress={() => {
          this.setState({
            controls: selectControls,
            skin,
          });
        }}>
        <Text
          style={[
            styles.controlOption,
            { fontWeight: isSelected ? 'bold' : 'normal' },
          ]}>
          {skin}
        </Text>
      </TouchableOpacity>
    );
  }

  renderRateControl(rate) {
    const isSelected = this.state.rate === rate;

    return (
      <TouchableOpacity
        onPress={() => {
          this.setState({ rate });
        }}>
        <Text
          style={[
            styles.controlOption,
            { fontWeight: isSelected ? 'bold' : 'normal' },
          ]}>
          {rate}x
        </Text>
      </TouchableOpacity>
    );
  }

  renderResizeModeControl(resizeMode) {
    const isSelected = this.state.resizeMode === resizeMode;

    return (
      <TouchableOpacity
        onPress={() => {
          this.setState({ resizeMode });
        }}>
        <Text
          style={[
            styles.controlOption,
            { fontWeight: isSelected ? 'bold' : 'normal' },
          ]}>
          {resizeMode}
        </Text>
      </TouchableOpacity>
    );
  }

  renderFullScreenControl() {
    return (
      <TouchableOpacity
        onPress={() => {
          this.player?.presentFullscreenPlayer();
        }}>
        <Text style={[styles.controlOption, { fontWeight: 'bold' }]}>
          Full Screen
        </Text>
      </TouchableOpacity>
    );
  }

  renderVolumeControl(volume) {
    const isSelected = this.state.volume === volume;

    return (
      <TouchableOpacity
        onPress={() => {
          this.setState({ volume });
        }}>
        <Text
          style={[
            styles.controlOption,
            { fontWeight: isSelected ? 'bold' : 'normal' },
          ]}>
          {volume * 100}%
        </Text>
      </TouchableOpacity>
    );
  }

  renderIgnoreSilentSwitchControl(ignoreSilentSwitch) {
    const isSelected = this.state.ignoreSilentSwitch === ignoreSilentSwitch;

    return (
      <TouchableOpacity
        onPress={() => {
          this.setState({ ignoreSilentSwitch });
        }}>
        <Text
          style={[
            styles.controlOption,
            { fontWeight: isSelected ? 'bold' : 'normal' },
          ]}>
          {ignoreSilentSwitch}
        </Text>
      </TouchableOpacity>
    );
  }

  renderCustomSkin() {
    const flexCompleted = this.getCurrentTimePercentage() * 100;
    const flexRemaining = (1 - this.getCurrentTimePercentage()) * 100;

    return (
      <View style={styles.container}>
        <Video
          ref={ref => {
            this.player = ref;
          }}
          source={{ uri: this.props.uri, type: 'mp4' }}
          style={styles.normal}
          rate={this.state.rate}
          paused={this.state.paused}
          volume={this.state.volume}
          muted={this.state.muted}
          ignoreSilentSwitch={this.state.ignoreSilentSwitch}
          resizeMode={this.state.resizeMode}
          onLoad={data => this.onLoad(data)}
          onProgress={data => this.onProgress(data)}
          onEnd={() => {}}
          repeat={true}
        />

        <View style={styles.controls}>
          <View style={styles.generalControls}>
            <View style={styles.generalControls}>
              <View style={styles.playPauseControl}>
                {this.renderRewindControl()}
                {this.renderPlayPauseControl()}
              </View>
            </View>
            <View style={styles.rateControl}>
              {this.renderRateControl(0.5)}
              {this.renderRateControl(1.0)}
              {this.renderRateControl(2.0)}
            </View>
            <View style={styles.skinControl}>
              {this.renderSkinControl('custom')}
              {this.renderSkinControl('native')}
              {this.renderSkinControl('embed')}
            </View>

            <View style={styles.volumeControl}>
              {this.renderVolumeControl(0.5)}
              {this.renderVolumeControl(1)}
              {this.renderVolumeControl(1.5)}
            </View>

            <View style={styles.resizeModeControl}>
              {this.renderResizeModeControl('cover')}
              {this.renderResizeModeControl('contain')}
              {this.renderResizeModeControl('stretch')}
            </View>
            <View style={styles.resizeModeControl}>
              {this.renderFullScreenControl()}
            </View>
            <View style={styles.generalControls}>
              {Platform.OS === 'ios' && !Platform.isTVOS ? (
                <View style={styles.ignoreSilentSwitchControl}>
                  {this.renderIgnoreSilentSwitchControl('ignore')}
                  {this.renderIgnoreSilentSwitchControl('obey')}
                </View>
              ) : null}
            </View>
          </View>
          <View style={styles.trackingControls}>
            <View style={styles.progress}>
              <View
                style={[styles.innerProgressCompleted, { flex: flexCompleted }]}
              />
              <View
                style={[styles.innerProgressRemaining, { flex: flexRemaining }]}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }

  renderNativeSkin() {
    const videoStyle =
      this.state.skin === 'embed' ? styles.nativeVideoControls : styles.normal;
    return (
      <View style={styles.container}>
        <View style={styles.normal}>
          <Video
            ref={ref => {
              this.player = ref;
            }}
            source={{ uri: this.props.uri, type: 'mp4' }}
            style={videoStyle}
            rate={this.state.rate}
            paused={this.state.paused}
            volume={this.state.volume}
            muted={this.state.muted}
            ignoreSilentSwitch={this.state.ignoreSilentSwitch}
            resizeMode={this.state.resizeMode}
            onLoad={data => this.onLoad(data)}
            onProgress={data => this.onProgress(data)}
            onEnd={() => {
              AlertIOS.alert('Done!');
            }}
            repeat={true}
            controls={this.state.controls}
          />
        </View>
        <View style={styles.controls}>
          <View style={styles.generalControls}>
            <View style={styles.playPauseControl}>
              {this.renderRewindControl()}
              {this.renderPlayPauseControl()}
            </View>
            <View style={styles.skinControl}>
              {this.renderSkinControl('custom')}
              {this.renderSkinControl('native')}
              {this.renderSkinControl('embed')}
            </View>
            <View style={styles.rateControl}>
              {this.renderRateControl(0.5)}
              {this.renderRateControl(1.0)}
              {this.renderRateControl(2.0)}
            </View>

            <View style={styles.volumeControl}>
              {this.renderVolumeControl(0.5)}
              {this.renderVolumeControl(1)}
              {this.renderVolumeControl(1.5)}
            </View>

            <View style={styles.resizeModeControl}>
              {this.renderResizeModeControl('cover')}
              {this.renderResizeModeControl('contain')}
              {this.renderResizeModeControl('stretch')}
            </View>
            <View style={styles.resizeModeControl}>
              {this.renderFullScreenControl()}
            </View>
          </View>
          <View style={styles.generalControls}>
            {Platform.OS === 'ios' && !Platform.isTVOS ? (
              <View style={styles.ignoreSilentSwitchControl}>
                {this.renderIgnoreSilentSwitchControl('ignore')}
                {this.renderIgnoreSilentSwitchControl('obey')}
              </View>
            ) : null}
          </View>
        </View>
      </View>
    );
  }

  render() {
    return this.state.controls
      ? this.renderNativeSkin()
      : this.renderCustomSkin();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  fullScreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  normal: {
    width: 1280,
    height: 720,
  },
  controls: {
    backgroundColor: 'transparent',
    borderRadius: 5,
    position: 'absolute',
    bottom: 44,
    left: 4,
    right: 4,
  },
  progress: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 3,
    overflow: 'hidden',
  },
  innerProgressCompleted: {
    height: 20,
    backgroundColor: '#cccccc',
  },
  innerProgressRemaining: {
    height: 20,
    backgroundColor: '#2C2C2C',
  },
  generalControls: {
    flex: 1,
    flexDirection: 'row',
    overflow: 'hidden',
    paddingBottom: 10,
  },
  playPauseControl: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  skinControl: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  rateControl: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  volumeControl: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  resizeModeControl: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ignoreSilentSwitchControl: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  controlOption: {
    alignSelf: 'center',
    fontSize: 20,
    color: 'white',
    paddingLeft: 2,
    paddingRight: 2,
    lineHeight: 30,
  },
  nativeVideoControls: {
    top: 184,
    height: 300,
  },
});

module.exports = VideoPlayer;
