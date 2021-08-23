import React from 'react';
import Image from 'next/image';

const NotificationAuction = ({ details, text, timer }) => (
  <div>
    <div className="flex space-x-4">
      <div className="relative p-5 rounded-20 bg-darkGray">
        <div style={{ width: 130 }}>
          <Image src="/images/cardPic2.png" width={130} height={136} />
        </div>
        <div
          className="absolute top-21 left-5 right-5 rounded-6 text-white bg-black
                       bg-opacity-60 flex items-center space-x-1 px-2 py-1"
        >
          <div className="text-14">{details?.date}</div>
        </div>
        <div
          className="absolute top-30 left-5 right-5 rounded-6 text-white bg-black
                       bg-opacity-60 flex items-center space-x-1 px-2 py-1"
        >
          <div className="text-14">{details?.price}</div>
        </div>
      </div>
      <div className="flex flex-col justify-between w-full pt-3 pb-2">
        <div className="text-white">
          Congratulations you have won the <br /> auction. please claim your nft. <br />
          <span className="font-bold mx-1">{text?.date}</span> for
          <span className="font-bold ml-1">{text?.price}</span>
        </div>
        <div className="text-white text-14 font-light mt-1">{timer}</div>
        <button
          className="hidden xl:block text-white text-18 font-medium btn-primary rounded-12 w-full h-14"
          style={{ maxWidth: 332 }}
        >
          Claim
        </button>
      </div>
    </div>
    <button
      className="xl:hidden text-white text-18 font-medium btn-primary rounded-12 w-full h-14 mt-4"
      style={{ maxWidth: 332 }}
    >
      Claim
    </button>
  </div>
);

export default NotificationAuction;
