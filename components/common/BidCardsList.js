import React, { useState, useEffect } from 'react';
import BidCard from './BidCard';

function BidCardsList({ bidCards, wrapperClass, contentClass }) {
  const [likes, setLikes] = useState({});
  const [stars, setStars] = useState({});
  const [likedCards, setLikedCards] = useState([]);
  const [starCards, setStarCards] = useState([]);

  useEffect(() => {
    const newLikes = {};
    const likedCards = [];
    const newStars = {};
    const starCards = [];
    bidCards.forEach((c) => {
      newLikes[c.key] = c.details.likes;
      newStars[c.key] = c.details.stars;
      likedCards.push(c.key);
    });
    setLikes(newLikes);
    setStars(newStars);
    setLikedCards(likedCards);
    setStarCards(starCards);
  }, []);

  const handleLikeClick = (item) => {
    if (!likedCards.includes(item.key)) {
      setLikedCards([...likedCards, item.key]);
      setLikes({ ...likes, [item.key]: likes[item.key] + 1 });
    } else {
      const newLikedCards = likedCards.filter((c) => c !== item.key);
      setLikedCards(newLikedCards);
      setLikes({ ...likes, [item.key]: likes[item.key] - 1 });
    }
  };

  const handleStarClick = (item) => {
    if (!starCards.includes(item.key)) {
      setStarCards([...starCards, item.key]);
      setStars({ ...stars, [item.key]: stars[item.key] + 1 });
    } else {
      const newStarCards = starCards.filter((c) => c !== item.key);
      setStarCards(newStarCards);
      setStars({ ...stars, [item.key]: stars[item.key] - 1 });
    }
  };

  return (
    <div className={wrapperClass}>
      <div className={contentClass}>
        {bidCards.map((i) => (
          <div key={i.key}>
            <BidCard
              {...i.details}
              id={i.key}
              currentLikes={likes[i.key]}
              likeIsFilled={likedCards.includes(i.key)}
              starIsFilled={starCards.includes(i.key)}
              currentStars={stars[i.key]}
              onLikeClick={() => handleLikeClick(i)}
              onStarClick={() => handleStarClick(i)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BidCardsList;
