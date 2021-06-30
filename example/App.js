/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Sound from 'react-native-sound';
var RNSound = require('react-native').NativeModules.RNSound;

const App: () => Node = () => {

  Sound.setCategory('Playback');

  // Load the sound file 'whoosh.mp3' from the app bundle
  // See notes below about preloading sounds within initialization code below.
  var whoosh = new Sound('whoosh.mp3', '', (error) => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    // loaded successfully
    console.log('duration in seconds: ' + whoosh.getDuration() + ' number of channels: ' + whoosh.getNumberOfChannels());

    // Play the sound with an onEnd callback
    whoosh.play((success) => {
      if (success) {
        console.log('successfully finished playing');
      } else {
        console.log('playback failed due to audio decoding errors');
      }
    });
  });

  return (
    <View>
      <Button title={"Pause"} onPress={() => {whoosh.pause()}}></Button>
      <Button title={"Play"} onPress={() => {whoosh.play()}}></Button>
      <Button title={"Stop"} onPress={() => {whoosh.stop()}}></Button>
      <Button title={"Releasepo"} onPress={() => {whoosh.release()}}></Button>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default App;
