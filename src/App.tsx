import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import myTheme from "./mytheme";
import { Home } from "./pages/home";
import { Home2 } from "./pages/home2";

function App() {
  const queryClient = new QueryClient();
  return (
    <ChakraProvider theme={myTheme} cssVarsRoot={"aaaaaaa"}>
      <QueryClientProvider client={queryClient}>
        <Home2 />
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;