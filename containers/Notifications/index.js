import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../Layout';
import routes from '../../constants/routes';

function Notifications() {
  const notificationItems = [
    {
      key: 1,
      details: { time: '6h 35 12s', status: 'Till End', date: '23 Feb, 2021', price: '$ 299.49' },
      text: {
        part1: 'Serati_Ma',
        part2: 'has made an offer of',
        part3: '10 HSY',
        part4: 'for your',
        part5: '“23 Feb, 2021”',
      },
      timer: '2 hours ago',
    },
    {
      key: 1,
      details: { time: '6h 35 12s', status: 'Till End', date: '23 Feb, 2021', price: '$ 299.49' },
      text: {
        part1: 'Serati_Ma',
        part2: 'has made an offer of',
        part3: '10 HSY',
        part4: 'for your',
        part5: '“23 Feb, 2021”',
      },
      timer: '2 hours ago',
    },
    {
      key: 1,
      details: { time: '6h 35 12s', status: 'Till End', date: '23 Feb, 2021', price: '$ 299.49' },
      text: {
        part1: 'Serati_Ma',
        part2: 'has made an offer of',
        part3: '10 HSY',
        part4: 'for your',
        part5: '“23 Feb, 2021”',
      },
      timer: '2 hours ago',
    },
    {
      key: 1,
      details: { time: '6h 35 12s', status: 'Till End', date: '23 Feb, 2021', price: '$ 299.49' },
      text: {
        part1: 'Serati_Ma',
        part2: 'has made an offer of',
        part3: '10 HSY',
        part4: 'for your',
        part5: '“23 Feb, 2021”',
      },
      timer: '2 hours ago',
    },
    {
      key: 1,
      details: { time: '6h 35 12s', status: 'Till End', date: '23 Feb, 2021', price: '$ 299.49' },
      text: {
        part1: 'Serati_Ma',
        part2: 'has made an offer of',
        part3: '10 HSY',
        part4: 'for your',
        part5: '“23 Feb, 2021”',
      },
      timer: '2 hours ago',
    },
    {
      key: 1,
      details: { time: '6h 35 12s', status: 'Till End', date: '23 Feb, 2021', price: '$ 299.49' },
      text: {
        part1: 'Serati_Ma',
        part2: 'has made an offer of',
        part3: '10 HSY',
        part4: 'for your',
        part5: '“23 Feb, 2021”',
      },
      timer: '2 hours ago',
    },
    {
      key: 1,
      details: { time: '6h 35 12s', status: 'Till End', date: '23 Feb, 2021', price: '$ 299.49' },
      text: {
        part1: 'Serati_Ma',
        part2: 'has made an offer of',
        part3: '10 HSY',
        part4: 'for your',
        part5: '“23 Feb, 2021”',
      },
      timer: '2 hours ago',
    },
    {
      key: 1,
      details: { time: '6h 35 12s', status: 'Till End', date: '23 Feb, 2021', price: '$ 299.49' },
      text: {
        part1: 'Serati_Ma',
        part2: 'has made an offer of',
        part3: '10 HSY',
        part4: 'for your',
        part5: '“23 Feb, 2021”',
      },
      timer: '2 hours ago',
    },
    {
      key: 1,
      details: { time: '6h 35 12s', status: 'Till End', date: '23 Feb, 2021', price: '$ 299.49' },
      text: {
        part1: 'Serati_Ma',
        part2: 'has made an offer of',
        part3: '10 HSY',
        part4: 'for your',
        part5: '“23 Feb, 2021”',
      },
      timer: '2 hours ago',
    },
    {
      key: 1,
      details: { time: '6h 35 12s', status: 'Till End', date: '23 Feb, 2021', price: '$ 299.49' },
      text: {
        part1: 'Serati_Ma',
        part2: 'has made an offer of',
        part3: '10 HSY',
        part4: 'for your',
        part5: '“23 Feb, 2021”',
      },
      timer: '2 hours ago',
    },
    {
      key: 1,
      details: { time: '6h 35 12s', status: 'Till End', date: '23 Feb, 2021', price: '$ 299.49' },
      text: {
        part1: 'Serati_Ma',
        part2: 'has made an offer of',
        part3: '10 HSY',
        part4: 'for your',
        part5: '“23 Feb, 2021”',
      },
      timer: '2 hours ago',
    },
    {
      key: 1,
      details: { time: '6h 35 12s', status: 'Till End', date: '23 Feb, 2021', price: '$ 299.49' },
      text: {
        part1: 'Serati_Ma',
        part2: 'has made an offer of',
        part3: '10 HSY',
        part4: 'for your',
        part5: '“23 Feb, 2021”',
      },
      timer: '2 hours ago',
    },
  ];

  const NotificationCard = ({ details, text, timer }) => (
    <div className="flex space-x-4">
      <div className="relative p-5 rounded-20 bg-darkGray">
        <Image src="/images/cardPic1.png" width={130} height={136} />
        <div
          className="absolute top-8 left-5 right-5 rounded-6 text-white bg-black
                       bg-opacity-60 flex items-center space-x-1 px-2 py-1"
        >
          <div className="text-14">{details.time}</div>
          <div className="text-12 text-opacity-75">{details.status}</div>
        </div>
        <div
          className="absolute top-21 left-5 right-5 rounded-6 text-white bg-black
                       bg-opacity-60 flex items-center space-x-1 px-2 py-1"
        >
          <div className="text-14">{details.date}</div>
        </div>
        <div
          className="absolute top-30 left-5 right-5 rounded-6 text-white bg-black
                       bg-opacity-60 flex items-center space-x-1 px-2 py-1"
        >
          <div className="text-14">{details.price}</div>
        </div>
      </div>
      <div className="flex flex-col justify-between pt-3 pb-2">
        <div className="text-white">
          <span className="font-bold">{text.part1}</span> {text.part2}
          <span className="font-bold ml-1">{text.part3}</span> <br /> {text.part4}
          <span className="font-bold ml-1">{text.part5}</span>
        </div>
        <div className="text-white text-14 font-light mt-2">{timer}</div>
        <div className="flex space-x-5 mt-5">
          <button className="text-white text-18 font-medium bg-primary rounded-12 w-full h-14">
            Accept
          </button>
          <button
            className="text-lightBlue text-18 font-medium rounded-12 w-full
                           border border-solid border-lightBlue h-14"
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <Layout>
      <div className="flex justify-between items-center">
        <div className="text-20 text-white">Notifications</div>
        <Link href={routes.notifications.settings}>
          <div className="cursor-pointer">
            <Image src="/icons/settings.svg" width={25} height={25} />
          </div>
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-9 mt-11">
        {notificationItems.map((item) => (
          <NotificationCard key={item.key} {...item} />
        ))}
      </div>
    </Layout>
  );
}

export default Notifications;
