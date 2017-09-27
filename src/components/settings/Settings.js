import React, { Component } from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native'

export default class Settings extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.list}>
            Settings
          </Text>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  list: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
})
