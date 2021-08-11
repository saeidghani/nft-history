import React, { useState } from 'react';
import Image from 'next/image';

function SearchInput({ isSm, onHideSearch }) {
  const [searchVal, setSearchVal] = useState('');

  const SearchResults = () => (
    <div
      className="absolute top-9 left-0 right-0 flex flex-col space-y-5 bg-darkGray4 rounded-b-18
                    px-4 pt-2 pb-7.5"
    >
      <div className="flex items-center space-x-2">
        <Image src="/icons/magnifier.svg" width={25} height={25} />
        <div className="text-white text-14">Nina Blake</div>
      </div>
      <div className="flex items-center space-x-2">
        <Image src="/images/avatar.png" width={38} height={38} />
        <div className="text-white text-14">Emilie Butler</div>
      </div>
      <div className="flex items-center space-x-2">
        <Image src="/images/avatar2.png" width={38} height={38} />
        <div className="text-white text-14">Emilie Bumser</div>
      </div>
    </div>
  );

  return (
    <div className="relative">
      <div className="relative w-full">
        <input
          type="text"
          className={`text-white bg-darkGray4 w-full 
                    border border-solid border-fadeLightBlue1 ${
                      searchVal ? 'rounded-t-18' : 'rounded-18'
                    } ${isSm ? 'h-9.5 pl-12' : 'h-11.5 pl-14'}`}
          placeholder="Search"
          onChange={(e) => setSearchVal(e.currentTarget.value)}
          value={searchVal}
        />
        <div className={`absolute left-4 ${isSm ? 'top-2.5' : 'top-3'}`}>
          <Image src="/icons/magnifier.svg" width={isSm ? 19 : 25} height={isSm ? 19 : 25} />
        </div>
        <div
          className={`absolute right-4 cursor-pointer ${isSm ? 'top-1.5' : 'top-3'}`}
          onClick={onHideSearch}
        >
          <Image src="/icons/close.svg" width={isSm ? 10 : 15} height={isSm ? 10 : 15} />
        </div>
      </div>
      {searchVal && <SearchResults />}
    </div>
  );
}

export default SearchInput;
