import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../Layout';
import PremierMarketplace from '../../components/common/PremierMarketplace';
import routes from '../../constants/routes';

function WalletBalance() {
  return (
    <Layout mainClass="pt-6 lg:pt-54">
      <div className="lg:hidden">
        <PremierMarketplace />
      </div>
      <div className="flex flex-col justify-center items-center mt-21 lg:mt-0">
        <div className="text-white text-20 font-medium">Connect your wallet</div>
        <div
          className="text-white text-opacity-80 text-18 font-light text-center px-4 lg:px-0
        mt-3 lg:mt-6.5"
        >
          Connect with one of available wallet providers
        </div>
        <div className="mt-3 lg:mt-7">
          <Image src="/images/metamask.png" width={115} height={90} />
        </div>
        <Link href={routes.walletBalance.details}>
          <div
            className="text-18 text-white flex justify-center items-center rounded-12
                          w-45 h-13.5 bg-primary mt-10 cursor-pointer"
          >
            Connect
          </div>
        </Link>
      </div>
    </Layout>
  );
}

export default WalletBalance;
