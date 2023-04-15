import { initializeApp } from 'firebase/app'
import { initializeFirestore } from 'firebase/firestore'
import Constants from 'expo-constants'

const firebaseConfig = {
	apiKey: Constants.expoConfig?.extra?.API_KEY,
	appId: Constants.expoConfig?.extra?.APP_ID,
	authDomain: Constants.expoConfig?.extra?.AUTH_DOMAIN,
	messagingSenderId: Constants.expoConfig?.extra?.MESSAGING_SENDER_ID,
	projectId: Constants.expoConfig?.extra?.PROJECT_ID,
	storageBucket: Constants.expoConfig?.extra?.STORAGE_BUCKET
}

const app = initializeApp(firebaseConfig)

const db = initializeFirestore(app, {
  experimentalForceLongPolling: true
})

export default db