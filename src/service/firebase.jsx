import { createContext, useEffect, useContext, useState } from "react";
import { initializeApp } from "firebase/app";

const FirebaseContext = createContext(undefined);

export function Firebase({ children }) {
  const [app, setApp] = useState();

  useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyCxZbP4tmPCtqR4HFx0h0zPjvIo-cexLSE",
      authDomain: "savoirfaire-d6e1b.firebaseapp.com",
      projectId: "savoirfaire-d6e1b",
      storageBucket: "savoirfaire-d6e1b.appspot.com",
      messagingSenderId: "205215299537",
      appId: "1:205215299537:web:40d72648fbbabfb41ad2f0",
      measurementId: "G-M8KX3NLCT6",
    };

    const app = initializeApp(firebaseConfig);
    setApp(app);
  }, []);

  return (
    <FirebaseContext.Provider value={app}>
      {app && children}
    </FirebaseContext.Provider>
  );
}

export function useFirebase() {
  return useContext(FirebaseContext);
}
