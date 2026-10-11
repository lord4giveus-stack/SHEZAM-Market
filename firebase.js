import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js';
const firebaseConfig = {
  apiKey: 'AIzaSyBoJLhVSilUR0BwEhfQ1BCulZKbro6qgUw',
  authDomain: 'shezam-market.firebaseapp.com',
  projectId: 'shezam-market',
  storageBucket: 'shezam-market.firebasestorage.app',
  messagingSenderId: '187364136381',
  appId: '1:187364136381:web:7b2423f1aea8063e5b2ed4'
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
