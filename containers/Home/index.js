import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Layout from '../../layout';
import Introduction from './Introduction';
import BidCardsList from './BidCardsList';
import CalendarSlider from '../../components/common/CalendarSlider';
import CategoryTabs from '../../components/common/CategoryTabs';

export default function Home() {
  const router = useRouter();
  const { query } = router;
  const { category, isAuth } = query;

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
        <div className=" flex justify-center">
          <div className="relative lg:hidden">
            <div className="absolute top-5 left-5 text-19 text-white font-light z-10">
              The Premier <br /> Marketplace for <br /> Dates
            </div>
            <Image src="/images/calendarIllustrationSm.svg" width={327} height={128} />
          </div>
        </div>
        <CategoryTabs />
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
