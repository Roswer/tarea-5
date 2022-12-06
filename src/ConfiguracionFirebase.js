import firebase from "firebase/app";
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBplsLvSA0nFpDWESfIKvPCzyo0M9JauHc",
      authDomain: "tarea-5-faad4.firebaseapp.com",
      projectId: "tarea-5-faad4",
      storageBucket: "tarea-5-faad4.appspot.com",
      messagingSenderId: "881221381664",
      appId: "1:881221381664:web:cdab70d5d61e42fab01645"
  };

firebase.initializeApp(firebaseConfig);

export const baseDeDato = firebase.firestore();
export default firebase;
