import Image from 'next/image';
import React from 'react';

<div className="relative justify-between w-full">
  {items.map(({ key, date }, index) => (
    <div
      key={key}
      className={`flex flex-row items-center justify-center cursor-pointer text-white 
                        absolute left-0 right-0 mx-auto transition-all duration-200`}
      style={{
        transform: `translateY(${dateOrders[key]}px)`,
        opacity: [0, 4].includes(dateOrderKeys.indexOf(key))
          ? 0.3
          : [1, 3].includes(dateOrderKeys.indexOf(key))
          ? 0.45
          : 1,
      }}
      onClick={() => {
        setActiveSlide(index);
        if (dateOrderKeys.indexOf(key) === 2) {
        }
        const newLogoOrderKeys = shift(
          dateOrderKeys,
          dateOrderKeys.indexOf(key) > 2 ? 0 : 1,
          Math.abs(dateOrderKeys.indexOf(key) - 2),
        );
        setLogoOrderKeys(newLogoOrderKeys);
        const newDateOrders = {};
        newLogoOrderKeys.forEach((key, index) => {
          newDateOrders[key] = positions[index];
        });
        setDateOrders(newDateOrders);
      }}
    >
      <div className="rounded-14 border border-solid border-white py-2 px-3">
        <div className="text-white text-center">{date}</div>
      </div>
      <div className="-ml-1.5">
        <Image src="/images/circleLine.svg" width={81} height={12} />
      </div>
    </div>
  ))}
</div>;
