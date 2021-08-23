import React, { useEffect, useState } from 'react';
import Layout from '../../Layout';
import BidCardsList from '../../components/common/BidCardsList';
import SwitchSelect from '../../components/common/SwitchSelect';
import ProfileSummary from '../../components/common/ProfileSummary';
import { bidCards, filterItems } from '../../constants/accountData';

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
