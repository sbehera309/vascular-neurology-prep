import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signInWithPopup, 
  signOut as firebaseSignOut,
  updateProfile,
  onAuthStateChanged,
  User as FirebaseUser
} from 'firebase/auth';
import { doc, setDoc, onSnapshot } from 'firebase/firestore';
import { auth, db, googleProvider, isCloudConfigured } from './firebase';
import { UserStats } from '../types';

// Save user stats to Firestore cloud database
export const syncStatsToCloud = async (userId: string, stats: UserStats): Promise<boolean> => {
  if (!isCloudConfigured || !userId) return false;
  try {
    const userRef = doc(db, 'users', userId);
    await setDoc(userRef, {
      ...stats,
      updatedAt: new Date().toISOString()
    }, { merge: true });
    return true;
  } catch (error) {
    console.warn('Cloud sync error (falling back to localStorage):', error);
    return false;
  }
};

// Subscribe to real-time cloud stats updates
export const subscribeToCloudStats = (userId: string, onUpdate: (stats: UserStats) => void) => {
  if (!isCloudConfigured || !userId) return () => {};
  
  const userRef = doc(db, 'users', userId);
  return onSnapshot(userRef, (docSnap) => {
    if (docSnap.exists()) {
      const data = docSnap.data() as UserStats;
      onUpdate(data);
    }
  }, (err) => {
    console.warn('Cloud snapshot error:', err);
  });
};

// Register Email & Password
export const registerWithEmail = async (
  email: string, 
  pass: string, 
  name: string
) => {
  if (!isCloudConfigured) {
    throw new Error('Firebase credentials not set in environment. Working in local storage mode.');
  }
  const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
  if (userCredential.user) {
    await updateProfile(userCredential.user, { displayName: name });
  }
  return userCredential.user;
};

// Sign In with Email & Password
export const loginWithEmail = async (email: string, pass: string) => {
  if (!isCloudConfigured) {
    throw new Error('Firebase credentials not set in environment. Working in local storage mode.');
  }
  const userCredential = await signInWithEmailAndPassword(auth, email, pass);
  return userCredential.user;
};

// Sign In with Google Popup
export const loginWithGoogle = async () => {
  if (!isCloudConfigured) {
    throw new Error('Firebase credentials not set in environment. Working in local storage mode.');
  }
  const userCredential = await signInWithPopup(auth, googleProvider);
  return userCredential.user;
};

// Sign Out
export const logoutCloudUser = async () => {
  if (isCloudConfigured) {
    await firebaseSignOut(auth);
  }
};

// Listen to Auth State Changes
export const onAuthChange = (callback: (user: FirebaseUser | null) => void) => {
  if (!isCloudConfigured) return () => {};
  return onAuthStateChanged(auth, callback);
};
