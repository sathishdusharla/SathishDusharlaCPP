import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { ContentProvider } from "./context/ContentContext";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { TopicContent } from "./components/TopicContent";
import { TopicsList } from "./components/TopicsList";
import Compiler from "./components/Compiler";
import Contact from "./components/Contact";
import Intro from "./components/Intro.tsx";
import NoContests from "./components/NoContests";
import { Menu, X } from "lucide-react";
import { CoursesPage } from "./components/CoursesPage"; // Import the CoursesPage
import { CppCoursePage } from "./pages/CppCoursePage"; // Import the CppCoursePage

function App() {
  const [isTopicsListVisible, setIsTopicsListVisible] = useState(false);

  return (
    <ThemeProvider>
      <ContentProvider>
        <Router>
          <div className="min-h-screen bg-background text-foreground">
            <Header />
            <main className="container mx-auto px-4 py-8">
              <Routes>
                <Route path="/compiler" element={<Compiler />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/courses" element={<CoursesPage />} /> {/* Add the new CoursesPage route */}
                <Route path="/courses/cpp" element={<CppCoursePage />} /> {/* Add the new CppCoursePage route */}
                <Route
                  path="/home"
                  element={
                    <div className="flex flex-col items-center justify-center space-y-4">
                      {/* Mobile Toggle Button */}
                      <div className="w-full flex justify-start md:hidden mb-4">
                        <button onClick={() => setIsTopicsListVisible(!isTopicsListVisible)}>
                          {isTopicsListVisible ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                      </div>

                      {/* Topics List Dropdown */}
                      {isTopicsListVisible && (
                        <div className="w-full md:hidden bg-card shadow-lg rounded-lg p-4 transition-all">
                          <TopicsList />
                        </div>
                      )}

                      {/* Desktop Layout */}
                      <div className="w-full flex flex-col md:flex-row gap-8 mt-8">
                        <div className="hidden md:block">
                          <TopicsList />
                        </div>
                        <TopicContent />
                      </div>
                    </div>
                  }
                />
                <Route path="/contests" element={<NoContests />} />
                <Route path="/" element={<Intro />} />
                <Route path="*" element={<Intro />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </ContentProvider>
    </ThemeProvider>
  );
}

export default App;
