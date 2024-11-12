import React from "react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import GlobalStyles from './styles/globalStyles';
import { PlacesProvider } from "./context/placesContext";
import ToggleView from "./components/toogleView";

const App: React.FC = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <PlacesProvider>
        <GlobalStyles/>
        <ToggleView/>
      </PlacesProvider>
    </QueryClientProvider>
  );
};

export default App;
