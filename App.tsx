import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import useCachedResources from "hooks/useCachedResources";
import Navigation from "navigation";
import { useState } from "react";
import { lightTheme, darkTheme } from "theme";

const App = () => {
  const isLoadingComplete = useCachedResources();
  const [isDark, setIsDark] = useState(false);
  const _toggleSwitch = () => setIsDark(!isDark);
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <Navigation />
        <StatusBar />
      </ThemeProvider>
    );
  }
};

export default App;
