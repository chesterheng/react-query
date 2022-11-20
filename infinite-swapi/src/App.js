import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { InfiniteSpecies } from "./components/InfiniteSpecies";
import { InfinitePeople } from "./components/InfinitePeople";
import "./App.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Infinite SWAPI</h1>
        <InfiniteSpecies />
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
