import React from 'react';
import BidCard from './BidCard';

function BidCardsList({ bidCards, wrapperClass, contentClass }) {
  return (
    <div className={wrapperClass}>
      <div className={contentClass}>
        {bidCards.map((i) => (
          <BidCard key={i.key} {...i.details} />
        ))}
      </div>
    </div>
  );
}

export default BidCardsList;
