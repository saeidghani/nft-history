import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../Layout';
import PremierMarketplace from '../../components/common/PremierMarketplace';
import routes from '../../constants/routes';
import { claimingItems, offersItems, historyItems } from '../../constants/walletDetailsData';

function WalletBalanceDetails() {
  return (
    <Layout>
      <div className="lg:hidden mb-6.5">
        <PremierMarketplace />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
        <div className="bg-darkGray rounded-20 py-6.5 overflow-hidden h-103.5">
          <div
            className="text-center lg:text-left text-white bg-white bg-opacity-10 rounded-18
                      font-medium p-4 mx-4 lg:mx-6.5"
          >
            Transaction History
          </div>
          <div
            className="flex flex-col space-y-4 mt-6.5 overflow-auto ml-6.5 mr-4.5 pr-2"
            style={{ height: 300 }}
          >
            {historyItems.map((i, index) => (
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
        <div className="bg-darkGray rounded-20 pt-4 px-4 lg:p-6.5 lg:h-103.5 overflow-hidden">
          <div
            className="text-center lg:text-left text-white bg-white bg-opacity-10 rounded-18
                   font-medium p-4"
          >
            Claiming
          </div>
          <div className="mt-3.5 h-92 lg:h-100 overflow-auto">
            {claimingItems.map((i, index) => (
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
        <div className="bg-darkGray rounded-20 py-6.5 overflow-hidden h-103.5">
          <div
            className="text-center lg:text-left text-white bg-white bg-opacity-10 rounded-18
                      font-medium p-4 mx-4 lg:mx-6.5"
          >
            Your Offers
          </div>
          <div
            className="flex flex-col space-y-4 mt-6.5 overflow-auto ml-6.5 mr-4.5 pr-2"
            style={{ height: 300 }}
          >
            {offersItems.map((i, index) => (
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
      </div>
    </Layout>
  );
}

export default WalletBalanceDetails;
