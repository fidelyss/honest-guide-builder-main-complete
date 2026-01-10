import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WhatIsSection from "./components/WhatIsSection"
import ProductsSection from "./components/ProductsSection"
import ProsConsSection from "./components/ProsConsSection"
import TestimonialsSection from "./components/TestimonialsSection"
import CTASection from "./components/CTASection"

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="/WhatIs" element={<WhatIsSection />} />
          <Route path="/Products" element={<ProductsSection />} />
          <Route path="/ProsCons" element={<ProsConsSection />} />
          <Route path="/Testimonials" element={<TestimonialsSection />} />
          <Route path="/Buy" element={<CTASection />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
