import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Email, Github } from "components/Auth";
import { Text, View } from 'components/Themed';
import { useAuthentication } from "hooks/useAuthentication";
import { SafeAreaView, StyleSheet } from 'react-native';
import { Button } from "react-native-paper";

export default function Login({navigation}: NativeStackScreenProps<any>) {
  const {user, signOut} = useAuthentication()
  console.log('[LOGIN]', user)
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>LOGO</Text>
      <Email/>
      <View>
        <Button onPress={() => navigation.navigate('ForgotPassword')}>Forgot Password</Button>
        <Button onPress={() => navigation.navigate('Register')}>Sign Up</Button>
      </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
      <View style={styles.others}>
        <Github/>
      </View>
      <Button onPress={signOut}>Sign Out</Button>
    </SafeAreaView>
  );
}

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
  others: {}
});
