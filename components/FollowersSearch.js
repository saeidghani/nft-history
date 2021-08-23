import React from 'react';
import Image from 'next/image';

const FollowersSearch = ({ wrapperClass }) => (
  <div className={wrapperClass}>
    <div className="relative w-full">
      <input
        type="text"
        className="text-white bg-white bg-opacity-10 rounded-18 w-full
                    border border-solid border-fadeLightBlue1 h-10.5 pl-12"
        placeholder="Search"
      />
      <div className="absolute left-4 top-2.5">
        <Image src="/icons/magnifier.svg" width={19} height={19} />
      </div>
    </div>
  </div>
);

export default FollowersSearch;
