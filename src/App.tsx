
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import { HelmetProvider } from "react-helmet-async";

const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Contact = lazy(() => import("./pages/Contact"));
const Support = lazy(() => import("./pages/Support"));
const TrainerAdda = lazy(() => import("./pages/TrainerAdda"));
const VirtualTrainingLabs = lazy(() => import("./pages/VirtualTrainingLabs"));
const NotFound = lazy(() => import("./pages/NotFound"));
const BlogView = lazy(() => import("./pages/BlogView"));
const CaseStudyView = lazy(() => import("./pages/CaseStudyView"));
const PlaybookView = lazy(() => import("./pages/PlaybookView"));
const Guides = lazy(() => import("./pages/Guides"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/support" element={<Support />} />
              <Route path="/trainer-adda" element={<TrainerAdda />} />
              <Route path="/virtual-training-labs" element={<VirtualTrainingLabs />} />
              <Route path="/guides" element={<Guides />} />
              <Route path="/blog/:slug" element={<BlogView />} />
              <Route path="/case-study/:slug" element={<CaseStudyView />} />
              <Route path="/playbook/:slug" element={<PlaybookView />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
