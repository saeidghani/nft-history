import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../Layout';
import PremierMarketplace from '../../components/common/PremierMarketplace';
import routes from '../../constants/routes';

const historyItems = [
  {
    key: 1,
    src: '/images/avatar3.png',
    text: (
      <div className="text-14 text-white">
        The Bitcoin Angel#61321 <span className="text-12">sold</span> 1.02HSY
      </div>
    ),
    date: <div className="text-14 text-white text-opacity-50">2 days ago</div>,
  },
  {
    key: 2,
    src: '/images/avatar4.png',
    text: (
      <div className="text-14 text-white">
        The Bitcoin Angel#61321 <span className="text-12">sold</span> 1.02HSY
      </div>
    ),
    date: <div className="text-14 text-white text-opacity-50">21 Jan,2020</div>,
  },
  {
    key: 3,
    src: '/images/avatar5.png',
    text: (
      <div className="text-14 text-white">
        The Bitcoin Angel#61321 <span className="text-12">sold</span> 1.02HSY
      </div>
    ),
    date: <div className="text-14 text-white text-opacity-50">12 Dec, 2020</div>,
  },
  {
    key: 4,
    src: '/images/avatar6.png',
    text: (
      <div className="text-14 text-white">
        The Bitcoin Angel#61321 <span className="text-12">sold</span> 1.02HSY
      </div>
    ),
    date: <div className="text-14 text-white text-opacity-50">6 Dec, 2020</div>,
  },
];
const offersItems = [
  {
    key: 1,
    src: '/images/avatar.png',
    text: <div className="text-14 text-white">you offered 15 HSY on 14 Jan, 2000</div>,
    date: '2 days ago',
  },
  {
    key: 2,
    src: '/images/avatar.png',
    text: <div className="text-14 text-white">you offered 15 HSY on 14 Jan, 2000</div>,
    date: '21 Jan,2020',
  },
  {
    key: 3,
    src: '/images/avatar.png',
    text: <div className="text-14 text-white">you offered 15 HSY on 14 Jan, 2000</div>,
    date: '12 Dec, 2020',
  },
  {
    key: 4,
    src: '/images/avatar.png',
    text: <div className="text-14 text-white">you offered 15 HSY on 14 Jan, 2000</div>,
    date: '6 Dec, 2020',
  },
];
const claimingItems = [
  { key: 1, status: 'Claim', timer: '6h 35m 12s', timerStatus: 'Till End', date: '2 days ago' },
  { key: 2, status: 'Claimed', date: '21 Jan,2020' },
  { key: 3, status: 'Lost', date: '12 Dec, 2020' },
  { key: 4, status: 'Claimed', date: '6 Dec, 2020' },
];

function Details() {
  const Balance = () => (
    <div className="flex flex-col justify-between bg-darkGray rounded-20 p-6.5 lg:h-103.5">
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <div className="">
            <div className="text-white font-medium">Balance</div>
            <div className="text-white text-14 font-medium mt-2">164,942.56 HSY</div>
          </div>
          <div className="lg:mr-10">
            <div className="text-white font-medium">Bidding Balance</div>
            <div className="text-white text-14 font-medium mt-2">164,942.56 HSY</div>
          </div>
        </div>
        <div
          className="self-center lg:self-start flex items-center bg-primary bg-opacity-20 rounded-12 w-43
                            py-2.5 px-4.5 mt-4"
        >
          <div className="text-white text-14 font-light mr-2">0x4A34639...5a81</div>
          <Image src="/icons/walletAddress.svg" width={18} height={18} />
        </div>
      </div>
      <Link href={routes.walletBalance.index}>
        <div
          className="self-center lg:self-start text-lightBlue text-18 font-medium rounded-12 h-14
          w-44 border border-solid border-lightBlue mt-6 cursor-pointer flex justify-center items-center"
        >
          Disconnect
        </div>
      </Link>
    </div>
  );

  const History = ({ title, items }) => (
    <div className="bg-darkGray rounded-20 py-6.5 overflow-hidden h-103.5">
      <div
        className="text-center lg:text-left text-white bg-white bg-opacity-10 rounded-18
                      font-medium p-4 mx-4 lg:mx-6.5"
      >
        {title}
      </div>
      <div
        className="flex flex-col space-y-4 mt-6.5 overflow-auto ml-6.5 mr-4.5 pr-2"
        style={{ height: 300 }}
      >
        {items.map((i, index) => (
          <div
            key={i.key}
            className={`flex space-x-3.5 border-b border-solid pb-1 ${
              index === historyItems.length - 1 ? 'border-transparent' : 'border-fadeLightBlue4'
            }`}
          >
            <div>
              <Image src={i.src} width={48} height={48} />
            </div>
            <div className="">
              {i.text}
              <div className="text-14 text-white text-opacity-50 mt-1">{i.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const Claiming = ({ items }) => (
    <div className="bg-darkGray rounded-20 pt-4 px-4 lg:p-6.5 lg:h-103.5 overflow-hidden">
      <div
        className="text-center lg:text-left text-white bg-white bg-opacity-10 rounded-18
                   font-medium p-4"
      >
        Claiming
      </div>
      <div className="mt-3.5 h-92 lg:h-100 overflow-auto">
        {items.map((i, index) => (
          <div
            key={i.key}
            className={`border-b border-solid py-3 ${
              index === historyItems.length - 1 ? 'border-transparent' : 'border-fadeLightBlue4'
            }`}
          >
            <div className="flex justify-between">
              <div className="text-white text-14">
                Congratulation, you won the auction claim your nft.
              </div>
              <div className={index === 0 ? 'text-primary font-medium' : 'text-lightBlue'}>
                {i.status}
              </div>
            </div>
            <div className="flex justify-between">
              <div className="text-white text-opacity-50">{i.date}</div>
              {i.timer && (
                <div className="text-white text-14">
                  {i.timer} <span className="text-12 opacity-80">{i.timerStatus}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <Layout>
      <div className="lg:hidden mb-6.5">
        <PremierMarketplace />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Balance />
        <History title="Transaction History" items={historyItems} />
        <Claiming items={claimingItems} />
        <History title="Your Offers" items={offersItems} />
      </div>
    </Layout>
  );
}

export default Details;
