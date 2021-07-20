import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Layout from '../../Layout';

function OnSale() {
  const [activeDetail, setActiveDetail] = useState('comments');
  const router = useRouter();
  const { query } = router;
  const {
    auctionNotStarted,
    auctionStarted,
    auctionEnded,
    fixedPrice,
    onSale,
    dateNotAssigned,
    collection,
  } = query;

  const historyItems = [
    { key: 1, src: '/images/avatar3.png' },
    { key: 2, src: '/images/avatar4.png' },
    { key: 3, src: '/images/avatar5.png' },
    { key: 4, src: '/images/avatar6.png' },
    { key: 5, src: '/images/avatar.png' },
    { key: 6, src: '/images/avatar4.png' },
  ];

  const detailItems = [
    { key: 1, src: '/images/avatar3.png' },
    { key: 2, src: '/images/avatar4.png' },
    { key: 3, src: '/images/avatar5.png' },
    { key: 4, src: '/images/avatar6.png' },
  ];

  const details = [
    { key: 'comments', title: 'Comments(197)' },
    { key: 'likes', title: 'Likes(20)' },
  ];

  const Poster = () => (
    <div
      className={`bg-darkGray rounded-20 ${dateNotAssigned ? '' : 'p-6.5'}`}
      style={{ height: 482 }}
    >
      <div className="relative" style={{ height: 430 }}>
        {dateNotAssigned ? (
          <div className={`flex flex-col items-center w-full`} style={{ height: 482 }}>
            <div
              className="text-primary text-center text-48 flex justify-center items-center
                         font-bold bg-white w-full rounded-t-20 border border-solid border-white"
              style={{ height: 130 }}
            >
              FEB
            </div>
            <div
              className="flex justify-center items-center text-white text-center text-96
                         font-light rounded-b-20 w-full h-full border border-solid border-white"
            >
              23
            </div>
          </div>
        ) : collection ? (
          <div className="flex justify-center items-center bg-white rounded-10 h-full">
            <div>
              <div className="flex">
                <div className="text-84 font-Ubuntu mr-2">SPORT</div>
                <Image src="/icons/sport.svg" width={97} height={100} />
              </div>
              <div className="text-84 font-Ubuntu">EVENTS</div>
            </div>
          </div>
        ) : (
          <Image src="/images/poster1.png" layout="fill" />
        )}
        <div
          className={`absolute left-8 right-8 flex justify-between items-center ${
            dateNotAssigned ? '-bottom-1' : 'bottom-4'
          }`}
        >
          <div className="rounded-6 flex space-x-1 text-white bg-black bg-opacity-50 px-1">
            <div className="">Token ID:</div>
            <div className="">20600010973</div>
          </div>
          <div
            className="flex space-x-1 items-center
                        rounded-6 bg-black bg-opacity-60 px-2 py-1"
          >
            <Image src="/icons/like.svg" width={18} height={16} />
            <div className="text-white text-12 text-opacity-75">20</div>
          </div>
        </div>
      </div>
    </div>
  );

  const Offer = () => (
    <div
      className="flex flex-col justify-between bg-darkGray rounded-20 p-6.5"
      style={{ height: 482 }}
    >
      <div>
        <div className="flex justify-between items-center bg-white bg-opacity-10 rounded-18 p-4">
          <div className="text-white">{collection ? 'Sport Events' : '23 Feb, 2021'}</div>
          {collection && (
            <div className="flex items-center">
              <div className="flex space-x-4.5 mr-1">
                <div className="text-white text-18">6h</div>
                <div className="text-white text-18">35m</div>
                <div className="text-white text-18">12s</div>
              </div>
              <div className="text-white text-opacity-70 text-14 font-light">Till End</div>
            </div>
          )}
          {auctionEnded && (
            <div className="text-white text-opacity-70 text-14 font-light">Auction Ended</div>
          )}
        </div>
        {collection ? (
          <div className="text-white mt-6">
            <span className="font-medium mr-1">Sport Events</span>
            <span className="text-14 font-light">(collection)</span>
          </div>
        ) : (
          <div className="text-white font-medium mt-6">Day of Me</div>
        )}
        {collection ? (
          <div className="text-white mt-1.5">
            <p>
              Contains: 23 Feb, 2021 & 23 Feb, 2021 & 23 Feb, 2021 23 Feb, 2021 & 23 Feb, 2021 & 23
              Feb, 2021
            </p>
            <p>
              “Not everything that is faced can be changed, but nothing can be changed until it is
              faced.”
            </p>
          </div>
        ) : (
          <p className="text-white mt-1.5">
            “Not everything that is faced can be changed, but nothing can be changed until it is
            faced.” Detail of a forgotten relic, broken off from the source and lost from memory.
          </p>
        )}
        {!collection && (
          <div
            className="font-medium text-primary text-left flex justify-center
                      bg-primary bg-opacity-10 rounded-10 mt-2.5 py-1 w-16"
          >
            Sport
          </div>
        )}
      </div>
      <div>
        <div className="flex justify-between items-center">
          <div className="text-white font-medium">{collection ? 'Current Bid' : 'Sold For:'}</div>
          <div className="text-white font-medium">299.49 HSY</div>
        </div>
        {collection && (
          <div className="text-white text-12 text-opacity-80 font-light mt-3">
            You must at least bis 10% higher than current bid.
          </div>
        )}
        <div className="relative mt-5">
          <input
            className="text-white bg-transparent rounded-12 border border-solid border-lightBlue
                          h-14 w-full px-16"
          />
          <div className="absolute top-4 left-4 text-white text-18 text-opacity-80 font-light">
            0.00$
          </div>
          <div className="absolute top-4 right-4 text-white text-18 font-light">0 HSY</div>
        </div>
        <div className="flex items-center space-x-6.5 mt-5">
          <button
            disabled={auctionNotStarted}
            className="bg-primary text-white text-18 font-medium rounded-12 w-full h-14"
          >
            {auctionNotStarted || auctionStarted
              ? 'Place a Bid'
              : auctionEnded
              ? 'Make an Offer'
              : fixedPrice
              ? 'Buy Now'
              : onSale && auctionEnded
              ? 'Cancel Auction'
              : 'Put on Sale'}
          </button>
          {!auctionEnded && !collection && (
            <div
              className="h-14 w-20 rounded-18 flex justify-center items-center
                        border border-solid border-lightBlue"
            >
              <Image src="/icons/editPencil.svg" width={26} height={28} />
            </div>
          )}
          <div
            className="h-14 w-20 rounded-18 flex justify-center items-center
                        border border-solid border-lightBlue"
          >
            <Image src="/icons/switch.svg" width={26} height={26} />
          </div>
        </div>
      </div>
    </div>
  );

  const Details = () => (
    <div className="bg-darkGray rounded-20 py-6.5 overflow-hidden" style={{ height: 549 }}>
      <div
        className="flex items-center space-x-6 bg-white bg-opacity-10 rounded-18 px-4 mx-6.5"
        style={{ height: 58 }}
      >
        {details.map((d) => (
          <div
            key={d.key}
            className={`text-white font-medium py-2 px-3 cursor-pointer ${
              d.key === activeDetail ? 'bg-white bg-opacity-10 rounded-10' : ''
            }`}
            onClick={() => setActiveDetail(d.key)}
          >
            {d.title}
          </div>
        ))}
      </div>
      <div
        className="flex flex-col mt-6.5 overflow-auto ml-6.5 mr-4.5 pr-2"
        style={{ height: 330 }}
      >
        {detailItems.map((i, index) => (
          <div
            key={i.key}
            className={`flex space-x-3.5 border-b border-solid pt-4 pb-2 ${
              index === historyItems.length - 1 ? 'border-transparent' : 'border-fadeLightBlue4'
            }`}
          >
            <div>
              <Image src={i.src} width={48} height={48} />
            </div>
            <div className="">
              <div className="text-14 text-white font-medium">artecsteam</div>
              <div className="text-14 text-white font-medium mt-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="relative mt-5 mx-6.5">
        <input
          placeholder="Put a Comment"
          className="text-white bg-transparent rounded-12 border border-solid border-lightBlue
                          h-14 w-full pl-4 pr-16"
        />
        <div className="absolute top-4 right-4 text-white text-18 font-light">
          <Image src="/icons/message.svg" width={28} height={28} />
        </div>
      </div>
    </div>
  );

  const History = () => (
    <div className="bg-darkGray rounded-20 py-6.5 overflow-hidden" style={{ height: 549 }}>
      <div
        className="flex items-center text-white bg-white bg-opacity-10
                   rounded-18 font-medium px-4 mx-6.5"
        style={{ height: 58 }}
      >
        History
      </div>
      <div
        className="flex flex-col mt-6.5 overflow-auto ml-6.5 mr-4.5 pr-2"
        style={{ height: 410 }}
      >
        {historyItems.map((i, index) => (
          <div
            key={i.key}
            className={`flex space-x-3.5 border-b border-solid pt-4 pb-2 ${
              index === historyItems.length - 1 ? 'border-transparent' : 'border-fadeLightBlue4'
            }`}
          >
            <div>
              <Image src={i.src} width={48} height={48} />
            </div>
            <div className="">
              <div className="text-14 text-white">
                The Bitcoin Angel#61321 <span className="text-12">sold</span> 1.02HSY
              </div>
              <div className="text-14 text-white text-opacity-50 mt-1">2 days ago</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <Layout>
      <div className="bg-darkGray rounded-20 px-5 lg:px-8 py-6.5">
        <div className="flex justify-between">
          <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-3">
            <div className="w-23 h-23 flex justify-center items-center rounded-full">
              <Image src="/images/avatar.png" width={112} height={112} />
            </div>
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
            <div className="order-1 lg:order-2 flex space-x-4 mt-3">
              <div className="flex flex-col items-center">
                <div className="text-white text-14 font-light">Following</div>
                <div className="text-white text-18">56</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-white text-14 font-light">Followers</div>
                <div className="text-white text-18">2,233</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8 mt-8">
        <Poster />
        <Offer />
        <Details />
        <History />
      </div>
    </Layout>
  );
}

export default OnSale;
