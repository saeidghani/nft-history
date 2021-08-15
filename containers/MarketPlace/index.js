import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../Layout';
import BidCardsList from '../../components/common/BidCardsList';
import CalendarSlider from '../../components/common/CalendarSlider';
import Select from './Select';
import SwitchSelect from '../../components/common/SwitchSelect';
import CheckboxSelect from '../../components/common/CheckboxSelect';

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

const bidCards = [
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

export default function MarketPlace() {
  const router = useRouter();
  const { query } = router;
  const { displayCalendar } = query;

  const [activeSort, setActiveSort] = useState({});
  const [activeShowType, setActiveShowType] = useState({});
  const [activeFilters, setActiveFilters] = useState({});

  useEffect(() => {
    setActiveSort(sortByItems[0]);
    setActiveShowType(showTypeItems[0]);
    setActiveFilters(filterItems[0]);
  }, []);

  return (
    <Layout>
      <div className="relative">
        <CalendarSlider />
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
            <CheckboxSelect
              items={filterItems}
              activeFilter={activeFilters}
              onSetActiveFilter={(i) => setActiveFilters(i)}
            />
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
            contentClass="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4
                          gap-4 2xl:gap-8"
          />
        </div>
      </div>
    </Layout>
  );
}
