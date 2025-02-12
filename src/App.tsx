import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { ContentProvider } from './context/ContentContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { TopicContent } from './components/TopicContent';
import { TopicsList } from './components/TopicsList';
import Compiler from './components/Compiler';
import Contact from './components/Contact';
import Intro from './components/Intro.tsx';
import NoContests from './components/NoContests';

function App() {
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
                <Route path="/home" element={
                  <div className="flex flex-col items-center justify-center space-y-4">
                    <div className="w-full flex flex-col md:flex-row gap-8 mt-8">
                      <TopicsList />
                      <TopicContent />
                    </div>
                  </div>
                } />
                <Route path="/contests" element={<NoContests />} />
                <Route path="/" element={<Intro />} />
                <Route path="*" element={<Intro />} /> {/* Redirect to Intro for any unknown route */}
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