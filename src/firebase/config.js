import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration

var firebaseConfig = {
  apiKey: 'AIzaSyDZpufFfrSETLPUTDpa50y7HmxsH2OmL9g',
  authDomain: 'mine-photogram.firebaseapp.com',
  databaseURL: 'https://mine-photogram.firebaseio.com',
  projectId: 'mine-photogram',
  storageBucket: 'mine-photogram.appspot.com',
  messagingSenderId: '54189304909',
  appId: '1:54189304909:web:fa41908eb5bc6cecef4004',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
