
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import Support from "./pages/Support";
import TrainerAdda from "./pages/TrainerAdda";
import TrainingLabs from "./pages/TrainingLabs";
import CloudDesktops from "./pages/CloudDesktops";
import VPS from "./pages/VPS";
import Guides from "./pages/Guides";
import NotFound from "./pages/NotFound";
import BlogView from "./pages/BlogView";
import PlaybookView from "./pages/PlaybookView";
import CaseStudyView from "./pages/CaseStudyView";
import ZeroToLive from "./pages/blogs/ZeroToLive";
import CostSavings from "./pages/blogs/CostSavings";

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
          <Route path="/trainer-adda" element={<TrainerAdda />} />
          <Route path="/training-labs" element={<TrainingLabs />} />
          <Route path="/cloud-desktops" element={<CloudDesktops />} />
          <Route path="/vps" element={<VPS />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/blog/:slug" element={<BlogView />} />
          <Route path="/playbook/:slug" element={<PlaybookView />} />
          <Route path="/case-study/:slug" element={<CaseStudyView />} />
          <Route path="/blogs/zero-to-live" element={<ZeroToLive />} />
          <Route path="/blogs/cost-savings" element={<CostSavings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
