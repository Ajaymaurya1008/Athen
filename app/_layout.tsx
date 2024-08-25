import { Stack } from "expo-router";
import { useFonts } from "expo-font";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Inter-100": require("@/assets/fonts/Inter-100.ttf"),
    "Inter-200": require("@/assets/fonts/Inter-200.ttf"),
    "Inter-300": require("@/assets/fonts/Inter-300.ttf"),
    "Inter-400": require("@/assets/fonts/Inter-400.ttf"),
    "Inter-500": require("@/assets/fonts/Inter-500.ttf"),
    "Inter-600": require("@/assets/fonts/Inter-600.ttf"),
    "Inter-700": require("@/assets/fonts/Inter-700.ttf"),
    "Inter-800": require("@/assets/fonts/Inter-800.ttf"),
    "Poppins-bold": require("@/assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack screenOptions={{ headerShown: false }} initialRouteName="index">
      <Stack.Screen name="index" />
      <Stack.Screen name="(onBoarding)/OnBoardingScreen1" />
      <Stack.Screen name="(onBoarding)/OnBoardingScreen2" />
      <Stack.Screen name="(onBoarding)/OnBoardingScreen3" />
    </Stack>
  );
}
