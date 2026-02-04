import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { Courses } from "./components/pages/Courses";
import { Admissions } from "./components/pages/Admissions";
import { Gallery } from "./components/pages/Gallery";
import { Contact } from "./components/pages/Contact";

type Page = "home" | "about" | "courses" | "admissions" | "gallery" | "contact";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home onNavigate={handleNavigate} />;
      case "about":
        return <About />;
      case "courses":
        return <Courses onNavigate={handleNavigate} />;
      case "admissions":
        return <Admissions />;
      case "gallery":
        return <Gallery />;
      case "contact":
        return <Contact />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}
