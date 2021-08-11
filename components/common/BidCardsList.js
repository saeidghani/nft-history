import React from 'react';
import BidCard from './BidCard';
import routes from '../../constants/routes';
import { useRouter } from 'next/router';

function BidCardsList({ bidCards, wrapperClass, contentClass }) {
  const router = useRouter();

  return (
    <div className={wrapperClass}>
      <div className={contentClass}>
        {bidCards.map((i) => (
          <div key={i.key}>
            <BidCard {...i.details} id={i.key} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BidCardsList;
