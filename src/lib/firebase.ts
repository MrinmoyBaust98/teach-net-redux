import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB1-2dQs60Rxvh9DhkEipUmeh5DMQEEG40',
  authDomain: 'tech-net-c358f.firebaseapp.com',
  projectId: 'tech-net-c358f',
  storageBucket: 'tech-net-c358f.appspot.com',
  messagingSenderId: '47997675826',
  appId: '1:47997675826:web:9d9949fae9e71ee39c0f2b',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
