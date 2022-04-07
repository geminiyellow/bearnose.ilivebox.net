import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { Auth } from "firebase/auth";

export const register = async (auth: Auth, email: string, password: string, displayName: string) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password)
    if (!auth.currentUser) return console.log('register failure:', auth)
    await sendEmailVerification(auth.currentUser)
    await updateProfile(auth.currentUser, { displayName})
  }catch (e){
    console.log('register failure:', e)
  }
}
