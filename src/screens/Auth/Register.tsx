import { SignUp } from "components/Auth";
import { View } from 'components/Themed';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Button } from "react-native-paper";

export interface RegisterFormValuesStep1 {
  email: string
}

export default function Register({navigation}: any) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <SignUp/>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
        <Button onPress={() => navigation.navigate('Login')}>Login</Button>
      </View>
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
});
