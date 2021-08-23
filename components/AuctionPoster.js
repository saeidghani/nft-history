import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

function AuctionPoster() {
  const router = useRouter();
  const { query } = router;
  const { auctionWon, dateNotAssigned, collection } = query;

  return (
    <div
      className={`justify-self-center order-1 bg-darkGray rounded-20 
                  w-full lg:h-482px ${dateNotAssigned || auctionWon ? '' : 'p-4 lg:p-6.5'}`}
    >
      <div className="relative w-full h-full">
        {dateNotAssigned || auctionWon ? (
          <div className={`flex flex-col items-center w-full h-296px lg:h-482px`}>
            <div
              className="text-primary text-center text-48 flex justify-center items-center font-bold
                         bg-white w-full rounded-t-20 border border-solid border-white h-130px"
            >
              FEB
            </div>
            <div
              className="flex justify-center items-center text-white text-center text-146
                         font-light rounded-b-20 w-full h-full border border-solid border-white"
            >
              23
            </div>
          </div>
        ) : collection ? (
          <div className="flex justify-center items-center bg-white rounded-10 h-full px-4 py-12 lg:p-0">
            <div>
              <div className="flex justify-between">
                <div className="text-48 xl:text-84 font-Ubuntu mr-6 mt-2">SPORT</div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/icons/sport.svg" className="w-15 xl:w-24 mr-4" />
              </div>
              <div className="text-48 xl:text-84 font-Ubuntu" style={{ letterSpacing: 15 }}>
                EVENTS
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center h-full">
            {/* eslint-disable-next-line @next/next/no-img-element*/}
            <img src="/images/poster1.png" className="object-cover w-full h-full" />
          </div>
        )}
        <div
          className={`absolute left-4 right-4 flex justify-between items-center ${
            dateNotAssigned || auctionWon ? 'bottom-4' : 'bottom-6 lg:bottom-10'
          }`}
        >
          {!auctionWon && (
            <>
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
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default AuctionPoster;
