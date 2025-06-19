
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import Support from "./pages/Support";
import NotFound from "./pages/NotFound";
import TrainingLabs from "./pages/TrainingLabs";
import CloudDesktops from "./pages/CloudDesktops";
import VPS from "./pages/VPS";
import TrainerAdda from "./pages/TrainerAdda";
import Guides from "./pages/Guides";
import Insights from "./pages/Insights";
import SuccessStories from "./pages/SuccessStories";
import PlaybookView from "./pages/PlaybookView";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/support" element={<Support />} />
          <Route path="/training-labs" element={<TrainingLabs />} />
          <Route path="/cloud-desktops" element={<CloudDesktops />} />
          <Route path="/vps" element={<VPS />} />
          <Route path="/trainer-adda" element={<TrainerAdda />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:id" element={<Insights />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/success-stories/:id" element={<SuccessStories />} />
          <Route path="/playbook/:id" element={<PlaybookView />} />
          <Route path="/downloads" element={<Guides />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
