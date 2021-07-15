import React from 'react';
import Image from 'next/image';
import BidCard from '../../components/common/BidCard';

export default function Introduction() {
  const firstBidCard = {
    status: 'On Auction',
    date: '20 July 1969',
    price: '299.49 HSY',
    stars: 22,
    comments: 22,
    likes: 20,
  };

  const secondBidCard = {
    status: 'Sold',
    date: '20 July 1969',
    price: '299.49 HSY',
    stars: 22,
    comments: 22,
    likes: 20,
  };

  return (
    <div>
      <div className="absolute top-40" style={{ left: '50%' }}>
        <Image src="/images/lineVertical.svg" width={2} height={985} />
        <div className="absolute top-48 w-5 h-5 rounded-full bg-white" style={{ left: -8.5 }} />
        <div className="absolute top-160 w-5 h-5 rounded-full bg-white" style={{ left: -8.5 }} />
      </div>
      <div className="grid grid-cols-2 justify-items-center mt-14">
        <p
          className="text-white font-light w-full mt-20"
          style={{ maxWidth: 265, letterSpacing: 1.3 }}
        >
          Apollo 11 was the spaceflight that first landed humans on the moon. Neil Armstrong and
          Buzz Aldrin formed the American crew that landed the Apollo Lunar Module Eagle on July 20,
          1969, at 20:17 UTC. Armstrong became the first person to step onto the lunar surface,
          Aldrin joined him 19 minutes later.
        </p>
        <BidCard {...firstBidCard} />
      </div>
      <div className="grid grid-cols-2 justify-items-center mt-25">
        <p
          className="text-white font-light w-full mt-20"
          style={{ maxWidth: 265, letterSpacing: 1.3 }}
        >
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Game 6 of the 1998 NBA Finals. Michael Jordan's game-winner to put the Bulls up 87–86 with
          5.2 seconds left is remembered as one of the greatest plays in NBA history. The Bulls
          winning their sixth NBA championship in eight years.
        </p>
        <BidCard {...secondBidCard} />
      </div>
    </div>
  );
}
