import { Image, StyleSheet, View } from 'react-native'
import Winners from './src/Components/Winners'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { useCallback } from 'react'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    direction: 'rtl'
  },
  image: {
    height: '60%',
    width: '90%',
    marginTop: 30,
    marginBottom: 10
  }
})

SplashScreen.preventAutoHideAsync()

export default function App() {
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
      <Image source={require('./assets/toran-zevel-2.0.jpeg')} style={styles.image} />
      <Winners />
    </View>
  )
}
