import React from 'react';
import Image from 'next/image';
import { historyItems } from '../constants/auctionHistoryData';

const AuctionHistory = () => (
  <div className="order-4 bg-darkGray rounded-20 py-6.5 overflow-hidden h-549px">
    <div
      className="flex items-center text-white bg-white bg-opacity-10
                   rounded-18 font-medium px-4 mx-6.5"
      style={{ height: 58 }}
    >
      History
    </div>
    <div className="flex flex-col mt-6.5 overflow-auto ml-6.5 mr-4.5 pr-2" style={{ height: 410 }}>
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

export default AuctionHistory;
