import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Layout from '../../layout';
import BidCardsList from './BidCardsList';
import CalendarSlider from '../../components/common/CalendarSlider';
import CategoryTabs from '../../components/common/CategoryTabs';
import Select from './Select';

export default function MarketPlace() {
  const router = useRouter();
  const { query } = router;
  const { category, isAuth } = query;

  const [activeSort, setActiveSort] = useState({});
  const [activeCheckbox, setActiveCheckbox] = useState({});

  useEffect(() => {
    setActiveSort(sortByItems[0]);
    setActiveCheckbox(checkBoxItems[0]);
  }, []);

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

  const checkBoxItems = [
    { key: 1, title: 'Unsold', value: 'unsold' },
    { key: 2, title: 'Sold', value: 'sold' },
    { key: 3, title: 'Packages', value: 'packages' },
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
          <div className="hidden lg:flex flex-col">
            <div className="bg-darkGray py-5 pl-6.5 rounded-20 w-full">
              <div className="text-white mb-4.5">Sort By</div>
              <div className="flex flex-col space-y-5">
                {sortByItems.map((i) => (
                  <div
                    key={i.key}
                    className="flex items-center space-x-2 cursor-pointer"
                    onClick={() => setActiveSort(i.key)}
                  >
                    <div
                      className={`w-4 h-4 rounded-full flex justify-center items-center
                              border border-solid ${
                                i.key === activeSort ? 'border-primary' : 'border-lightBlue'
                              }`}
                    >
                      <div
                        className={`w-2 h-2 rounded-full ${
                          i.key === activeSort ? 'bg-primary' : 'bg-transparent'
                        }`}
                      />
                    </div>
                    <div className="text-white text-opacity-40">{i.title}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-darkGray py-5 pl-6.5 rounded-20 w-full mt-10">
              <div className="flex flex-col space-y-5">
                {checkBoxItems.map((i) => (
                  <div
                    key={i.key}
                    className="flex items-center space-x-2 cursor-pointer"
                    onClick={() => setActiveCheckbox(i.key)}
                  >
                    <div
                      className={`w-4 h-4 rounded flex justify-center items-center
                              border border-solid ${
                                i.key === activeCheckbox
                                  ? 'bg-primary border-primary'
                                  : 'border-lightBlue'
                              }`}
                    >
                      {i.key === activeCheckbox && (
                        <div className={`pb-1 ${i.key === activeCheckbox ? '' : 'bg-transparent'}`}>
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
              options={checkBoxItems}
              selected={activeCheckbox}
              onSelect={(option) => setActiveCheckbox(option)}
            />
          </div>
          <BidCardsList wrapperClass="lg:col-start-2 lg:col-span-3" />
        </div>
      </div>
    </Layout>
  );
}
