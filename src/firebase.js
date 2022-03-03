import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: 'ego-coffee-ecommerce.firebaseapp.com',
  projectId: 'ego-coffee-ecommerce',
  storageBucket: 'ego-coffee-ecommerce.appspot.com',
  messagingSenderId: '371416288546',
  appId: '1:371416288546:web:fcf4e489a7f59de358297b',
  measurementId: 'G-X93FRVDKD5',
}

const firebaseApp = initializeApp(firebaseConfig)

const auth = getAuth(firebaseApp)
const db = getFirestore(firebaseApp)

export { auth, db }
