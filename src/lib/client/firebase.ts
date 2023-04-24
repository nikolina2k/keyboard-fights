import pkg from 'lodash';
const { memoize } = pkg;
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAcZWk1ywBmje6Ld3n1whu5uAwYIKHuIj0",
    authDomain: "keyboard-fights-6af18.firebaseapp.com",
    databaseURL: "https://keyboard-fights-6af18-default-rtdb.firebaseio.com",
    projectId: "keyboard-fights-6af18",
    storageBucket: "keyboard-fights-6af18.appspot.com",
    messagingSenderId: "604846413935",
    appId: "1:604846413935:web:c042a93bb9ec52e9eb959a",
    measurementId: "G-7S9KEZSWNH"
}

export const initFirebase = memoize(() => {
    const app = initializeApp(firebaseConfig)
    const analytics = getAnalytics(app)
    const auth = getAuth(app)
    return { app, analytics, auth }
})
