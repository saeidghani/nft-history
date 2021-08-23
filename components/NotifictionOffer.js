import React, { useState } from 'react';
import Image from 'next/image';
import NotificationOfferButtons from './NotificationOfferButtons';
import { acceptRejectButtons } from '../constants/offerButtonsData';

function NotificationOffer({ id, details, text, timer, displayButtons = true }) {
  const [acceptedOffers, setAcceptedOffers] = useState({
    1: 'accept',
    3: 'accept',
    5: 'accept',
    8: 'accept',
    9: 'accept',
    10: 'accept',
    12: 'accept',
  });

  const handleOpenOfferButtonsClick = (id) =>
    setAcceptedOffers({
      ...acceptedOffers,
      [id]:
        acceptedOffers[id] === acceptRejectButtons[0].key
          ? acceptRejectButtons[1].key
          : acceptRejectButtons[0].key,
    });

  return (
    <div>
      <div className="flex space-x-4">
        <div className="relative p-5 rounded-20 bg-darkGray">
          <div style={{ width: 130 }}>
            <Image src="/images/cardPic2.png" width={130} height={136} />
          </div>
          <div
            className="absolute top-8 left-5 right-5 rounded-6 text-white bg-black
                       bg-opacity-60 flex items-center space-x-1 px-2 py-1"
          >
            <div className="text-14">{details?.time}</div>
            <div className="text-12 text-opacity-75">{details?.status}</div>
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
        <div className="flex flex-col justify-between w-full pt-3 pb-2" style={{ maxWidth: 336 }}>
          <div className="">
            <div className="text-white">
              <span className="font-bold mr-1">{text?.offeror}</span>
              {text?.rejected ? (
                <span className="">has rejected your offer of</span>
              ) : (
                <span className="">has made an offer of</span>
              )}
              <span className="font-bold ml-1">{text?.price}</span> <br />
              {text?.rejected ? <span className="">for</span> : <span className="">for your</span>}
              <span className="font-bold ml-1">{text?.date}</span>
            </div>
            <div className="text-white text-14 font-light mt-2">{timer}</div>
          </div>
          {displayButtons && (
            <NotificationOfferButtons
              wrapperClass="hidden xl:block"
              id={id}
              acceptedOffers={acceptedOffers}
              onOpenOfferButtonsClick={() => handleOpenOfferButtonsClick(id)}
            />
          )}
        </div>
      </div>
      {displayButtons && (
        <NotificationOfferButtons
          wrapperClass="xl:hidden"
          id={id}
          acceptedOffers={acceptedOffers}
          onOpenOfferButtonsClick={() => handleOpenOfferButtonsClick(id)}
        />
      )}
    </div>
  );
}

export default NotificationOffer;
