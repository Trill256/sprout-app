import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { PLANT_TYPES } from "./plantTypes";

const firebaseConfig = {
  apiKey:            process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain:        process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId:         process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket:     process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId:             process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const createPlant = async (name, type) => {
  const { min, max, emoji } = PLANT_TYPES[type]; // importa PLANT_TYPES aquí abajo
  await setDoc(doc(db, "plants", name), {
    name,
    type,
    emoji,
    humidity: null,
    happyRange: { min, max },
    createdAt: new Date().toISOString(),
  });
};