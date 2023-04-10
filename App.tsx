import React, { useState } from 'react'
import { Image, StyleSheet, Text, Pressable, View } from 'react-native'
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
    marginTop: 20, 
    marginLeft: 70 
  },
  darkThemeIcon: {
    height: 40,
    width: 40
  },
  headerContainer: {
    display: 'flex', 
    flexDirection: 'row'
  }
})

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [darkTheme, setDarkTheme] = useState(false)

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

  const toggleDarkTheme = () => setDarkTheme(prevState => !prevState)
  
  return (
    <View 
      style={{ ...styles.container, backgroundColor: darkTheme ? 'black' : 'white' }} 
      onLayout={onLayoutRootView}
    >
      <View style={styles.headerContainer}>
        <Pressable 
          onPress={toggleDarkTheme} 
          style={{ ...styles.darkThemeIcon, marginTop: 35 }}
        >
          <Image 
            source={darkTheme ? require('./assets/sun.png') : require('./assets/moon.png')} 
            style={styles.darkThemeIcon} 
          />
        </Pressable>
        <Text style={{ ...styles.appName, color: darkTheme ? 'white': 'black' }}>
          {'תורן פח 2.0'}
        </Text>
      </View>
      <Image source={require('./assets/toran-zevel-2.0.jpeg')} style={styles.image} />
      { !loading && <Winners users={users} darkTheme={darkTheme} /> }
    </View>
  )
}
