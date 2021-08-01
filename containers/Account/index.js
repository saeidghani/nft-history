import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../Layout';
import BidCardsList from '../../components/common/BidCardsList';
import SwitchSelect from '../../components/common/SwitchSelect';
import routes from '../../constants/routes';

const bidCards = [
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

function Account() {
  const router = useRouter();
  const { pathname, query } = router;
  const { hasProfilePic, myProfile, follows, id } = query;
  const [activeFilter, setActiveFilter] = useState({});

  useEffect(() => {
    setActiveFilter(filterItems[0]);
  }, []);

  const filterItems = [
    { key: 1, title: 'Owned', value: 'owned' },
    { key: 2, title: 'Favorite', value: 'favorite' },
    { key: 3, title: 'On Sale', value: 'onSale' },
  ];

  return (
    <Layout>
      <div className="grid grid-cols-4 gap-0 lg:gap-8">
        <div
          className="col-span-4 lg:col-span-3 bg-darkGray rounded-20
                        px-5 lg:px-8 pb-6.5 lg:pb-0 pt-6.5"
        >
          <div className="flex justify-between ">
            <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-3">
              {hasProfilePic ? (
                <div className="w-23 h-23 flex justify-center items-center rounded-full">
                  <Image src="/images/avatar.png" width={112} height={112} />
                </div>
              ) : (
                <div
                  className="w-23 h-23 flex justify-center items-center rounded-full
                       bg-white bg-opacity-20"
                >
                  <Image src="/icons/user.svg" width={54} height={54} />
                </div>
              )}
              <div className="flex flex-col mt-2">
                <div className="text-white text-18 font-medium">Emilie Butler</div>
                <div className="text-white text-14 font-light mt-2">The future is coming.</div>
                <div className="flex mt-1">
                  <div className="text-white text-14 font-light mr-2">0x4A34639...5a81</div>
                  <Image src="/icons/walletAddress.svg" width={18} height={18} />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end">
              {myProfile && (
                <div className="order-2 lg:order-1 flex mt-10 lg:mt-0">
                  <Link href={routes.account.edit}>
                    <div className={`cursor-pointer ${hasProfilePic ? '' : 'mr-4'}`}>
                      <Image src="/icons/edit.svg" width={30} height={30} />
                    </div>
                  </Link>
                  {!hasProfilePic && (
                    <Link href={routes.account.followers}>
                      <div className="cursor-pointer">
                        <Image src="/icons/dots.svg" width={30} height={30} />
                      </div>
                    </Link>
                  )}
                </div>
              )}
              {hasProfilePic && (
                <div className="order-1 lg:order-2 flex space-x-4 mt-3">
                  <Link href={routes.account.followers}>
                    <div className="flex flex-col items-center cursor-pointer">
                      <div className="text-white text-14 font-light">Following</div>
                      <div className="text-white text-18">2,233</div>
                    </div>
                  </Link>
                  <Link href={routes.account.followers}>
                    <div className="flex flex-col items-center cursor-pointer">
                      <div className="text-white text-14 font-light">Followers</div>
                      <div className="text-white text-18">2,233</div>
                    </div>
                  </Link>
                </div>
              )}
              {!myProfile && (
                <button
                  className={`order-1 rounded-12 font-light mt-8 lg:mt-0 mb-0 lg:mb-3 rounded-12
                              text-white border border-solid w-33 h-9.5 ${
                                follows === 'true'
                                  ? 'bg-primary border-transparent'
                                  : 'border-white'
                              }`}
                  onClick={() =>
                    router.push({ pathname, query: { ...query, follows: follows !== 'true' } })
                  }
                >
                  {follows === 'true' ? 'Unfollow' : 'Follow'}
                </button>
              )}
            </div>
          </div>
          <div
            className="flex lg:hidden justify-between rounded-18 bg-darkGray2
                       border border-solid border-fadeLightBlue1 py-1.5 px-6 mt-7"
          >
            {filterItems.map((i) => (
              <div
                key={i.key}
                className={`rounded-10 p-2 ${
                  i.key === activeFilter.key
                    ? 'text-white bg-primary'
                    : 'text-white text-opacity-40'
                }`}
                onClick={() => setActiveFilter(i)}
              >
                {i.title}
              </div>
            ))}
          </div>
        </div>
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
        contentClass="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4
                          2xl:gap-8"
      />
    </Layout>
  );
}

export default Account;
