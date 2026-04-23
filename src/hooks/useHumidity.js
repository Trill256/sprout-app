import { useEffect, useState } from "react";
import { db } from "../firebase";
import { doc, onSnapshot } from "firebase/firestore";

export const useHumidity = (plantName) => {
  const [data, setData] = useState({ humidity: null, happyRange: null, type: null });

  useEffect(() => {
    if (!plantName) return;

    const ref = doc(db, "plants", plantName);
    const unsub = onSnapshot(ref, (snap) => {
      if (snap.exists()) {
        const { humidity, happyRange, type } = snap.data();
        setData({ humidity, happyRange, type });
      }
    });

    return () => unsub();
  }, [plantName]);

  return data;
};