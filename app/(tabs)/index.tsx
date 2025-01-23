import { Image, StyleSheet, Platform, View, Text } from "react-native"

export default function HomeScreen() {
  return (
    <View className="flex-1 justify-center items-center bg-blue-500">
      <Text className="text-white text-lg font-bold">Tailwind Works! 🎉</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
})
