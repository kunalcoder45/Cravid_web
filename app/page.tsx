// "use client";

// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import { Header } from "@/components/layout/header";
// import { Footer } from "@/components/layout/footer";
// import { HeroSection } from "@/components/sections/hero-section";
// import { FeaturesSection } from "@/components/sections/features-section";
// import { AboutSection } from "@/components/sections/about-section";
// import { DownloadSection } from "@/components/sections/download-section";
// import Index from "../app/src/pages/Index"; // Download page

// const queryClient = new QueryClient();

// function MainContent() {
//   return (
//     <main className="min-h-screen">
//       <Header />
//       <HeroSection />
//       <FeaturesSection />
//       <DownloadSection />
//       <AboutSection />
//       <Footer />
//     </main>
//   );
// }

// export default function Home() {
//   return (
//     <QueryClientProvider client={queryClient}>
//       <TooltipProvider>
//         <Toaster />
//         <Sonner />
//         <BrowserRouter>
//           <Routes>
//             <Route path="/" element={<MainContent />} />
//             <Route
//               path="/downloadapp"
//               element={
//                 <>
//                   <Index />
//                 </>
//               }
//             />
//           </Routes>
//         </BrowserRouter>
//       </TooltipProvider>
//     </QueryClientProvider>
//   );
// }
"use client";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Link from "next/link"; // For Next.js routing

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { AboutSection } from "@/components/sections/about-section";
import { DownloadSection } from "@/components/sections/download-section";
import Index from "../app/src/pages/Index"; // Download page

const queryClient = new QueryClient();

function MainContent() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <DownloadSection />
      <AboutSection />
      <Footer />
    </main>
  );
}

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <MainContent />
        <Link href="/downloadapp">
          <a>Go to Download Page</a>
        </Link>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
