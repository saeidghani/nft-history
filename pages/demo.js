import React, { useState } from 'react';
import Image from 'next/image';
import BidCard from '../../components/common/BidCard';
import CalendarSlider from '../../components/common/CalendarSlider';
import Layout from '../../layout';

export default function Home() {
  const [activeSort, setActiveSort] = useState(1);
  const [activeCheckbox, setActiveCheckbox] = useState(1);

  const sortByItems = [
    { key: 1, title: 'Recently Added' },
    { key: 2, title: 'Most Liked' },
    { key: 3, title: 'Cheapest' },
    { key: 4, title: 'Highest Price' },
  ];
  const checkBoxItems = [
    { key: 1, title: 'Unsold' },
    { key: 2, title: 'Sold' },
    { key: 3, title: 'Packages' },
  ];

  return (
    <Layout>
      <div className="flex flex-col min-h-screen px-10">
        <div className="text-20 text-white">The Premier Marketplace for Dates</div>
        <div
          className="flex items-center justify-between bg-white bg-opacity-10
                   border border-solid border-fadeLightBlue1 rounded-18 px-5.5 py-4 mt-4.5"
        >
          <div className="flex space-x-8.5 text-secondary text-opacity-80">
            <div className="">Sport</div>
            <div className="">Art</div>
            <div className="">History</div>
            <div className="">Personal</div>
          </div>
          <Image src="/icons/calendar.svg" width={25} height={22} />
        </div>
        <div className="mt-12 w-full" style={{ maxWidth: 1088 }}>
          <CalendarSlider />
        </div>
        <BidCard wrapperClass="mt-8" />
        <div className="bg-darkGray py-5 pl-6.5 rounded-20 mt-10" style={{ maxWidth: 248 }}>
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
        <div className="bg-darkGray py-5 pl-6.5 rounded-20 mt-10" style={{ maxWidth: 248 }}>
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
    </Layout>
  );
}
