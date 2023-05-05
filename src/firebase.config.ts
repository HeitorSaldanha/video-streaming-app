import firebase from 'firebase-admin';

export const initializeFirebase = () => {
  const serviceAccount = JSON.parse(process.env.FIREBASE);
  firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
  });
};
