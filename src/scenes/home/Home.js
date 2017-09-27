import React, { Component } from 'react'
import {
  StyleSheet,
  TabBarIOS,
  View,
} from 'react-native'

import { PostList, FavoritesList, Settings } from '../../components'

const POSTS_TAB = 'posts'
const FAVORITES_TAB = 'favorites'
const SETTINGS_TAB = 'settings'

export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedTab: POSTS_TAB,
    }
  }

  onTabPress(tab) {
    this.setState({ selectedTab: tab })
  }

  render() {
    return (
      <View style={styles.container}>
        <TabBarIOS selectedTab={this.state.selectedTab}>
          <TabBarIOS.Item
            title="Posts"
            selected={this.state.selectedTab === POSTS_TAB}
            systemIcon="featured"
            onPress={() => this.onTabPress(POSTS_TAB)}>
            <PostList />
          </TabBarIOS.Item>

          <TabBarIOS.Item
            title="Favorites"
            selected={this.state.selectedTab === FAVORITES_TAB}
            systemIcon="favorites"
            onPress={() => this.onTabPress(FAVORITES_TAB)}>
            <FavoritesList />
          </TabBarIOS.Item>

          <TabBarIOS.Item
            title="Settings"
            selected={this.state.selectedTab === SETTINGS_TAB}
            systemIcon="search"
            onPress={() => this.onTabPress(SETTINGS_TAB)}>
            <Settings />
          </TabBarIOS.Item>
        </TabBarIOS>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1,
  },
})
