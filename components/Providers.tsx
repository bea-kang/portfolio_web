"use client";

import Navigation from "./Navigation";
import Footer from "./Footer";
import { useLanguageStore } from "@/lib/store";

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  const { language, setLanguage } = useLanguageStore();

  return (
    <>
      <Navigation currentLang={language} onLanguageChange={setLanguage} />
      <main id="main-content" className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
