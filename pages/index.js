import React from 'react';
import Layout from '../Layout';
import PremierMarketplace from '../components/common/PremierMarketplace';
import Offers from '../components/Offers';
import CalendarSlider from '../components/common/CalendarSlider';
import Banner from '../components/Banner';

export default function Home() {
  return (
    <Layout isHome mainClass="flex justify-center">
      <div className="" style={{ maxWidth: 1088 }}>
        <div className="lg:hidden">
          <PremierMarketplace />
        </div>
        <Banner />
        <CalendarSlider wrapperClass="mt-9" />
        <Offers />
      </div>
    </Layout>
  );
}
