import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import routes from '../constants/routes';

const Banner = () => (
  <div className="hidden lg:flex bg-darkGray rounded-18 pl-9.5 mt-13.5">
    <div className="py-9.5 flex flex-col justify-between items-start">
      <Image src="/images/miniLogo.png" width={174} height={30} />
      <p className="text-18 text-white font-light mt-3">
        Everybody can own a house, a car, a shoe or a business. But how about being the only owner
        of something unique? We made it possible to own, sell and buy dates a.k.a. any moment of
        human history from discovering America through your birthday to creating Bitcoin.
      </p>
      <Link href={routes.marketPlace.index}>
        <span
          className="inline-flex items-center text-18 text-white btn-primary
                           rounded-12 h-13.5 px-7 mt-6.5 cursor-pointer"
        >
          GO TO MARKETPLACE
        </span>
      </Link>
    </div>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src="/images/calendarIllustration.png" />
  </div>
);

export default Banner;
