import React from "react";
import AppRender from "./pages/AppRender";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <AppRender />
      </div>
    </QueryClientProvider>
  );
};

export default App;
