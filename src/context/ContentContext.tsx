import React, { createContext, useContext, useState } from 'react';
import type { Topic } from '../types';
import { cppContent } from '../data/content';

interface ContentContextType {
  topics: Topic[];
  currentTopic: string;
  setCurrentTopic: (id: string) => void;
  markTopicComplete: (id: string) => void;
  isTopicComplete: (id: string) => boolean;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export function ContentProvider({ children }: { children: React.ReactNode }) {
  const [topics] = useState<Topic[]>(cppContent);
  const [currentTopic, setCurrentTopic] = useState<string>(topics[0].id);
  const [completedTopics, setCompletedTopics] = useState<Record<string, boolean>>({});

  const markTopicComplete = (id: string) => {
    setCompletedTopics(prev => ({ ...prev, [id]: true }));
  };

  const isTopicComplete = (id: string) => !!completedTopics[id];

  return (
    <ContentContext.Provider 
      value={{ 
        topics, 
        currentTopic, 
        setCurrentTopic, 
        markTopicComplete,
        isTopicComplete
      }}
    >
      {children}
    </ContentContext.Provider>
  );
}

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) throw new Error('useContent must be used within ContentProvider');
  return context;
};