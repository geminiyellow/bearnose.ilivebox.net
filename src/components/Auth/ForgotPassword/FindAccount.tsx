import { View } from "react-native";
import { Text, TextInput } from "react-native-paper";

const FindAccount = ({disabled, value, onChange}: any) => {
  return (
    <View>
      <View>
        <Text>Find Your Account</Text>
        <Text>Enter your email or phone number linked to account</Text>
      </View>
      <View>
        <TextInput
          label="Account"
          value={value}
          onChangeText={(v) => onChange?.(v)}
          dense
          mode="outlined"
          disabled={disabled}
          autoFocus
          autoComplete="username"
          textContentType="username"
          returnKeyType="done"
          keyboardType="email-address"
          autoCapitalize="none"
          placeholder="user@example.com"
        />
      </View>
    </View>
  )
}

export default FindAccount
