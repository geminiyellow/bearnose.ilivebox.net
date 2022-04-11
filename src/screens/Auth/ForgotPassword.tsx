import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { FindAccount, ResetEmail } from "components/Auth/ForgotPassword";
import { View } from 'components/Themed';
import { fetchSignInMethodsForEmail, getAuth, sendPasswordResetEmail } from "firebase/auth";
import { CommonParamList } from "navigation/RootTab";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

type ForgotPasswordRouterProp = RouteProp<CommonParamList, 'ForgotPassword'>
type ForgotPasswordNavigationProp = StackNavigationProp<CommonParamList, 'ForgotPassword'>
type ForgotPasswordProps = {
  navigation: ForgotPasswordNavigationProp,
  route: ForgotPasswordRouterProp,
}

const auth = getAuth()

const ForgotPassword = ({navigation}: ForgotPasswordProps) => {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [reset, setReset] = useState(false)

  const onCheckEmailClicked = async () => {
    try {
      setLoading(true)
      const methods = await fetchSignInMethodsForEmail(auth, email)
      console.log('[FORGOT]:', methods)
      if (methods.length) {
        try {
          setReset(true)
          await sendPasswordResetEmail(auth, email)
        } catch (e) {
          console.log('[FORGOT]:', e)
        } finally {
          setReset(false)
        }
        setSent(true)
      }
    } catch (e) {
      console.log('[FORGOT]:', e)
    } finally {
      setLoading(false)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      {
        sent
          ? <ResetEmail/>
          : <FindAccount
            disabled={loading}
            value={email}
            onChange={setEmail}
          />
      }
      <Button
        icon="email"
        mode="contained"
        disabled={loading}
        loading={loading}
        style={styles.submit}
        onPress={onCheckEmailClicked}
      >
        {sent ? 'Done' : 'Next'}
      </Button>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
      <Button onPress={() => navigation.navigate('Login')}>
        Login
      </Button>
    </SafeAreaView>
  )
}

export default ForgotPassword

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  submit: {
    marginTop: 6
  }
});
