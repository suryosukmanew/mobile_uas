import { Stack } from "expo-router";
import { Provider } from "react-redux";
import store from "../store"; // Pastikan path store sudah benar

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="register" options={{ headerShown: false }} />
        <Stack.Screen name="dashboard" options={{ headerShown: false }} />
      </Stack>
    </Provider>
  );
}
