import React, { useState, useEffect } from 'react';
import Layout from '../../Layout';
import BidCardsList from '../../components/common/BidCardsList';
import CalendarSlider from '../../components/common/CalendarSlider';
import MarketPlaceSelect from '../../components/MarketPlaceSelect';
import SwitchSelect from '../../components/common/SwitchSelect';
import CheckboxSelect from '../../components/common/CheckboxSelect';
import { useWindowSize } from '../../utils';
import { sortByItems, bidCards, filterItems, showTypeItems } from '../../constants/marketPlaceData';

export default function MarketPlace() {
  const [activeSort, setActiveSort] = useState({});
  const [activeShowType, setActiveShowType] = useState({});
  const [activeFilters, setActiveFilters] = useState({});
  const { width } = useWindowSize();

  useEffect(() => {
    const defaultSort = width < 1024 ? sortByItems[0] : sortByItems[1];
    const defaultShowType = width < 1024 ? showTypeItems[0] : showTypeItems[1];
    setActiveSort(defaultSort);
    setActiveShowType(defaultShowType);
    setActiveFilters(filterItems[0]);
  }, [width]);

  return (
    <Layout>
      <div className="relative">
        <CalendarSlider />
        <div className="market-place-grid mt-8">
          <div className="hidden lg:flex flex-col space-y-8">
            <SwitchSelect
              title="Sort By"
              items={sortByItems.slice(1)}
              activeFilter={activeSort}
              onSetActiveFilter={(i) => setActiveSort(i)}
            />
            <SwitchSelect
              items={showTypeItems.slice(1)}
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
            <MarketPlaceSelect
              options={sortByItems}
              selected={activeSort}
              onSelect={(option) => setActiveSort(option)}
              isSwitch
            />
            <MarketPlaceSelect
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
