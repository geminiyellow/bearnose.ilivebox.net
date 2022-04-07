import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, TextInput } from "react-native-paper";

const auth = getAuth()

const Email = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [secure, setSecure] = useState(true)
  const onLoginPressed = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <View>
      <TextInput
        mode="outlined"
        autoComplete={false}
        dense label="Email"
        value={email}
        onChangeText={v => setEmail(v)}
      />
      <TextInput
        mode="outlined"
        secureTextEntry={secure}
        autoComplete={false}
        dense
        label="Password"
        value={password}
        right={
          <TextInput.Icon
            name={secure ? 'eye-off': 'eye'}
            onPress={() => setSecure(!secure)}
          />
        }
        onChangeText={v => setPassword(v)}
      />
      <Button icon="login" mode="contained" style={styles.login} onPress={onLoginPressed}>Login</Button>
    </View>
  )
}

export default Email

const styles = StyleSheet.create({
  login: {
    marginTop: 6
  }
})
