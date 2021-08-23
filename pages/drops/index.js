import React from 'react';
import Layout from '../../Layout';
import PremierMarketplace from '../../components/common/PremierMarketplace';
import BidCardsList from '../../components/common/BidCardsList';
import { bidCards } from '../../constants/dropsData';

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
        contentClass="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4
                      3xl:grid-cols-5 gap-4 2xl:gap-8"
      />
    </Layout>
  );
}

export default Drops;
