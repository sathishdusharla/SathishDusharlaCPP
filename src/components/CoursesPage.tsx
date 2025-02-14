import React from 'react';
import { Link } from 'react-router-dom';
import { useContent } from '../context/ContentContext';

export function CoursesPage() {
  const { topics, isTopicComplete } = useContent();

  // Calculate the progress
  const completedTopics = topics.filter(topic => isTopicComplete(topic.id)).length;
  const totalTopics = topics.length;
  const progress = (completedTopics / totalTopics) * 100;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Courses</h1>
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 mb-4">
        <h2 className="text-xl font-semibold mb-2">C++</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Learn the fundamentals of C++ programming language. This course covers basic to advanced topics in C++.
        </p>
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Progress</span>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{progress.toFixed(0)}%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
            <div className="bg-primary h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
        <div className="flex justify-end">
          <Link to="/courses/cpp" className="bg-primary text-black px-4 py-2 rounded-md hover:bg-primary-dark">
            Learn
          </Link>
        </div>
      </div>
    </div>
  );
}
