import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// SDKを使用するためのConfig情報
const firebaseConfig = {
  apiKey: process.env.FB_API_KEY,
  authDomain: process.env.FB_AUTH_DOMAIN,
  databaseURL: process.env.FB_DB_URL,
  projectId: process.env.FB_PJ_ID,
  storageBucket: process.env.FB_STORAGE_BACKET,
  messagingSenderId: process.env.FB_MESSAGING_SENDER_ID,
  appId: process.env.FB_APP_ID,
  measurementId: process.env.FB_MEASUREMENT_ID
}

// Appの初期化
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}
// 今回使用するAPI
export const auth = firebase.auth()
export const firestore = firebase.firestore()