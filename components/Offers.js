import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import routes from '../constants/routes';
import { useWindowSize } from '../utils';
import { items } from '../constants/offersData';

function Offers() {
  const [activeSlide, setActiveSlide] = useState(1);
  const [positions, setPositions] = useState([]);
  const [dateOrders, setDateOrders] = useState({});
  const [dateOrderKeys, setDateOrderKeys] = useState([]);
  const [middle, setMiddle] = useState(3);
  const { width } = useWindowSize();

  useEffect(() => {
    const orderKeys = items.map((i, index) => i.key);
    setDateOrderKeys(orderKeys);
    setActiveSlide(middle);
  }, []);

  useEffect(() => {
    const middle = width < 640 ? 1 : width < 768 ? 2 : width < 1024 ? 3 : 1;
    setMiddle(middle);
    setActiveSlide(middle);
  }, [width]);

  useEffect(() => {
    const positions = items.map((i, index) => (width < 1024 ? index * 130 : index * 110));
    setPositions(positions);
    const dateOrders = {};
    items?.forEach((logo, index) => {
      dateOrders[index] = positions[index];
    });
    setDateOrders(dateOrders);
  }, [width]);

  const shift = (arr, direction, n) => {
    const times = n > arr.length ? n % arr.length : n;
    return arr.concat(arr.splice(0, direction > 0 ? arr.length - times : times));
  };

  const handleItemClick = (index) => {
    const num = index + 1;
    setActiveSlide(index);
    const dir = dateOrderKeys.indexOf(num) > middle ? 0 : 1;
    const n = Math.abs(dateOrderKeys.indexOf(num) - middle);
    const newLogoOrderKeys = shift(dateOrderKeys, dir, n);
    setDateOrderKeys(newLogoOrderKeys);
    const newDateOrders = {};
    newLogoOrderKeys.forEach((num, index) => {
      newDateOrders[num] = positions[index];
    });
    setDateOrders(newDateOrders);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center mt-6 lg:mt-11.5">
      <div className="block lg:hidden w-full overflow-hidden h-20">
        <div className="relative flex w-full h-full">
          {items.map(({ key, date }, index) => (
            <div
              key={key}
              className={`cursor-pointer text-white absolute top-0 bottom-0 transition-all duration-300`}
              style={{
                transform: `translateX(${dateOrders[index + 1]}px)`,
                opacity: dateOrderKeys.indexOf(index + 1) === middle ? 1 : 0.3,
              }}
              onClick={() => handleItemClick(index)}
            >
              <div className="rounded-14 border border-solid border-white py-2 px-3">
                <div className="text-white text-center">{date}</div>
              </div>
              <div className="transform rotate-90 mt-10">
                <Image src="/images/circleLine.svg" width={81} height={12} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className="hidden lg:block w-full max-w-190px flex items-center overflow-hidden"
        style={{ height: 512 }}
      >
        <div className="relative w-full">
          {items.map(({ key, date }, index) => (
            <div
              key={key}
              className={`flex flex-row items-center justify-center cursor-pointer text-white 
                        absolute left-0 right-0 mx-auto transition-all duration-300`}
              style={{
                transform: `translateY(${dateOrders[index + 1]}px)`,
                opacity: dateOrderKeys.indexOf(index + 1) === middle ? 1 : 0.3,
              }}
              onClick={() => handleItemClick(index)}
            >
              <div className="rounded-14 border border-solid border-white py-2 px-3">
                <div className="text-white text-center">{date}</div>
              </div>
              <div className="-ml-1.5">
                <Image src="/images/circleLine.svg" width={81} height={12} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row items-center" style={{ maxWidth: 897 }}>
        <div className="hidden lg:block rounded-l-6 bg-primary" style={{ width: 5, height: 219 }} />
        <div
          className="lg:hidden rounded-b-6 bg-primary relative top-1"
          style={{ width: 219, height: 5 }}
        />
        <div
          className="flex flex-col lg:flex-row space-x-0 lg:space-x-7 bg-fadeWhite1 rounded-18 p-4
                     lg:p-11.5 w-full"
        >
          {/*eslint-disable-next-line @next/next/no-img-element*/}
          <img src="/images/homePic.png" />
          <div className="flex flex-col justify-between">
            <div>
              <div
                className="flex justify-between rounded-18 bg-white bg-opacity-10
                              py-4 px-4 mt-5"
              >
                <div className="text-18 text-white">{items[activeSlide].date}</div>
                <div className="text-14 text-white text-opacity-75 font-light pt-1">Sold</div>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="text-white font-medium">First man on the moon</div>
                <div
                  className="text-primary font-medium rounded-10 py-1 px-2
                                bg-primary bg-opacity-10 capitalize"
                >
                  {items[activeSlide].category}
                </div>
              </div>
              <p className="text-white mt-4">
                Apollo 11 was the spaceflight that first landed humans on the moon. Neil Armstrong
                and Buzz Aldrin formed the American crew that landed the Apollo Lunar Module Eagle
                on July 20, 1969, at 20:17 UTC. Armstrong became the first person to step onto the
                lunar surface, Aldrin joined him 19 minutes later.
              </p>
            </div>
            <div>
              <div className="flex justify-between mt-3.5">
                <div className="text-white font-medium">Sold For</div>
                <div className="text-white font-medium">299.49 HSY</div>
              </div>
              <div className="flex space-x-3 mt-4">
                <Link href={`${routes.auctions.view(1)}?auctionEnded=true`}>
                  <div
                    className="text-18 font-medium text-white btn-primary rounded-12
                               h-14 px-7 w-full flex justify-center items-center cursor-pointer"
                  >
                    Make an Offer
                  </div>
                </Link>
                <div>
                  <div
                    className="h-14 w-14 rounded-12 flex justify-center items-center
                        border border-solid border-lightBlue cursor-pointer"
                  >
                    <Image src="/icons/switch.svg" width={26} height={26} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offers;
