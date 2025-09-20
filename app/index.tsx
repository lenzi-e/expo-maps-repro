import { AppleMaps, GoogleMaps } from "expo-maps";
import { useEffect } from "react";
import { Platform, Text } from "react-native";

export default function App() {
  useEffect(() => {
    const message = "alerts/logs work";
    console.log(message);
    alert(message);
  }, []);

  const handleMapClick = (e: any) => {
    const message = "onMapClick is working. :) Or not working.";
    console.log(message, e);
    alert(message);
  };

  if (Platform.OS === "ios") {
    return <AppleMaps.View style={{ flex: 1 }} onMapClick={handleMapClick} />;
  } else if (Platform.OS === "android") {
    return <GoogleMaps.View style={{ flex: 1 }} onMapClick={handleMapClick} />;
  } else {
    return <Text>Maps are only available on Android and iOS</Text>;
  }
}
