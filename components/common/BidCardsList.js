import React, { useState, useEffect } from 'react';
import BidCard from './BidCard';

function BidCardsList({ bidCards, wrapperClass, contentClass }) {
  const [likes, setLikes] = useState({});
  const [stars, setStars] = useState({});

  /* useEffect(() => {
    const newLikes = {};
    const newStars = {};
    bidCards.forEach((c) => {
      newLikes[c.key] = c.likes;
      newStars[c.key] = c.stars;
    });
    setLikes(newLikes);
    setStars(newStars);
  }, []);*/

  return (
    <div className={wrapperClass}>
      <div className={contentClass}>
        {bidCards.map((i) => (
          <div key={i.key}>
            <BidCard
              {...i.details}
              id={i.key}
              onLikeClick={() => console.log(i.key)}
              onStarClick={() => console.log(i.key)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BidCardsList;
