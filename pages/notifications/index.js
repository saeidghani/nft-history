import React, { useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../Layout';
import routes from '../../constants/routes';
import PremierMarketplace from '../../components/common/PremierMarketplace';
import NotificationOffer from '../../components/NotifictionOffer';
import NotificationAuction from '../../components/NotificationOffer';

function Notifications() {
  const notificationItems = useMemo(
    () => [
      {
        key: 1,
        // eslint-disable-next-line react/display-name
        renderContent: (key, content) => <NotificationOffer id={key} {...content} />,
        content: {
          details: {
            time: '6h 35 12s',
            status: 'Till End',
            date: '23 Feb, 2021',
            price: '$ 299.49',
          },
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
        renderContent: (key, content) => <NotificationAuction id={key} {...content} />,
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
        renderContent: (key, content) => <NotificationOffer id={key} {...content} />,
        content: {
          details: {
            time: '6h 35 12s',
            status: 'Till End',
            date: '23 Feb, 2021',
            price: '$ 299.49',
          },
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
        renderContent: (key, content) => <NotificationOffer id={key} {...content} />,
        content: {
          details: {
            time: '6h 35 12s',
            status: 'Till End',
            date: '23 Feb, 2021',
            price: '$ 299.49',
          },
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
        renderContent: (key, content) => <NotificationOffer id={key} {...content} />,
        content: {
          details: {
            time: '6h 35 12s',
            status: 'Till End',
            date: '24 May, 2021',
            price: '$ 299.49',
          },
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
        renderContent: (key, content) => <NotificationOffer id={key} {...content} />,
        content: {
          details: {
            time: '6h 35 12s',
            status: 'Till End',
            date: '23 Feb, 2021',
            price: '$ 299.49',
          },
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
        renderContent: (key, content) => <NotificationOffer id={key} {...content} />,
        content: {
          details: {
            time: '6h 35 12s',
            status: 'Till End',
            date: '23 Feb, 2021',
            price: '$ 299.49',
          },
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
        renderContent: (key, content) => <NotificationOffer id={key} {...content} />,
        content: {
          details: {
            time: '6h 35 12s',
            status: 'Till End',
            date: '23 Feb, 2021',
            price: '$ 299.49',
          },
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
        renderContent: (key, content) => <NotificationOffer id={key} {...content} />,
        content: {
          details: {
            time: '6h 35 12s',
            status: 'Till End',
            date: '23 Feb, 2021',
            price: '$ 299.49',
          },
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
        renderContent: (key, content) => <NotificationOffer id={key} {...content} />,
        content: {
          details: {
            time: '6h 35 12s',
            status: 'Till End',
            date: '23 Feb, 2021',
            price: '$ 299.49',
          },
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
        renderContent: (key, content) => <NotificationOffer id={key} {...content} />,
        content: {
          details: {
            time: '6h 35 12s',
            status: 'Till End',
            date: '23 Feb, 2021',
            price: '$ 299.49',
          },
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
        renderContent: (key, content) => <NotificationOffer id={key} {...content} />,
        content: {
          details: {
            time: '6h 35 12s',
            status: 'Till End',
            date: '23 Feb, 2021',
            price: '$ 299.49',
          },
          text: {
            offeror: 'Jenny.Wilson',
            price: '10 HSY',
            date: '“24 May, 2021”',
          },
          timer: '6 hours ago',
        },
      },
    ],
    [],
  );

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
