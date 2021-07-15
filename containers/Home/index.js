import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Layout from '../../layout';
import Introduction from './Introduction';
import BidCardsList from './BidCardsList';
import CalendarSlider from '../../components/common/CalendarSlider';

export default function Home() {
  const router = useRouter();
  const { pathname, query } = router;
  const { category, isAuth } = query;

  const categories = [
    { key: 'sport', name: 'Sport' },
    { key: 'art', name: 'Art' },
    { key: 'history', name: 'History' },
    { key: 'personal', name: 'Personal' },
  ];

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

  return (
    <Layout>
      <div className="relative">
        <div className="text-20 text-white">The Premier Marketplace for Dates</div>
        <div
          className="flex items-center justify-between bg-white bg-opacity-10
                   border border-solid border-fadeLightBlue1 rounded-18 px-5.5 py-2 mt-4.5"
        >
          <div className="flex space-x-6">
            {categories?.map((c) => (
              <Link key={c.key} href={{ pathname, query: { ...query, category: c.key } }}>
                <div
                  className={`cursor-pointer ${
                    c.key === category
                      ? 'text-primary bg-primary bg-opacity-10 rounded-10 px-2.5 py-2'
                      : 'text-secondary text-opacity-80 px-2.5 py-2'
                  }`}
                >
                  {c.name}
                </div>
              </Link>
            ))}
          </div>
          <Image src="/icons/calendar.svg" width={25} height={22} />
        </div>
        {category && isAuth && (
          <div className="mt-12 w-full">
            <CalendarSlider dates={sliderDates} title="9-21 Centery" />
          </div>
        )}
        {category || isAuth ? <BidCardsList /> : <Introduction />}
      </div>
    </Layout>
  );
}
