import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import Winners from './src/Components/Winners'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { useCallback } from 'react'
import useGetUsers from './src/Hooks/useGetUsers'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    height: '50%',
    width: '90%',
    marginBottom: 10,
    borderRadius: 10
  },
  appName: {
    fontSize: 50,
    fontFamily: 'Alef-Bold',
    marginTop: 20
  }
})

SplashScreen.preventAutoHideAsync()

export default function App() {
  const { loading, users } = useGetUsers()

  const [fontsLoaded] = useFonts({
    'Alef-Regular': require('./assets/fonts/Alef-Regular.ttf'),
    'Alef-Bold': require('./assets/fonts/Alef-Bold.ttf')
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }
  
  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Text style={styles.appName}>{'תורן פח 2.0'}</Text>
      <Image source={require('./assets/toran-zevel-2.0.jpeg')} style={styles.image} />
      { !loading && <Winners users={users} /> }
    </View>
  )
}
