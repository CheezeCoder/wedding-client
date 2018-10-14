import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAXYQLurP48f5FtvVCVvEUPuhFqLbAZSVA',
  authDomain: 'chris-and-my-s-wedding.firebaseapp.com',
  databaseURL: 'https://chris-and-my-s-wedding.firebaseio.com',
  projectId: 'chris-and-my-s-wedding'
};

let app;

if (!firebase.apps.length) {
  app = firebase.initializeApp(config);
}

// export const app = appp;
export const auth = firebase.auth(app);
export const database = firebase.firestore(app);
