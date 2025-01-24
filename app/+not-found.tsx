import { Link, Stack } from "expo-router"
import { StyleSheet, View, Text } from "react-native"

export default function NotFoundScreen() {
  return (
    <>
      <View className="bg-gray-200 h-full flex items-center justify-center">
        <Text className="text-xl font-bold">This screen doesn't exist.</Text>
        <Link href="/" style={styles.link}>
          <Text>Go to home screen!</Text>
        </Link>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
})
