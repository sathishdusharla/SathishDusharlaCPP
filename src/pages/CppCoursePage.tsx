import React from 'react';
import { TopicsList } from '../components/TopicsList';
import { TopicContent } from '../components/TopicContent';

export function CppCoursePage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">C++ Course</h1>
      <div className="flex flex-col md:flex-row gap-8 mt-8">
        <div className="md:w-1/4">
          <TopicsList />
        </div>
        <div className="md:w-3/4">
          <TopicContent />
        </div>
      </div>
    </div>
  );
}
