import { createContext, useEffect, useContext, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const FirebaseContext = createContext(undefined);

export function Firebase({ children }) {
  const [app, setApp] = useState();

  useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyCSTtLohIIawdNQau6XHAeS0bwI41clPiU",
      authDomain: "asdfghj-d382f.firebaseapp.com",
      projectId: "asdfghj-d382f",
      storageBucket: "asdfghj-d382f.appspot.com",
      messagingSenderId: "235101980290",
      appId: "1:235101980290:web:f270137121100a78b1569b",
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

export function useCurrentUser() {
  const [user, setUser] = useState(undefined);

  const app = useFirebase();
  const auth = getAuth(app);

  useEffect(() => {
    setUser(auth.currentUser);

    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return user;
}
