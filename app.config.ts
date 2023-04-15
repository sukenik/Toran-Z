import 'dotenv/config'

const APP_NAME = 'Toran-Z'
const API_KEY = process.env.API_KEY
const APP_ID = process.env.APP_ID
const AUTH_DOMAIN = process.env.AUTH_DOMAIN
const MESSAGING_SENDER_ID = process.env.MESSAGING_SENDER_ID
const PROJECT_ID = process.env.PROJECT_ID
const STORAGE_BUCKET = process.env.STORAGE_BUCKET

export default {
	slug: APP_NAME,
	name: APP_NAME,
    version: '1.0.1',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'light',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff'
    },
    assetBundlePatterns: [
      '**/*'
    ],
    ios: {
      supportsTablet: true,
      bundleIdentifier: 'com.suking.ToranZ'
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#ffffff'
      },
      package: 'com.suking.ToranZ',
      versionCode: 3
    },
    web: {
      favicon: './assets/favicon.png'
    },
	extra: {
		API_KEY,
		APP_ID,
		AUTH_DOMAIN,
		MESSAGING_SENDER_ID,
		PROJECT_ID,
		STORAGE_BUCKET,
		eas: {
			projectId: '0af22b2f-79f3-4b59-8430-81d56151dec8'
		}
	}
}