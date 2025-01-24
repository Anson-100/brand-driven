import { Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

const Onboarding = () => {
  return (
    <SafeAreaView className="flex items-center justify-center h-full bg-gray-300">
      <Text className="font-bold text-xl">Onboarding</Text>
    </SafeAreaView>
  )
}

export default Onboarding
