import React from 'react';
import { FaVideo } from 'react-icons/fa';

const FollowButton = () => {
  return (
    <button className="flex items-center space-x-2 bg-transparent text-white border border-white py-1 px-3 rounded ml-4">
      <FaVideo className="text-white" />
      <span>FOLLOW CS LIVE</span>
    </button>
  );
};

export default FollowButton;
