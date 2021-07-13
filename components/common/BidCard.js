import React from 'react';
import Image from 'next/image';
import { overrideTailwindClasses } from 'tailwind-override';

function BidCard({ wrapperClass, calendar, timer }) {
  return (
    <div className={`${wrapperClass}`} style={{ width: 248 }}>
      <div className="flex flex-col bg-darkGray rounded-20 pt-5 pb-4 px-5">
        <div className="flex flex-col items-center w-full" style={{ height: 218 }}>
          {calendar ? (
            <div className="flex flex-col items-center w-full mt-3.5" style={{ height: 182 }}>
              <div
                className="text-primary text-center text-28 font-bold bg-white w-full rounded-t-20
                         border border-solid border-white"
                style={{ height: 50 }}
              >
                FEB
              </div>
              <div
                className="text-white text-center text-96 font-light rounded-b-20 w-full
                          border border-solid border-white"
              >
                23
              </div>
            </div>
          ) : (
            <div className="relative">
              <Image src="/images/cardPic1.png" width={208} height={218} />
              {timer && (
                <div
                  className="absolute top-1.5 right-1.5 flex items-center space-x-1 rounded-6
                     bg-black bg-opacity-60 text-white px-1 py-0.5"
                >
                  <div className="text-14 text-white">6h</div>
                  <div className="text-14 text-white">35m</div>
                  <div className="text-14 text-white">12s</div>
                  <div className="text-12 text-white text-opacity-60">Till End</div>
                </div>
              )}
            </div>
          )}
        </div>
        <div className="">
          <div className="text-14 text-white opacity-60 font-light mt-3">On Auction</div>
          <div className="flex justify-between mt-3">
            <div className="text-white">20 July 1969</div>
            <div className="text-white">299.49 HSY</div>
          </div>
          <div className="flex justify-between border-t border-solid border-fadeWhite1 pt-3 mt-7">
            <div className="flex items-center space-x-1">
              <Image src="/icons/star.svg" width={17} height={16} />
              <div className="text-white opacity-80 text-12">22</div>
            </div>
            <div className="flex items-center space-x-1">
              <Image src="/icons/comment.svg" width={16} height={15} />
              <div className="text-white opacity-80 text-12">22</div>
            </div>
            <div className="flex items-center space-x-1">
              <Image src="/icons/like.svg" width={18} height={16} />
              <div className="text-white opacity-80 text-12">20</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BidCard;
