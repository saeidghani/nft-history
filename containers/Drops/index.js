import React from 'react';
import Layout from '../../Layout';
import PremierMarketplace from '../../components/common/PremierMarketplace';
import BidCardsList from '../../components/common/BidCardsList';

const bidCards = [
  {
    key: 2,
    details: {
      status: 'Place a bid',
      date: '23 Feb, 2021',
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
      date: '23 Feb, 2021',
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
        status: 'Till Start',
      },
    },
  },
  {
    key: 4,
    details: {
      status: 'Place a bid',
      date: '23 Feb, 2021',
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
        status: 'Till Start',
      },
    },
  },
  {
    key: 5,
    details: {
      status: 'Place a bid',
      date: '23 Feb, 2021',
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
        status: 'Till Start',
      },
    },
  },
  {
    key: 7,
    details: {
      status: 'Place a bid',
      date: '23 Feb, 2021',
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
        status: 'Till Start',
      },
    },
  },
  {
    key: 6,
    details: {
      status: 'Place a bid',
      date: '23 Feb, 2021',
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
        status: 'Till Start',
      },
    },
  },
  {
    key: 7,
    details: {
      status: 'Place a bid',
      date: '23 Feb, 2021',
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
        status: 'Till Start',
      },
    },
  },
  {
    key: 8,
    details: {
      status: 'Place a bid',
      date: '23 Feb, 2021',
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
        status: 'Till Start',
      },
    },
  },
];

function Drops() {
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
