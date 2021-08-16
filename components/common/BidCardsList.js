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
              onLikeClick={() => {
                if (!likedCards.includes(i.key)) {
                  setLikedCards([...likedCards, i.key]);
                  setLikes({ ...likes, [i.key]: likes[i.key] + 1 });
                } else {
                  const newLikedCards = likedCards.filter((c) => c !== i.key);
                  setLikedCards(newLikedCards);
                  setLikes({ ...likes, [i.key]: likes[i.key] - 1 });
                }
              }}
              onStarClick={() => {
                if (!starCards.includes(i.key)) {
                  setStarCards([...starCards, i.key]);
                  setStars({ ...stars, [i.key]: stars[i.key] + 1 });
                } else {
                  const newStarCards = starCards.filter((c) => c !== i.key);
                  setStarCards(newStarCards);
                  setStars({ ...stars, [i.key]: stars[i.key] - 1 });
                }
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BidCardsList;
