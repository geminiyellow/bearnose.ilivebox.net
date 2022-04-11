import { SCREEN_HEIGHT, STATUS_BAR_HEIGHT } from "constants/Layout";
import { useAuthentication } from "hooks/useAuthentication";
import React, { useEffect, useRef, useState } from "react";
import {
  KeyboardAvoidingView,
  NativeScrollEvent,
  NativeSyntheticEvent,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View
} from "react-native";
import { Text } from 'react-native-paper'

const HomeIndex = () => {
  const {user} = useAuthentication()
  const [loadingMore, setLoadingMore] = useState<boolean>()
  const [refreshing, setRefreshing] = useState<boolean>(false)

  const $scroll = useRef<ScrollView>(null)
  const $ref = useRef<{
    scrollHeight: number,
    preOffsetY: number,
    currentCommentId: number,
    commentContents: { id: number, content: string }[]
  }>({
    scrollHeight: 0, preOffsetY: 0,
    commentContents: [], currentCommentId: 0
  })
  const onScroll = ({nativeEvent}: NativeSyntheticEvent<NativeScrollEvent>) => {
    const {contentOffset: {y}, contentSize: {height}} = nativeEvent
    if (
      y / height > 0.45
      && y > $ref.current.preOffsetY
      && !loadingMore
      && !refreshing
    ) {
      (async () => {
        setLoadingMore(true)
        // TODO: await dispatch(LoadMorePostListRequest())
        setLoadingMore(false)
      })()
    }
    $ref.current.preOffsetY = y
  }

  const onRefresh = async () => {
    setRefreshing(true)
    // TODO: await dispatch(FetchStoryListRequest())
    // TODO: await dispatch(FetchPostListRequest())
    setRefreshing(false)
  }

  useEffect(() => {
    (async () => {
      setRefreshing(true)
      // TODO: await dispatch(FetchStoryListRequest())
      // TODO: await dispatch(FetchPostListRequest())
      setRefreshing(false)
    })()
  }, [user])

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingViewContainer}
        behavior="height"
      >
        <ScrollView
          ref={$scroll}
          keyboardDismissMode="on-drag"
          style={{height: SCREEN_HEIGHT - STATUS_BAR_HEIGHT - 44}}
          scrollEventThrottle={10}
          showsVerticalScrollIndicator={false}
          onScroll={onScroll}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
        >
          <View style={{opacity: loadingMore ? 1 : 0}}>
            {
              loadingMore && <Text>Loading more...</Text>
            }
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default HomeIndex

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  keyboardAvoidingViewContainer: {
    position: "relative"
  }
})
