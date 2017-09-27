import React, { Component } from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native'

export default class PostList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.list}>
            Posts
          </Text>
        </ScrollView>
      </View>
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
