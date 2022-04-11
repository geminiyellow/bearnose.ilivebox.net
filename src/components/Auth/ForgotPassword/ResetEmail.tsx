import { View } from "components/Themed";
import { Text } from "react-native-paper";

const ResetEmail = () => {
  return (
    <View>
      <Text style={{fontWeight: "300"}}>
        An email has been sent to your account's email address.
        Please check your email to continue.
        If you are still having problems, please visit the <Text style={{fontWeight: '500'}}>Help Center</Text>
      </Text>
    </View>
  )
}

export default ResetEmail
