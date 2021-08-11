import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../Layout';
import routes from '../../constants/routes';
import PremierMarketplace from '../../components/common/PremierMarketplace';

function Notifications() {
  const [acceptedOffers, setAcceptedOffers] = useState({
    1: 'accept',
    3: 'accept',
    5: 'accept',
    8: 'accept',
    9: 'accept',
    10: 'accept',
    12: 'accept',
  });

  const acceptRejectButtons = [
    { key: 'accept', title: 'Accept' },
    { key: 'reject', title: 'Reject' },
  ];

  const OpenOfferButtons = ({ id, wrapperClass }) => (
    <div className={wrapperClass}>
      <div className="flex space-x-4 xl:space-x-5 mt-5">
        {acceptRejectButtons.map((b) => (
          <button
            key={b.key}
            className={`text-18 font-medium rounded-12 w-full h-14 ${
              acceptedOffers[id] === b.key
                ? 'text-white btn-primary'
                : `text-lightBlue border border-solid border-lightBlue`
            }`}
            onClick={() =>
              setAcceptedOffers({
                ...acceptedOffers,
                [id]:
                  acceptedOffers[id] === acceptRejectButtons[0].key
                    ? acceptRejectButtons[1].key
                    : acceptRejectButtons[0].key,
              })
            }
          >
            {b.title}
          </button>
        ))}
      </div>
    </div>
  );

  const OpenOffer = ({ id, details, text, timer, displayButtons = true }) => (
    <div>
      <div className="flex space-x-4">
        <div className="relative p-5 rounded-20 bg-darkGray">
          <div style={{ width: 130 }}>
            <Image src="/images/cardPic2.png" width={130} height={136} />
          </div>
          <div
            className="absolute top-8 left-5 right-5 rounded-6 text-white bg-black
                       bg-opacity-60 flex items-center space-x-1 px-2 py-1"
          >
            <div className="text-14">{details?.time}</div>
            <div className="text-12 text-opacity-75">{details?.status}</div>
          </div>
          <div
            className="absolute top-21 left-5 right-5 rounded-6 text-white bg-black
                       bg-opacity-60 flex items-center space-x-1 px-2 py-1"
          >
            <div className="text-14">{details?.date}</div>
          </div>
          <div
            className="absolute top-30 left-5 right-5 rounded-6 text-white bg-black
                       bg-opacity-60 flex items-center space-x-1 px-2 py-1"
          >
            <div className="text-14">{details?.price}</div>
          </div>
        </div>
        <div className="flex flex-col justify-between w-full pt-3 pb-2" style={{ maxWidth: 336 }}>
          <div className="">
            <div className="text-white">
              <span className="font-bold mr-1">{text?.offeror}</span>
              {text?.rejected ? (
                <span className="">has rejected your offer of</span>
              ) : (
                <span className="">has made an offer of</span>
              )}
              <span className="font-bold ml-1">{text?.price}</span> <br />
              {text?.rejected ? <span className="">for</span> : <span className="">for your</span>}
              <span className="font-bold ml-1">{text?.date}</span>
            </div>
            <div className="text-white text-14 font-light mt-2">{timer}</div>
          </div>
          {displayButtons && <OpenOfferButtons wrapperClass="hidden xl:block" id={id} />}
        </div>
      </div>
      {displayButtons && <OpenOfferButtons wrapperClass="xl:hidden" id={id} />}
    </div>
  );

  const EndedAuction = ({ details, text, timer }) => (
    <div>
      <div className="flex space-x-4">
        <div className="relative p-5 rounded-20 bg-darkGray">
          <div style={{ width: 130 }}>
            <Image src="/images/cardPic2.png" width={130} height={136} />
          </div>
          <div
            className="absolute top-21 left-5 right-5 rounded-6 text-white bg-black
                       bg-opacity-60 flex items-center space-x-1 px-2 py-1"
          >
            <div className="text-14">{details?.date}</div>
          </div>
          <div
            className="absolute top-30 left-5 right-5 rounded-6 text-white bg-black
                       bg-opacity-60 flex items-center space-x-1 px-2 py-1"
          >
            <div className="text-14">{details?.price}</div>
          </div>
        </div>
        <div className="flex flex-col justify-between w-full pt-3 pb-2">
          <div className="text-white">
            Congratulations you have won the <br /> auction. please claim your nft. <br />
            <span className="font-bold mx-1">{text?.date}</span> for
            <span className="font-bold ml-1">{text?.price}</span>
          </div>
          <div className="text-white text-14 font-light mt-1">{timer}</div>
          <button
            className="hidden xl:block text-white text-18 font-medium btn-primary rounded-12 w-full h-14"
            style={{ maxWidth: 332 }}
          >
            Claim
          </button>
        </div>
      </div>
      <button
        className="xl:hidden text-white text-18 font-medium btn-primary rounded-12 w-full h-14 mt-4"
        style={{ maxWidth: 332 }}
      >
        Claim
      </button>
    </div>
  );

  const notificationItems = [
    {
      key: 1,
      // eslint-disable-next-line react/display-name
      renderContent: (key, content) => <OpenOffer id={key} {...content} />,
      content: {
        details: { time: '6h 35 12s', status: 'Till End', date: '23 Feb, 2021', price: '$ 299.49' },
        text: {
          offeror: 'Serati_Ma',
          price: '10 HSY',
          date: '“23 Feb, 2021”',
        },
        timer: '2 hours ago',
      },
    },
    {
      key: 2,
      // eslint-disable-next-line react/display-name
      renderContent: (key, content) => <EndedAuction id={key} {...content} />,
      content: {
        details: { date: '23 Feb, 2021', price: '$ 299.49' },
        text: {
          price: '10 HSY',
          date: '“23 Feb, 2021”',
        },
        timer: '2 hours ago',
      },
    },
    {
      key: 3,
      // eslint-disable-next-line react/display-name
      renderContent: (key, content) => <OpenOffer id={key} {...content} />,
      content: {
        details: { time: '6h 35 12s', status: 'Till End', date: '23 Feb, 2021', price: '$ 299.49' },
        text: {
          offeror: 'Serati_Ma',
          price: '10 HSY',
          date: '“23 Feb, 2021”',
        },
        timer: '2 hours ago',
      },
    },
    {
      key: 4,
      // eslint-disable-next-line react/display-name
      renderContent: (key, content) => <OpenOffer id={key} {...content} />,
      content: {
        details: { time: '6h 35 12s', status: 'Till End', date: '23 Feb, 2021', price: '$ 299.49' },
        text: {
          offeror: 'Serati_Ma',
          price: '10 HSY',
          date: '“23 Feb, 2021”',
        },
        timer: '2 hours ago',
        displayButtons: false,
      },
    },
    {
      key: 5,
      // eslint-disable-next-line react/display-name
      renderContent: (key, content) => <OpenOffer id={key} {...content} />,
      content: {
        details: { time: '6h 35 12s', status: 'Till End', date: '24 May, 2021', price: '$ 299.49' },
        text: {
          offeror: 'Serati_Ma',
          price: '20 HSY',
          date: '“24 May, 2021”',
        },
        timer: '6 hours ago',
      },
    },
    {
      key: 6,
      // eslint-disable-next-line react/display-name
      renderContent: (key, content) => <OpenOffer id={key} {...content} />,
      content: {
        details: { time: '6h 35 12s', status: 'Till End', date: '23 Feb, 2021', price: '$ 299.49' },
        text: {
          offeror: 'Serati_Ma',
          price: '10 HSY',
          date: '“23 Feb, 2021”',
        },
        timer: '2 hours ago',
        displayButtons: false,
      },
    },
    {
      key: 7,
      // eslint-disable-next-line react/display-name
      renderContent: (key, content) => <OpenOffer id={key} {...content} />,
      content: {
        details: { time: '6h 35 12s', status: 'Till End', date: '23 Feb, 2021', price: '$ 299.49' },
        text: {
          offeror: 'Serati_Ma',
          price: '10 HSY',
          date: '“23 Feb, 2021”',
          rejected: true,
        },
        timer: '2 hours ago',
        displayButtons: false,
      },
    },
    {
      key: 8,
      // eslint-disable-next-line react/display-name
      renderContent: (key, content) => <OpenOffer id={key} {...content} />,
      content: {
        details: { time: '6h 35 12s', status: 'Till End', date: '23 Feb, 2021', price: '$ 299.49' },
        text: {
          offeror: 'Jenny.Wilson',
          price: '10 HSY',
          date: '“24 May, 2021”',
        },
        timer: '6 hours ago',
      },
    },
    {
      key: 9,
      // eslint-disable-next-line react/display-name
      renderContent: (key, content) => <OpenOffer id={key} {...content} />,
      content: {
        details: { time: '6h 35 12s', status: 'Till End', date: '23 Feb, 2021', price: '$ 299.49' },
        text: {
          offeror: 'Jenny.Wilson',
          price: '10 HSY',
          date: '“24 May, 2021”',
        },
        timer: '6 hours ago',
      },
    },
    {
      key: 10,
      // eslint-disable-next-line react/display-name
      renderContent: (key, content) => <OpenOffer id={key} {...content} />,
      content: {
        details: { time: '6h 35 12s', status: 'Till End', date: '23 Feb, 2021', price: '$ 299.49' },
        text: {
          offeror: 'Jenny.Wilson',
          price: '10 HSY',
          date: '“24 May, 2021”',
        },
        timer: '6 hours ago',
      },
    },
    {
      key: 11,
      // eslint-disable-next-line react/display-name
      renderContent: (key, content) => <OpenOffer id={key} {...content} />,
      content: {
        details: { time: '6h 35 12s', status: 'Till End', date: '23 Feb, 2021', price: '$ 299.49' },
        text: {
          offeror: 'Jenny.Wilson',
          price: '10 HSY',
          date: '“24 May, 2021”',
          rejected: true,
        },
        timer: '6 hours ago',
        displayButtons: false,
      },
    },
    {
      key: 12,
      // eslint-disable-next-line react/display-name
      renderContent: (key, content) => <OpenOffer id={key} {...content} />,
      content: {
        details: { time: '6h 35 12s', status: 'Till End', date: '23 Feb, 2021', price: '$ 299.49' },
        text: {
          offeror: 'Jenny.Wilson',
          price: '10 HSY',
          date: '“24 May, 2021”',
        },
        timer: '6 hours ago',
      },
    },
  ];

  return (
    <Layout>
      <div className="hidden xl:flex justify-between items-center">
        <div className="text-20 text-white">Notifications</div>
        <Link href={routes.notifications.settings}>
          <div className="cursor-pointer">
            <Image src="/icons/settings.svg" width={25} height={25} />
          </div>
        </Link>
      </div>
      <div className="block xl:hidden">
        <PremierMarketplace />
      </div>
      <div className="flex justify-center xl:justify-start mt-6 xl:mt-11">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-9">
          {notificationItems.map(({ key, renderContent, content }) => (
            <div key={key}>{renderContent(key, content)}</div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Notifications;
