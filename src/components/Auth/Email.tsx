import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, TextInput } from "react-native-paper";

const auth = getAuth()

const Email = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [secure, setSecure] = useState(true)
  const onSubmitPressed = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <View>
      <TextInput
        label="Email"
        value={email}
        onChangeText={v => setEmail(v)}
        dense
        mode="outlined"
        autoComplete="username"
        textContentType="username"
        returnKeyType="next"
        keyboardType="email-address"
        autoCapitalize="none"
        placeholder="user@example.com"
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={v => setPassword(v)}
        secureTextEntry={secure}
        right={
          <TextInput.Icon
            name={secure ? 'eye-off' : 'eye'}
            onPress={() => setSecure(!secure)}
          />
        }
        dense
        mode="outlined"
        autoComplete="password"
        textContentType="password"
        returnKeyType="done"
        autoCapitalize="none"
      />
      <Button icon="login" mode="contained" style={styles.submit} onPress={onSubmitPressed}>Login</Button>
    </View>
  )
}

export default Email

const styles = StyleSheet.create({
  submit: {
    marginTop: 6
  }
})
