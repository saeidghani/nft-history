import React from 'react';
import Link from 'next/link';
import routes from '../constants/routes';
import Image from 'next/image';
import { useRouter } from 'next/router';

function AuctionOffer({ onSetPlaceABidOpen, onSetCancelAuctionOpen, onSetMakeOfferOpen }) {
  const router = useRouter();
  const { query } = router;
  const {
    auctionNotStarted,
    auctionStarted,
    auctionEnded,
    fixedPrice,
    onSale,
    auctionWon,
    dateNotAssigned,
    collection,
    cancel,
    id,
  } = query;

  const handleOfferClick = () => {
    if (auctionStarted) {
      onSetPlaceABidOpen();
    } else if (onSale && cancel) {
      onSetCancelAuctionOpen();
    } else if (!onSale && auctionEnded) {
      onSetMakeOfferOpen();
    } else if (fixedPrice) {
    } else if (onSale && auctionEnded) {
    } else if (auctionWon) {
    } else {
    }
  };

  return (
    <div
      className="order-3 lg:order-2 flex flex-col justify-between bg-darkGray rounded-20
                    lg:h-482px p-4 lg:p-6.5"
    >
      <div>
        <div className="flex justify-between items-center bg-white bg-opacity-10 rounded-18 p-4">
          <div className="text-white text-18">{collection ? 'Sport Events' : '23 Feb, 2021'}</div>
          {(collection || auctionStarted || auctionWon) && (
            <div className="flex items-center">
              <div className="flex space-x-2 xl:space-x-4.5 mr-1">
                <div className="text-white text-15 xl:text-18">6h</div>
                <div className="text-white text-15 xl:text-18">35m</div>
                <div className="text-white text-15 xl:text-18">12s</div>
              </div>
              <div className="text-white text-opacity-70 text-12 xl:text-14 font-light">
                Till End
              </div>
            </div>
          )}
          {auctionNotStarted && (
            <div className="flex items-center">
              <div className="flex space-x-2 xl:space-x-4.5 mr-1">
                <div className="text-white text-15 xl:text-18">56h</div>
                <div className="text-white text-15 xl:text-18">35m</div>
                <div className="text-white text-15 xl:text-18">12s</div>
              </div>
              <div className="text-white text-opacity-70 text-12 xl:text-14 font-light">
                To Start
              </div>
            </div>
          )}
          {(auctionEnded || dateNotAssigned) && (
            <div className="text-white text-opacity-70 text-12 xl:text-14 font-light">
              Auction Ended
            </div>
          )}
        </div>
        {collection ? (
          <div className="text-white mt-2 xl:mt-6">
            <span className="font-medium mr-1">Sport Events</span>
            <span className="text-14 font-light">(collection)</span>
          </div>
        ) : auctionWon ? (
          <div className="text-white font-medium mt-6">Token ID: 20600010973</div>
        ) : (onSale && auctionEnded) || dateNotAssigned ? (
          <div className="text-white font-medium mt-6">Day Name</div>
        ) : (
          <div className={`text-white font-medium ${auctionNotStarted ? 'mt-2 xl:mt-3' : 'mt-6'}`}>
            Day of Me
          </div>
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
        {!collection && (auctionStarted || auctionNotStarted || auctionEnded || fixedPrice) && (
          <div
            className="font-medium text-primary text-left flex justify-center
                      bg-primary bg-opacity-10 rounded-10 mt-1 xl:mt-2.5 py-1 w-16"
          >
            Sport
          </div>
        )}
      </div>
      <div>
        {(auctionStarted || auctionNotStarted || auctionEnded || auctionWon || fixedPrice) && (
          <>
            <div className="flex justify-between items-center mt-1">
              <div className="text-white font-medium ">
                {auctionStarted
                  ? 'Current Bid'
                  : auctionNotStarted
                  ? 'Minimum Bid:'
                  : fixedPrice
                  ? 'Price'
                  : auctionWon
                  ? 'Winner Bid'
                  : 'Sold For:'}
              </div>
              <div className="text-white font-medium">
                {auctionWon ? '3,600 HSY' : '299.49 HSY'}
              </div>
            </div>
            {(auctionStarted || auctionNotStarted) && (
              <div className="text-white text-12 text-opacity-80 font-light mt-1.5 xl:mt-3">
                You must at least bis 10% higher than current bid.
              </div>
            )}
            {!auctionWon && !fixedPrice && !dateNotAssigned && (
              <div className="relative mt-2 xl:mt-5">
                <input
                  className="text-white bg-transparent rounded-12 border border-solid border-lightBlue
                          h-14 w-full px-16"
                />
                <div className="absolute top-4 left-4 text-white text-18 text-opacity-80 font-light">
                  0.00$
                </div>
                <div className="absolute top-4 right-4 text-white text-18 font-light">0 HSY</div>
              </div>
            )}
          </>
        )}
        <div className="flex items-center space-x-3 lg:space-x-6.5 mt-3 xl:mt-5">
          <button
            className={`btn-primary text-white text-18 font-medium rounded-12 w-full h-14 ${
              auctionNotStarted ? 'opacity-40 cursor-not-allowed' : ''
            }`}
            onClick={handleOfferClick}
          >
            {auctionNotStarted || auctionStarted
              ? 'Place a Bid'
              : onSale && cancel
              ? 'Cancel Auction'
              : fixedPrice
              ? 'Buy Now'
              : !onSale && auctionEnded
              ? 'Make an Offer'
              : auctionWon
              ? 'Claim'
              : 'Put on Sale'}
          </button>
          <div className="flex items-center space-x-3 lg:space-x-6.5">
            {onSale && !cancel && (
              <Link href={routes.auctions.edit(id)}>
                <div
                  className="h-14 w-14 rounded-18 flex justify-center items-center
                        border border-solid border-lightBlue cursor-pointer"
                >
                  <Image src="/icons/editPencil.svg" width={26} height={28} />
                </div>
              </Link>
            )}
            <div
              className="h-14 w-14 rounded-18 flex justify-center items-center
                        border border-solid border-lightBlue cursor-pointer"
            >
              <Image src="/icons/switch.svg" width={26} height={26} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuctionOffer;
