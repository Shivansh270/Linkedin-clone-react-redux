// import { initializeApp } from 'firebase/app';
// import { getFirestore, serverTimestamp} from 'firebase/firestore/lite';

// const firebaseConfig = {
//   apiKey: "AIzaSyArotaO0Z8fmte5c88IIes8jpz712TPR38",
//   authDomain: "linkedin-clone-fef70.firebaseapp.com",
//   projectId: "linkedin-clone-fef70",
//   storageBucket: "linkedin-clone-fef70.appspot.com",
//   messagingSenderId: "489295927630",
//   appId: "1:489295927630:web:a06f3ea6c9bf53f34ba61f"
// };

// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app)
// export default app

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyArotaO0Z8fmte5c88IIes8jpz712TPR38",
  authDomain: "linkedin-clone-fef70.firebaseapp.com",
  projectId: "linkedin-clone-fef70",
  storageBucket: "linkedin-clone-fef70.appspot.com",
  messagingSenderId: "489295927630",
  appId: "1:489295927630:web:a06f3ea6c9bf53f34ba61f"
};

const app = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore(app);
export default app