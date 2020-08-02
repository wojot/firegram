import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBP0q3yfWWabWZTmGHp097cTOG64kyg95c",
  authDomain: "firegram-44b21.firebaseapp.com",
  databaseURL: "https://firegram-44b21.firebaseio.com",
  projectId: "firegram-44b21",
  storageBucket: "firegram-44b21.appspot.com",
  messagingSenderId: "609735647642",
  appId: "1:609735647642:web:218cae380b1a0adc78da23",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
