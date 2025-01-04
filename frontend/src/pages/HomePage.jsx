import React from 'react';
import FriendList from '../components/FriendList';
import FriendRecommendations from '../components/FriendRecommendations';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Friend Finder</h1>
      <FriendList />
      <FriendRecommendations />
    </div>
  );
};

export default HomePage;
