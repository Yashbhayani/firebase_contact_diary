import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

  const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_authDomain",
    projectId: "YOUR_projectId",
    databaseURL: "YOUR_databaseURL",
    storageBucket: "YOUR_storageBucket",
    messagingSenderId: "YOUR_messagingSenderId",
    appId: "YOUR_appId"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
