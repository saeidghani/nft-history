import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Navigation from '../components/common/Navigation';

function Sidebar() {
  const router = useRouter();
  const { pathname } = router;
  console.log(pathname);

  return (
    <aside
      className="hidden lg:flex flex-col justify-between py-10 pl-10 pr-6.5
                 border border-solid border-fadeLightBlue1"
      style={{ height: 902 }}
    >
      <div>
        <div className="flex space-x-4">
          <Image src="/icons/logo.svg" width={30} height={30} />
          <div className="text-white text-26 font-semibold" style={{ whiteSpace: 'nowrap' }}>
            NFT HISTORY
          </div>
        </div>
        <Navigation />
      </div>
      <div
        className="bg-darkGray rounded-18 w-full flex flex-col items-center mt-20"
        style={{ width: 206, height: 213 }}
      >
        <div className="flex justify-center -mt-10">
          <Image src="/images/calendarIllustration.svg" width={180} height={180} />
        </div>
        <div className="">
          <div className="text-white text-15 font-light text-center" style={{ letterSpacing: 2 }}>
            <div>Sell your date</div>
            <div>as NFT now!</div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
