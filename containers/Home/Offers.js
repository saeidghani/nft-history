import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useWindowSize } from '../../utils';
import Slider from 'react-slick';

const text = `Apollo 11 was the spaceflight that first landed humans on the moon. 
           Neil Armstrong and Buzz Aldrin formed the American crew that landed the Apollo 
           Lunar Module Eagle on July 20, 1969, at 20:17 UTC. Armstrong became the first person 
           to step onto the lunar surface, Aldrin joined him 19 minutes later.`;

const items = [
  {
    key: 1,
    date: '20 July 1969',
    status: 'Sold',
    title: 'First man on the moon',
    category: 'History',
    text,
    price: '299.49 HSY',
  },
  {
    key: 2,
    date: '21 July 1969',
    status: 'Sold',
    title: 'First man on the moon',
    category: 'History',
    text,
    price: '299.49 HSY',
  },
  {
    key: 3,
    date: '22 July 1969',
    status: 'Sold',
    title: 'First man on the moon',
    category: 'History',
    text,
    price: '299.49 HSY',
  },
  {
    key: 4,
    date: '23 July 1969',
    status: 'Sold',
    title: 'First man on the moon',
    category: 'History',
    text,
    price: '299.49 HSY',
  },
  {
    key: 5,
    date: '24 July 1969',
    status: 'Sold',
    title: 'First man on the moon',
    category: 'History',
    text,
    price: '299.49 HSY',
  },
];

function Offers() {
  const [dateOrderKeys, setLogoOrderKeys] = useState([1, 2, 3, 4, 5]);
  const [dateOrders, setDateOrders] = useState({});
  const [activeSlide, setActiveSlide] = useState(0);
  const positions = [0, 100, 210, 320, 440];
  const sliderRef = React.createRef();

  const settings = {
    arrows: false,
    infinite: true,
    swipeToSlide: true,
    speed: 500,
    variableWidth: true,
    className: 'center',
    centerMode: true,
  };

  useEffect(() => {
    const dateOrders = {};
    items?.forEach((logo, index) => {
      dateOrders[logo.key] = positions[index];
    });
    setDateOrders(dateOrders);
  }, []);

  const shift = (arr, direction, n) => {
    const times = n > arr.length ? n % arr.length : n;
    return arr.concat(arr.splice(0, direction > 0 ? arr.length - times : times));
  };

  return (
    <div className="flex flex-col lg:flex-row mt-6 lg:mt-11.5">
      <div className="grid lg:hidden grid-cols-1 slick-slides-gap relative sm:mr-2 lg:mx-5">
        <Slider className="" {...settings} ref={sliderRef}>
          {items.map((i, index) => (
            <div
              key={i.key}
              className="flex flex-col items-center justify-center cursor-pointer text-white"
              onClick={() => setActiveSlide(index)}
            >
              <div
                className="rounded-14 border border-solid border-white py-2 px-3"
                style={{ opacity: activeSlide === index ? 1 : 0.2 }}
              >
                <div className="text-white text-center">{i.date}</div>
              </div>
              <div
                className="-ml-1.5 transform rotate-90 mt-10"
                style={{ opacity: activeSlide === index ? 1 : 0.2 }}
              >
                <Image src="/images/circleLine.svg" width={81} height={12} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="hidden lg:block  w-full max-w-190px">
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
                <div className="text-primary font-medium rounded-10 py-1 px-2 bg-primary bg-opacity-10">
                  History
                </div>
              </div>
              <p className="text-white mt-3">
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
                <button
                  className="text-18 font-medium text-white bg-primary
                                 rounded-12 h-14 px-7 w-full"
                >
                  Make an Offer
                </button>
                <div>
                  <div
                    className="h-14 w-14 rounded-12 flex justify-center items-center
                        border border-solid border-lightBlue cursor-pointer"
                    onClick={() => {}}
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
