import React from "react";
import { useColorScheme, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Clock from "./components/Clock";

function App(): React.JSX.Element {
  return (
      <View>
        <Clock />
      </View>

  );
}

export default App;
