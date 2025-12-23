import { AppleMaps, GoogleMaps } from "expo-maps";
import { Platform, Text } from "react-native";

const INITIAL_CAMERA_POSITION = {
  coordinates: {
    latitude: 34.13424333659685,
    longitude: -118.32086116215959,
  },
  zoom: 15,
};

const MARKERS = [
  {
    coordinates: {
      latitude: 34.13424333659685,
      longitude: -118.32086116215959,
    },
    title: "Marker 1",
  },
  {
    coordinates: {
      latitude: 34.133914756462914,
      longitude: -118.32156926536385,
    },
    title: "Marker 2",
  },
  {
    coordinates: {
      latitude: 34.13420781448179,
      longitude: -118.32212716485812,
    },
    title: "Marker 3",
  },
  {
    coordinates: {
      latitude: 34.13482944933973,
      longitude: -118.32142979049027,
    },
    title: "Marker 4",
  },
];

export default function App() {
  const handleMapClick = (e: any) => {
    const message = "onMapClick triggered";
    console.log(message, e);
  };

  const handleMarkerClick = (e: any) => {
    const message = "onMarkerClick triggered";
    console.log(message, e);
  };

  if (Platform.OS === "ios") {
    return (
      <AppleMaps.View
        style={{ flex: 1 }}
        onMapClick={handleMapClick}
        onMarkerClick={handleMarkerClick}
        markers={MARKERS}
        cameraPosition={INITIAL_CAMERA_POSITION}
      />
    );
  } else if (Platform.OS === "android") {
    return (
      <GoogleMaps.View
        style={{ flex: 1 }}
        onMapClick={handleMapClick}
        onMarkerClick={handleMarkerClick}
        markers={MARKERS}
        cameraPosition={INITIAL_CAMERA_POSITION}
      />
    );
  } else {
    return <Text>Maps are only available on Android and iOS</Text>;
  }
}
