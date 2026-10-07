/// <reference types="vite/client" />
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Environment credentials or fallback mock config
const env = (import.meta as any).env || {};

const firebaseConfig = {
  apiKey: env.VITE_FIREBASE_API_KEY || "AIzaSyDummyKeyForVascNeuroPrepLocal",
  authDomain: env.VITE_FIREBASE_AUTH_DOMAIN || "vascneuro-prep.firebaseapp.com",
  projectId: env.VITE_FIREBASE_PROJECT_ID || "vascneuro-prep",
  storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET || "vascneuro-prep.appspot.com",
  messagingSenderId: env.VITE_FIREBASE_MESSAGING_SENDER_ID || "123456789",
  appId: env.VITE_FIREBASE_APP_ID || "1:123456789:web:abcdef123456"
};

// Check if credentials are properly configured
export const isCloudConfigured = !!env.VITE_FIREBASE_API_KEY;

// Initialize Firebase singleton
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
