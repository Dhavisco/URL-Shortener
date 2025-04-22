// src/App.tsx

import Header from "./components/Header";
// import { Hero } from "./components/Hero";
// import { UrlForm } from "./components/UrlForm";
// import { UrlList } from "./components/UrlList";
// import { Features } from "./components/Features";
// import { Footer } from "./components/Footer";
import { AnimatePresence } from "framer-motion";

const App = () => {
  return (
    <AnimatePresence mode="wait">
      <div className="min-h-screen bg-gray-50 text-gray-900">
        <Header />
        {/* <main className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-16">
          <Hero />
          <UrlForm />
          <UrlList />
          <Features />
        </main> */}
        {/* <Footer /> */}
      </div>
    </AnimatePresence>
  );
};

export default App;
