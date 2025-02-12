import React from 'react';

const NoContests: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-2xl font-bold">No Contests Available</h1>
      <p className="text-lg">There are no contests available right now.</p>
    </div>
  );
};

export default NoContests;