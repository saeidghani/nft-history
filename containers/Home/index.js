import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../layout';
import Introduction from './Introduction';
import BidCardsList from '../../components/common/BidCardsList';
import CalendarSlider from '../../components/common/CalendarSlider';
import CategoryTabs from '../../components/common/CategoryTabs';
import PremierMarketplace from '../../components/common/PremierMarketplace';

export default function Home() {
  const router = useRouter();
  const { query } = router;
  const { category, isAuth } = query;
  const [bidCards, setBidCards] = useState([]);

  useEffect(() => {
    if (isAuth === 'true') {
      setBidCards(authBidCards);
    } else {
      setBidCards(guestBidCards);
    }
  }, [isAuth]);

  const sliderDates = [
    { key: 9, title1: 9 },
    { key: 10, title1: 10 },
    { key: 11, title1: 11 },
    { key: 12, title1: 12 },
    { key: 13, title1: 13 },
    { key: 14, title1: 14, displayPointer: true },
    { key: 15, title1: 15 },
    { key: 16, title1: 16 },
    { key: 17, title1: 17 },
    { key: 18, title1: 18 },
    { key: 19, title1: 19 },
    { key: 20, title1: 20 },
    { key: 21, title1: 21 },
  ];

  const guestBidCards = [
    {
      key: 1,
      details: {
        status: 'Fixed Price',
        date: 'Art Dates',
        price: '299.49 HSY',
        stars: 22,
        comments: 22,
        likes: 20,
        fixedPriceDate: { date1: '1/1/2020', date2: '01/01/2020', date3: '01/01/2020' },
      },
    },
    {
      key: 2,
      details: {
        status: 'On Auction',
        date: '20 July 1969',
        price: '299.49 HSY',
        stars: 22,
        comments: 22,
        likes: 20,
        timer: {
          hour: 6,
          minute: 35,
          second: 12,
          status: 'Till End',
        },
      },
    },
    {
      key: 3,
      details: {
        status: 'On Auction',
        date: '20 July 1969',
        price: '299.49 HSY',
        stars: 22,
        comments: 22,
        likes: 20,
        timer: {
          hour: 6,
          minute: 35,
          second: 12,
          status: 'Till End',
        },
      },
    },
    {
      key: 4,
      details: {
        status: 'On Auction',
        date: '20 July 1969',
        price: '299.49 HSY',
        stars: 22,
        comments: 22,
        likes: 20,
        timer: {
          hour: 6,
          minute: 35,
          second: 12,
          status: 'Till End',
        },
      },
    },
    {
      key: 5,
      details: {
        status: 'On Auction',
        date: '20 July 1969',
        price: '299.49 HSY',
        stars: 22,
        comments: 22,
        likes: 20,
        timer: {
          hour: 6,
          minute: 35,
          second: 12,
          status: 'Till End',
        },
      },
    },
    {
      key: 6,
      details: {
        status: 'On Auction',
        date: '20 July 1969',
        price: '299.49 HSY',
        stars: 22,
        comments: 22,
        likes: 20,
        timer: {
          hour: 6,
          minute: 35,
          second: 12,
          status: 'Till End',
        },
      },
    },
    {
      key: 7,
      details: {
        status: 'On Auction',
        date: '20 July 1969',
        price: '299.49 HSY',
        stars: 22,
        comments: 22,
        likes: 20,
        timer: {
          hour: 6,
          minute: 35,
          second: 12,
          status: 'Till End',
        },
      },
    },
    {
      key: 8,
      details: {
        status: 'On Auction',
        date: '20 July 1969',
        price: '299.49 HSY',
        stars: 22,
        comments: 22,
        likes: 20,
        timer: {
          hour: 6,
          minute: 35,
          second: 12,
          status: 'Till End',
        },
      },
    },
  ];

  const authBidCards = [
    {
      key: 1,
      details: {
        status: 'Fixed Price',
        date: 'Art Dates',
        price: '299.49 HSY',
        stars: 22,
        comments: 22,
        likes: 20,
        fixedPriceDate: { date1: '1/1/2020', date2: '01/01/2020', date3: '01/01/2020' },
      },
    },
    {
      key: 2,
      details: {
        status: 'Place a bid',
        date: '20 July 1969',
        price: '299.49 HSY',
        stars: 22,
        comments: 22,
        likes: 20,
        calendar: {
          month: 'FEB',
          day: 23,
        },
        timer: {
          hour: 6,
          minute: 35,
          second: 12,
          status: 'Till End',
        },
      },
    },
    {
      key: 3,
      details: {
        status: 'Place a bid',
        date: '20 July 1969',
        price: '299.49 HSY',
        stars: 22,
        comments: 22,
        likes: 20,
        calendar: {
          month: 'FEB',
          day: 23,
        },
        timer: {
          hour: 6,
          minute: 35,
          second: 12,
          status: 'Till End',
        },
      },
    },
    {
      key: 4,
      details: {
        status: 'On Auction',
        date: '20 July 1969',
        price: '299.49 HSY',
        stars: 22,
        comments: 22,
        likes: 20,
        timer: {
          hour: 6,
          minute: 35,
          second: 12,
          status: 'Till End',
        },
      },
    },
    {
      key: 5,
      details: {
        status: 'On Auction',
        date: '20 July 1969',
        price: '299.49 HSY',
        stars: 22,
        comments: 22,
        likes: 20,
        timer: {
          hour: 6,
          minute: 35,
          second: 12,
          status: 'Till End',
        },
      },
    },
    {
      key: 6,
      details: {
        status: 'On Auction',
        date: '20 July 1969',
        price: '299.49 HSY',
        stars: 22,
        comments: 22,
        likes: 20,
        timer: {
          hour: 6,
          minute: 35,
          second: 12,
          status: 'Till End',
        },
      },
    },
    {
      key: 7,
      details: {
        status: 'Place a bid',
        date: '20 July 1969',
        price: '299.49 HSY',
        stars: 22,
        comments: 22,
        likes: 20,
        calendar: {
          month: 'FEB',
          day: 23,
        },
        timer: {
          hour: 6,
          minute: 35,
          second: 12,
          status: 'Till End',
        },
      },
    },
    {
      key: 8,
      details: {
        status: 'On Auction',
        date: '20 July 1969',
        price: '299.49 HSY',
        stars: 22,
        comments: 22,
        likes: 20,
        timer: {
          hour: 6,
          minute: 35,
          second: 12,
          status: 'Till End',
        },
      },
    },
  ];

  return (
    <Layout>
      <div className="relative">
        <div className="lg:hidden">
          <PremierMarketplace />
        </div>
        <CategoryTabs />
        {category && isAuth === 'true' && (
          <div className="mt-12 w-full">
            <CalendarSlider dates={sliderDates} title="9-21 Centery" />
          </div>
        )}
        {category || isAuth === 'true' ? (
          <BidCardsList
            bidCards={bidCards}
            wrapperClass="mt-7 lg:mt-8"
            contentClass="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4
                          2xl:gap-8"
          />
        ) : (
          <Introduction />
        )}
      </div>
    </Layout>
  );
}
