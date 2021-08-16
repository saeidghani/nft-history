import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import routes from '../../constants/routes';
import { useRouter } from 'next/router';
import { useWindowSize } from '../../utils';

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
  {
    key: 6,
    date: '25 July 1969',
    status: 'Sold',
    title: 'First man on the moon',
    category: 'History',
    text,
    price: '299.49 HSY',
  },
  {
    key: 7,
    date: '26 July 1969',
    status: 'Sold',
    title: 'First man on the moon',
    category: 'History',
    text,
    price: '299.49 HSY',
  },
  {
    key: 8,
    date: '27 July 1969',
    status: 'Sold',
    title: 'First man on the moon',
    category: 'History',
    text,
    price: '299.49 HSY',
  },
  {
    key: 9,
    date: '28 July 1969',
    status: 'Sold',
    title: 'First man on the moon',
    category: 'History',
    text,
    price: '299.49 HSY',
  },
  {
    key: 10,
    date: '29 July 1969',
    status: 'Sold',
    title: 'First man on the moon',
    category: 'History',
    text,
    price: '299.49 HSY',
  },
  {
    key: 11,
    date: '30 July 1969',
    status: 'Sold',
    title: 'First man on the moon',
    category: 'History',
    text,
    price: '299.49 HSY',
  },
  {
    key: 12,
    date: '31 July 1969',
    status: 'Sold',
    title: 'First man on the moon',
    category: 'History',
    text,
    price: '299.49 HSY',
  },
];

function AnimatedSlider({ wrapperClass, wrapperStyle }) {
  const [activeSlide, setActiveSlide] = useState(1);
  const [positions, setPositions] = useState([]);
  const [dateOrders, setDateOrders] = useState({});
  const [dateOrderKeys, setDateOrderKeys] = useState([]);
  const [middle, setMiddle] = useState(3);
  const sliderRef = React.createRef();
  const { width } = useWindowSize();

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
    const orderKeys = items.map((i, index) => i.key);
    setDateOrderKeys(orderKeys);
    setActiveSlide(middle);
  }, []);

  useEffect(() => {
    console.log(width);
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

  return (
    <div className={`w-full overflow-hidden ${wrapperClass || ''}`} style={wrapperStyle}>
      <div className="relative w-full">
        {items.map(({ key, date }, index) => (
          <div
            key={key}
            className={`flex flex-row items-center justify-center cursor-pointer text-white 
                        absolute left-0 right-0 mx-auto transition-all duration-200`}
            style={{
              transform: `translateY(${dateOrders[index + 1]}px)`,
              opacity: dateOrderKeys.indexOf(index + 1) === middle ? 1 : 0.3,
            }}
            onClick={() => {
              const num = index + 1;
              setActiveSlide(index);
              const newLogoOrderKeys = shift(
                dateOrderKeys,
                dateOrderKeys.indexOf(num) > middle ? 0 : 1,
                Math.abs(dateOrderKeys.indexOf(num) - middle),
              );
              setDateOrderKeys(newLogoOrderKeys);
              const newDateOrders = {};
              newLogoOrderKeys.forEach((num, index) => {
                newDateOrders[num] = positions[index];
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
  );
}

export default AnimatedSlider;
