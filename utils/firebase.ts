import { initializeApp } from 'firebase/app'
import { getAnalytics, isSupported, logEvent, setCurrentScreen } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: 'AIzaSyDGAVrUtK9ANN_HcBWIjvVpfP9ErTNd6Ac',
  authDomain: 'prepare-interview-84019.firebaseapp.com',
  databaseURL: 'https://prepare-interview-84019.firebaseio.com',
  projectId: 'prepare-interview-84019',
  storageBucket: 'prepare-interview-84019.appspot.com',
  messagingSenderId: '304434793478',
  appId: '1:304434793478:web:ef53c289c0d88f8f894787',
  measurementId: 'G-B4DMB60RPY',
}

const firebase = initializeApp(firebaseConfig)
let analyticsInstance = null

function checkEnv() {
  if (process.env.NODE_ENV !== 'production') return false
  if (!isSupported()) return false
}

export function analytics() {
  if (!checkEnv()) return
  if (!analyticsInstance) analyticsInstance = getAnalytics(firebase)
  return analyticsInstance
}

export function currentScreen(screenName: string) {
  if (!checkEnv()) return
  setCurrentScreen(analytics(), screenName)
}

export function log(eventName: string) {
  if (!checkEnv()) return
  logEvent(analytics(), eventName)
}
