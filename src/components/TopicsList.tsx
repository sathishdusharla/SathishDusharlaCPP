import React from 'react';
import { CheckCircle2, Circle } from 'lucide-react';
import { useContent } from '../context/ContentContext';

export function TopicsList() {
  const { topics, currentTopic, setCurrentTopic, isTopicComplete } = useContent();

  return (
    <div className="w-full max-w-xs bg-card rounded-lg shadow-lg p-4">
      <h3 className="text-lg font-semibold mb-4">Topics</h3>
      <div className="space-y-2">
        {topics.map((topic) => (
          <button
            key={topic.id}
            onClick={() => setCurrentTopic(topic.id)}
            className={`w-full flex items-center justify-between p-2 rounded-md transition-colors
              ${currentTopic === topic.id ? 'bg-primary text-primary-foreground' : 'hover:bg-accent'}`}
          >
            <span className="text-sm">{topic.title}</span>
            {isTopicComplete(topic.id) ? (
              <CheckCircle2 className="h-4 w-4 text-green-500" />
            ) : (
              <Circle className="h-4 w-4" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}