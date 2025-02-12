import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { useContent } from '../context/ContentContext';
import type { Topic } from '../types';

export function TopicContent() {
  const { topics, currentTopic, setCurrentTopic, markTopicComplete, isTopicComplete } = useContent();
  const [showCongrats, setShowCongrats] = useState(false);

  const currentTopicData = topics.find(t => t.id === currentTopic);
  const currentIndex = topics.findIndex(t => t.id === currentTopic);

  const handleNext = () => {
    if (currentIndex < topics.length - 1) {
      markTopicComplete(currentTopic);
      setCurrentTopic(topics[currentIndex + 1].id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      markTopicComplete(currentTopic);
      setShowCongrats(true);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentTopic(topics[currentIndex - 1].id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (!currentTopicData) return null;

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-card rounded-lg shadow-lg">
      <motion.div
        key={currentTopicData.id}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-4">{currentTopicData.title}</h2>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          {currentTopicData.content.split('\n').map((paragraph, idx) => {
            if (paragraph.startsWith('## ')) {
              return <h3 key={idx} className="text-xl font-semibold mb-2">{paragraph.slice(3)}</h3>;
            } else if (paragraph.startsWith('### ')) {
              return <h4 key={idx} className="text-lg font-medium mb-2">{paragraph.slice(4)}</h4>;
            } else if (paragraph.startsWith('|')) {
              // Render table rows
              const cells = paragraph.split('|').slice(1, -1);
              return (
                <tr key={idx}>
                  {cells.map((cell, cellIdx) => (
                    <td key={cellIdx} className="border px-4 py-2">{cell.trim()}</td>
                  ))}
                </tr>
              );
            } else {
              return <p key={idx} className="mb-4">{paragraph}</p>;
            }
          })}
          {currentTopicData.code && (
            <>
              <pre className="bg-gray-100 dark:bg-secondary p-4 rounded-lg overflow-x-auto">
                <code className="text-sm text-black dark:text-white">{currentTopicData.code}</code>
              </pre>
              {currentTopicData.output && (
                <pre className="bg-gray-100 dark:bg-secondary p-4 rounded-lg overflow-x-auto">
                  <code className="text-sm text-black dark:text-white">{currentTopicData.output}</code>
                </pre>
              )}
            </>
          )}
          {currentTopicData.additionalCode && (
            <>
              <pre className="bg-gray-100 dark:bg-secondary p-4 rounded-lg overflow-x-auto">
                <code className="text-sm text-black dark:text-white">{currentTopicData.additionalCode}</code>
              </pre>
              {currentTopicData.additionalOutput && (
                <pre className="bg-gray-100 dark:bg-secondary p-4 rounded-lg overflow-x-auto">
                  <code className="text-sm text-black dark:text-white">{currentTopicData.additionalOutput}</code>
                </pre>
              )}
            </>
          )}
          {currentTopicData.additionalCode2 && (
            <>
              <pre className="bg-gray-100 dark:bg-secondary p-4 rounded-lg overflow-x-auto">
                <code className="text-sm text-black dark:text-white">{currentTopicData.additionalCode2}</code>
              </pre>
              {currentTopicData.additionalOutput2 && (
                <pre className="bg-gray-100 dark:bg-secondary p-4 rounded-lg overflow-x-auto">
                  <code className="text-sm text-black dark:text-white">{currentTopicData.additionalOutput2}</code>
                </pre>
              )}
            </>
          )}
          {currentTopicData.additionalCode3 && (
            <>
              <pre className="bg-gray-100 dark:bg-secondary p-4 rounded-lg overflow-x-auto">
                <code className="text-sm text-black dark:text-white">{currentTopicData.additionalCode3}</code>
              </pre>
              {currentTopicData.additionalOutput3 && (
                <pre className="bg-gray-100 dark:bg-secondary p-4 rounded-lg overflow-x-auto">
                  <code className="text-sm text-black dark:text-white">{currentTopicData.additionalOutput3}</code>
                </pre>
              )}
            </>
          )}
        </div>
      </motion.div>
      <div className="flex justify-between mt-8">
        <button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className="flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground disabled:opacity-50"
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </button>
        <button
          onClick={handleNext}
          className="flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground disabled:opacity-50"
        >
          {currentIndex === topics.length - 1 ? 'Finish' : 'Next'}
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
      {showCongrats && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">🎉 Congratulations! 🎉</h2>
            <p className="mb-4">You have completed all the topics.</p>
            <button
              onClick={() => setShowCongrats(false)}
              className="px-4 py-2 bg-primary hover:bg-primary-dark text-primary-foreground rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}