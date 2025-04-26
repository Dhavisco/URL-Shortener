// src/App.tsx

import Header from "./components/Header";
import Hero from "./components/Hero";
import UrlForm from "./components/UrlForm";
// import { UrlList } from "./components/UrlList";
import Features from "./components/Features";
import Footer from "./components/Footer";
import { AnimatePresence } from "framer-motion";
import GetStarted from "./components/GetStarted";

const App = () => {
  return (
    <AnimatePresence mode="wait">
      {/* The overall page background is bg-gray-50, Hero is white */}
      <div className="min-h-screen bg-gray-50 text-gray-900">
        <Header />
        <Hero /> {/* Hero has white background */}
        {/* Main content area with gray background */}
        <main className="px-4 bg-gray-200 sm:px-6 lg:px-8 pt-24 md:pt-32 space-y-16">
          <UrlForm /> {/* This will be pulled up due to its negative margin */}
          {/* <UrlList /> */}
          <Features />
        </main>
        <GetStarted />
        <Footer />
      </div>
    </AnimatePresence>
  );
};

export default App;
