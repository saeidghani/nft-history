import React from 'react';
import Image from 'next/image';

export default function PremierMarketplace() {
  return (
    <div className="flex justify-center w-full ">
      <div className="bg-darkGray rounded-18 relative w-full xs:w-80">
        <div className="absolute top-8 xs:top-4 left-5 text-19 text-white font-light z-10">
          The Premier <br /> Marketplace for <br /> Dates
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="w-full" src="/images/calendarIllustrationSm.svg" />
      </div>
    </div>
  );
}
