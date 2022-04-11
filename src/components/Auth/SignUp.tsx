import { getAuth } from "firebase/auth";
import { register } from "firebase/register";
import { useMemo, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, TextInput } from "react-native-paper";

const auth = getAuth()

const SignUp = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState({value: '', confirm: ''})
  const [secure, setSecure] = useState({value: true, confirm: true})
  const disabled = useMemo(() => !password.value || password.value !== password.confirm, [password])
  const onSubmitPressed = async () => await register(auth, email, password.value, name)
  return (
    <View>
      <TextInput
        label="Name"
        value={name}
        onChangeText={v => setName(v)}
        dense
        mode="outlined"
        autoComplete="name"
        textContentType="username"
        returnKeyType="next"
        autoCapitalize="none"
      />
      <TextInput
        label="Email"
        value={email}
        onChangeText={v => setEmail(v)}
        dense
        mode="outlined"
        autoComplete="email"
        textContentType="emailAddress"
        returnKeyType="next"
        keyboardType="email-address"
        autoCapitalize="none"
        placeholder="user@example.com"
      />
      <TextInput
        label="Password"
        value={password.value}
        onChangeText={value => setPassword((v) => ({...v, value}))}
        secureTextEntry={secure.value}
        right={
          <TextInput.Icon
            name={secure.value ? 'eye-off' : 'eye'}
            onPress={() => setSecure((s) => ({...s, value: !s.value}))}
          />
        }
        dense
        mode="outlined"
        textContentType="newPassword"
        returnKeyType="next"
        autoCapitalize="none"
      />
      <TextInput
        label="Confirm"
        value={password.confirm}
        onChangeText={confirm => setPassword((v) => ({...v, confirm}))}
        secureTextEntry={secure.confirm}
        right={
          <TextInput.Icon
            name={secure.confirm ? 'eye-off' : 'eye'}
            onPress={() => setSecure((s) => ({...s, confirm: !s.confirm}))}
          />
        }
        dense
        mode="outlined"
        returnKeyType="done"
        autoCapitalize="none"
      />
      <Button mode="contained" style={styles.submit} disabled={disabled} onPress={onSubmitPressed}>SignUp</Button>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
  submit: {
    marginTop: 6
  }
})
