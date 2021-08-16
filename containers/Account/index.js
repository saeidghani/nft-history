import React, { useEffect, useState } from 'react';
import Layout from '../../Layout';
import BidCardsList from '../../components/common/BidCardsList';
import SwitchSelect from '../../components/common/SwitchSelect';
import ProfileSummary from '../../components/common/ProfileSummary';

const bidCards = [
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

const filterItems = [
  { key: 1, title: 'Owned', value: 'owned' },
  { key: 2, title: 'Favorite', value: 'favorite' },
  { key: 3, title: 'On Sale', value: 'onSale' },
];

function Account() {
  const [activeFilter, setActiveFilter] = useState({});

  useEffect(() => {
    setActiveFilter(filterItems[0]);
  }, []);

  return (
    <Layout>
      <div className="grid grid-cols-4 gap-0 lg:gap-8">
        <ProfileSummary
          filterItems={filterItems}
          activeFilter={activeFilter}
          onSetActiveFilter={(filter) => setActiveFilter(filter)}
          wrapperClass="col-span-4 lg:col-span-3 bg-darkGray rounded-20
                        px-5 lg:px-8 pb-6.5 lg:pb-0 pt-6.5"
        />
        <SwitchSelect
          items={filterItems}
          wrapperClass="hidden lg:block col-start-4"
          activeFilter={activeFilter}
          onSetActiveFilter={(i) => setActiveFilter(i)}
        />
      </div>
      <BidCardsList
        bidCards={bidCards}
        wrapperClass="mt-7 lg:mt-8"
        contentClass="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4
                      3xl:grid-cols-5 gap-4 2xl:gap-8"
      />
    </Layout>
  );
}

export default Account;
