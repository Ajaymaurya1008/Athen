import { StatusBar, Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
      <StatusBar barStyle={"dark-content"} />
      <View className="flex-1 items-center justify-center ">
        <Text style={styles.font} className="text-[40px] ">
          Hello World!
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  font: {
    fontFamily: "Inter-800",
  },
});
