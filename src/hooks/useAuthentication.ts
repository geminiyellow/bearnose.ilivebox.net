import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { useEffect, useState } from 'react';

const auth = getAuth();

export const useAuthentication = () => {
  const [user, setUser] = useState<User>()

  useEffect(() => onAuthStateChanged(auth, v => {
    setUser(v || undefined)
  }), [])

  const signOut = () => {
    auth.signOut().then(() => setUser(undefined))
  }
  return {user, signOut};
}
