import React from 'react';
import Image from 'next/image';

export default function PremierMarketplace() {
  return (
    <div className="flex justify-center">
      <div className="relative">
        <div className="absolute top-5 left-5 text-19 text-white font-light z-10">
          The Premier <br /> Marketplace for <br /> Dates
        </div>
        <Image src="/images/calendarIllustrationSm.svg" width={327} height={128} />
      </div>
    </div>
  );
}
