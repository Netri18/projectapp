import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DeviceProvider } from "@/contexts/DeviceContext";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import NodeList from "./pages/NodeList";
import AddDevice from "./pages/AddDevice";
import NodeDetail from "./pages/NodeDetail";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <DeviceProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/nodes" element={<NodeList />} />
            <Route path="/add-device" element={<AddDevice />} />
            <Route path="/nodes/:id" element={<NodeDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </DeviceProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
