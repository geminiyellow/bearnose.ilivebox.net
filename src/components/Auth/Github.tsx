import { getAuth, GithubAuthProvider, signInWithRedirect } from 'firebase/auth'
import { Button } from 'react-native-paper'

const auth = getAuth()
const provider = new GithubAuthProvider()

const Github = () => {
  const signIn = async () => {
    try {
      await signInWithRedirect(auth, provider)
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <Button onPress={signIn}>
      Login with Github
    </Button>
  )
}

export default Github
