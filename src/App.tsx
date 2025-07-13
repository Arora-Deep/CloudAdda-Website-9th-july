
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import Support from "./pages/Support";
import TrainerAdda from "./pages/TrainerAdda";
import TrainingLabs from "./pages/TrainingLabs";
import CloudDesktops from "./pages/CloudDesktops";
import VPS from "./pages/VPS";
import NotFound from "./pages/NotFound";
import BlogView from "./pages/BlogView";
import CaseStudyView from "./pages/CaseStudyView";
import PlaybookView from "./pages/PlaybookView";
import Guides from "./pages/Guides";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/support" element={<Support />} />
            <Route path="/trainer-adda" element={<TrainerAdda />} />
            <Route path="/training-labs" element={<TrainingLabs />} />
            <Route path="/cloud-desktops" element={<CloudDesktops />} />
            <Route path="/vps" element={<VPS />} />
            <Route path="/guides" element={<Guides />} />
            <Route path="/blog/:slug" element={<BlogView />} />
            <Route path="/case-study/:slug" element={<CaseStudyView />} />
            <Route path="/playbook/:slug" element={<PlaybookView />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
