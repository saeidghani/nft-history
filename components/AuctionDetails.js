import React, { useState } from 'react';
import Image from 'next/image';
import { details, detailItems, historyItems } from '../constants/auctionDetailsData';

function AuctionDetails() {
  const [activeDetail, setActiveDetail] = useState('comments');

  return (
    <div className="order-2 lg:order-3 bg-darkGray rounded-20 py-6.5 overflow-hidden lg:h-549px">
      <div
        className="flex items-center space-x-4 lg:space-x-6 bg-white bg-opacity-10 rounded-18 px-4 mx-4 lg:mx-6.5"
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
      <div className="hidden lg:flex flex-col mt-6.5 overflow-auto ml-6.5 mr-4.5 pr-2 h-330px">
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
              <div className="text-14 text-white font-medium">
                {activeDetail === 'comments' ? 'artecsteam' : 'artecsteam!!!'}
              </div>
              <div className="text-14 text-white font-medium mt-1">
                {activeDetail === 'comments'
                  ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                  : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.!!!'}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="hidden lg:block relative mt-5 mx-6.5">
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
}

export default AuctionDetails;
