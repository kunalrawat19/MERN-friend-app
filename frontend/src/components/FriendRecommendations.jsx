import React, { useEffect, useState } from 'react';
import { getRecommendations } from '../utils/api';

const FriendRecommendations = () => {
  const [recommendations, setRecommendations] = useState([]);

  // useEffect(() => {
  //   const fetchRecommendations = async () => {
  //     try {
  //       const response = await getRecommendations();
  //       setRecommendations(response.data);
  //     } catch (err) {
  //       console.error('Error fetching recommendations:', err);
  //     }
  //   };

  //   fetchRecommendations();
  // }, []);

  return (
    <div>
      <h2>Friend Recommendations</h2>
      {/* {recommendations.length ? (
        <ul>
          {recommendations.map((user) => (
            <li key={user._id}>{user.username}</li>
          ))}
        </ul>
      ) : (
        <p>No recommendations available.</p>
      )} */}
    </div>
  );
};

export default FriendRecommendations;
