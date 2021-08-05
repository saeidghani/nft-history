import React from 'react';
import Image from 'next/image';

export default function PremierMarketplace() {
  return (
    <div className="flex justify-center">
      <div className="relative">
        <div className="absolute top-5 left-5 text-19 text-white font-light z-10">
          The Premier <br /> Marketplace for <br /> Dates
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/calendarIllustrationSm.svg" />
      </div>
    </div>
  );
}
