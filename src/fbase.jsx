import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

  const firebaseConfig = {
  apiKey: "AIzaSyB60KmmNGmybj75InbpnVzndzcmBMfX9u0",
  authDomain: "contact-diary-f0d24.firebaseapp.com",
  databaseURL: "https://contact-diary-f0d24-default-rtdb.firebaseio.com",
  projectId: "contact-diary-f0d24",
  storageBucket: "contact-diary-f0d24.appspot.com",
  messagingSenderId: "407453728949",
  appId: "1:407453728949:web:587ad196da8959bc48fefc"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);



/*
    import { initializeApp } from "firebase/app";
    import { getDatabase } from "firebase/database";

    function StartFirebase(){

      const firebaseConfig = {
      apiKey: "AIzaSyB60KmmNGmybj75InbpnVzndzcmBMfX9u0",
      authDomain: "contact-diary-f0d24.firebaseapp.com",
      databaseURL: "https://contact-diary-f0d24-default-rtdb.firebaseio.com",
      projectId: "contact-diary-f0d24",
      storageBucket: "contact-diary-f0d24.appspot.com",
      messagingSenderId: "407453728949",
      appId: "1:407453728949:web:587ad196da8959bc48fefc"
    };

    const app = initializeApp(firebaseConfig);
    return getDatabase(app);

    }

    export default StartFirebase;

*/
