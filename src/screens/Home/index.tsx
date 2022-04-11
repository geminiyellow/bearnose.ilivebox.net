import { KeyboardAvoidingView, SafeAreaView, View } from "react-native";
import { Text } from "react-native-paper";

const Home = () => {
  return (
    <SafeAreaView>
      <KeyboardAvoidingView>
        <View>
          <Text>Home</Text>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default Home
