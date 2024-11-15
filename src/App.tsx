import React from "react";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import GlobalStyles from './styles/globalStyles';
import { PlacesProvider } from "./context/placesContext";
import { ThemeProvider } from './context/themeContext';
import ToggleView from "./components/toogleView";
import Header from "./components/header";

const App: React.FC = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <PlacesProvider>
        <GlobalStyles/>
        <Header/>
        <ToggleView/>
      </PlacesProvider>
      </ThemeProvider>
      
    </QueryClientProvider>
  );
};

export default App;
