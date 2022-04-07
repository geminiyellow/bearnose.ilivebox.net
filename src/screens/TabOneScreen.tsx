import { StyleSheet } from 'react-native';
import { Button } from "react-native-paper";
import { Email, Github } from "../components/Auth";
import { Text, View } from '../components/Themed';
import { useAuthentication } from "../hooks/useAuthentication";
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({navigation}: RootTabScreenProps<'TabOne'>) {
  const {user, signOut} = useAuthentication()
  console.log(user)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      {user ? null : <Email/>}
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>
      {user ? null : <Github/>}
      {user ? <Text>Success</Text> : null}
      {user ? <Button onPress={signOut}>Sign Out</Button> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
