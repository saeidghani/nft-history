import React from 'react';
import Image from 'next/image';

function CheckboxSelect({ wrapperClass, items, onSetActiveFilter, activeFilter }) {
  return (
    <div className={wrapperClass}>
      <div className="bg-darkGray py-5 pl-6.5 rounded-20 w-full">
        <div className="flex flex-col space-y-5">
          {items.map((i) => (
            <div
              key={i.key}
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => onSetActiveFilter(i)}
            >
              <div
                className={`w-4 h-4 rounded flex justify-center items-center
                              border border-solid ${
                                i.key === activeFilter.key
                                  ? 'bg-primary border-primary'
                                  : 'border-lightBlue'
                              }`}
              >
                {i.key === activeFilter.key && (
                  <div className="pb-1 bg-transparent">
                    <Image src="/icons/tick.svg" width={8} height={6} />
                  </div>
                )}
              </div>
              <div className={`text-white ${i.key === activeFilter.key ? '' : 'text-opacity-40'}`}>
                {i.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CheckboxSelect;
