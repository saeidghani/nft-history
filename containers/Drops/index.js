import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../Layout';
import PremierMarketplace from '../../components/common/PremierMarketplace';
import BidCardsList from '../../components/common/BidCardsList';

function Drops() {
  const router = useRouter();
  const { query } = router;
  const { isAuth } = query;
  const [bidCards, setBidCards] = useState([]);

  useEffect(() => {
    if (isAuth === 'true') {
      setBidCards(authBidCards);
    } else {
      setBidCards(guestBidCards);
    }
  }, [isAuth]);

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
      key: 5,
      details: {
        status: 'On Auction',
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
      key: 6,
      details: {
        status: 'On Auction',
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
      key: 9,
      details: {
        status: 'On Auction',
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
  ];

  return (
    <Layout>
      <div className="lg:hidden">
        <PremierMarketplace />
      </div>
      <div className="hidden lg:block text-white text-20">Drops</div>
      <BidCardsList
        bidCards={bidCards}
        wrapperClass="mt-6 lg:mt-8"
        contentClass="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4
                          2xl:gap-8"
      />
    </Layout>
  );
}

export default Drops;
