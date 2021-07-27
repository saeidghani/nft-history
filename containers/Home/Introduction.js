import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import BidCard from '../../components/common/BidCard';
import routes from '../../constants/routes';

export default function Introduction() {
  const router = useRouter();

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
      <div className="home-line">
        <Image src="/images/lineVertical.svg" width={2} height={985} />
        <div className="absolute top-48 w-5 h-5 rounded-full bg-white" style={{ left: -8.5 }} />
        <div className="absolute top-160 w-5 h-5 rounded-full bg-white" style={{ left: -8.5 }} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center mt-11 lg:mt-14">
        <p
          className="order-2 lg:order-1 text-white font-light w-full
                     max-w-62 lg:max-w-66 mt-4.5 lg:mt-20"
          style={{ letterSpacing: 1.3 }}
        >
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Apollo 11 was the spaceflight that first landed humans on the moon. Neil Armstrong and
          Buzz Aldrin formed the American crew that landed the Apollo Lunar Module Eagle on July 20,
          1969, at 20:17 UTC. Armstrong became the first person to step onto the lunar surface,
          Aldrin joined him 19 minutes later.
        </p>
        <BidCard wrapperClass="lg:order-2 w-full max-w-62" {...firstBidCard} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center mt-9.5 lg:mt-25">
        <p
          className="order-2 lg:order-1 text-white font-light w-full
                     max-w-62 lg:max-w-66 mt-4.5 lg:mt-20"
          style={{ letterSpacing: 1.3 }}
        >
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Game 6 of the 1998 NBA Finals. Michael Jordan's game-winner to put the Bulls up 87–86 with
          5.2 seconds left is remembered as one of the greatest plays in NBA history. The Bulls
          winning their sixth NBA championship in eight years.
        </p>
        <BidCard wrapperClass="lg:order-2 w-full max-w-62" {...secondBidCard} />
      </div>
    </div>
  );
}
