import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Chat from "./src/containers/Chat";

export default class App extends React.Component {
  render() {
    return (
      <Chat />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
