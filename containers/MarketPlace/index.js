import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Layout from '../../layout';
import BidCardsList from '../../components/common/BidCardsList';
import CalendarSlider from '../../components/common/CalendarSlider';
import CategoryTabs from '../../components/common/CategoryTabs';
import Select from './Select';
import SwitchSelect from '../../components/common/SwitchSelect';

export default function MarketPlace() {
  const router = useRouter();
  const { query } = router;
  const { category, isAuth } = query;

  const [bidCards, setBidCards] = useState([]);
  const [activeSort, setActiveSort] = useState({});
  const [activeShowType, setActiveShowType] = useState({});
  const [activeFilters, setActiveFilters] = useState({});

  useEffect(() => {
    setActiveSort(sortByItems[0]);
    setActiveShowType(showTypeItems[0]);
    setActiveFilters(filterItems[0]);
  }, []);

  useEffect(() => {
    if (isAuth) {
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

  const sortByItems = [
    { key: 0, title: 'Sort By', value: '' },
    { key: 1, title: 'Recently Added', value: 'recentlyAdded' },
    { key: 2, title: 'Most Liked', value: 'mostLiked' },
    { key: 3, title: 'Cheapest', value: 'cheapest' },
    { key: 4, title: 'Highest Price', value: 'highestPrice' },
  ];

  const showTypeItems = [
    { key: 1, title: 'Show All', value: 'showAll' },
    { key: 2, title: 'Auction', value: 'auction' },
    { key: 3, title: 'Fixed Price', value: 'fixedPrice' },
  ];

  const filterItems = [
    { key: 1, title: 'Unsold', value: 'unsold' },
    { key: 2, title: 'Sold', value: 'sold' },
    { key: 3, title: 'Packages', value: 'packages' },
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
  ];

  return (
    <Layout>
      <div className="relative">
        <CategoryTabs />
        {category && isAuth && (
          <div className="mt-12 w-full">
            <CalendarSlider dates={sliderDates} title="9-21 Centery" />
          </div>
        )}
        <div className="market-place-grid mt-8">
          <div className="hidden lg:flex flex-col space-y-8">
            <SwitchSelect
              title="Sort By"
              items={sortByItems}
              activeFilter={activeSort}
              onSetActiveFilter={(i) => setActiveSort(i)}
            />
            <SwitchSelect
              items={showTypeItems}
              activeFilter={activeShowType}
              onSetActiveFilter={(i) => setActiveShowType(i)}
            />
            <div className="bg-darkGray py-5 pl-6.5 rounded-20 w-full">
              <div className="flex flex-col space-y-5">
                {filterItems.map((i) => (
                  <div
                    key={i.key}
                    className="flex items-center space-x-2 cursor-pointer"
                    onClick={() => setActiveFilters(i)}
                  >
                    <div
                      className={`w-4 h-4 rounded flex justify-center items-center
                              border border-solid ${
                                i.key === activeFilters.key
                                  ? 'bg-primary border-primary'
                                  : 'border-lightBlue'
                              }`}
                    >
                      {i.key === activeFilters.key && (
                        <div className="pb-1 bg-transparent">
                          <Image src="/icons/tick.svg" width={8} height={6} />
                        </div>
                      )}
                    </div>
                    <div className="text-white text-opacity-40">{i.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:hidden flex space-x-4">
            <Select
              options={sortByItems}
              selected={activeSort}
              onSelect={(option) => setActiveSort(option)}
              isSwitch
            />
            <Select
              options={filterItems}
              selected={activeFilters}
              onSelect={(option) => setActiveFilters(option)}
            />
          </div>
          <BidCardsList
            bidCards={bidCards}
            wrapperClass="lg:col-start-2 lg:col-span-3"
            contentClass="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4
                          2xl:gap-8"
          />
        </div>
      </div>
    </Layout>
  );
}
