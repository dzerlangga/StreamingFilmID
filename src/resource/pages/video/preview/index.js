/*Example of React Native Video*/
import React, { Component } from 'react';
import {StyleSheet, View ,StatusBar,BackHandler} from 'react-native';
import Video from 'react-native-video';
import Orientation from 'react-native-orientation-locker';

class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }

  componentDidMount(){
      Orientation.lockToLandscape();
      BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  } 

  componentWillUnmount() {
      BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  handleBackButtonClick() {
    this.props.navigation.goBack(null);
    Orientation.lockToPortrait();
    alert('close your video');
    return true;
  }

  render() {
    return (
      <View style={styles.container}>
          <StatusBar animated hidden />
        <Video
          ref={videoPlayer => (this.videoPlayer = videoPlayer)}
          resizeMode='cover'
          onFullScreen={true}
          source={this.props.route.params.idVideo}
          style={styles.mediaPlayer}
          volume={10}
          controls={true}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center'
  },
  mediaPlayer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'black',
  },
});
export default Show;