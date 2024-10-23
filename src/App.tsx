import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import AppRoutes from "./routes";
import customTheme from "./theme/theme";

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <AppRoutes />
    </ChakraProvider>
  );
}

export default App;
