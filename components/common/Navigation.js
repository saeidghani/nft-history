import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  HomeIcon,
  AccountIcon,
  DropsIcon,
  MarketPlaceIcon,
  WalletBalanceIcon,
  NotificationsIcon,
  FaqIcon,
} from './Icons';
import routes from '../../constants/routes';
import { useWindowSize } from '../../utils';

function Navigation({ wrapperClass = '', isHome }) {
  const router = useRouter();
  const { pathname } = router;
  const { width } = useWindowSize();

  const findActiveNavItem = (arr) => {
    if (arr.includes(pathname)) return true;
  };

  const navItems = [
    {
      key: 1,
      title: 'Home',
      icon: <HomeIcon fill={findActiveNavItem([routes.home.index]) ? '#fff' : '#B9C0DE'} />,
      href: routes.home.index,
      activeHrefs: [routes.home.index],
    },
    {
      key: 2,
      title: 'Market Place',
      icon: (
        <MarketPlaceIcon
          fill={findActiveNavItem([routes.marketPlace.index]) ? '#fff' : '#B9C0DE'}
        />
      ),
      href: routes.marketPlace.index,
      activeHrefs: [routes.marketPlace.index],
    },
    {
      key: 3,
      title: 'Wallet Balance',
      icon: (
        <WalletBalanceIcon
          fill={
            findActiveNavItem([routes.walletBalance.index, routes.walletBalance.details])
              ? '#fff'
              : '#B9C0DE'
          }
        />
      ),
      href: routes.walletBalance.index,
      activeHrefs: [routes.walletBalance.index, routes.walletBalance.details],
    },
    {
      key: 4,
      title: 'Drops',
      icon: <DropsIcon fill={findActiveNavItem([routes.drops.index]) ? '#fff' : '#B9C0DE'} />,
      href: routes.drops.index,
      activeHrefs: [routes.drops.index],
    },
    {
      key: 5,
      title: 'Account',
      icon: (
        <AccountIcon
          fill={
            findActiveNavItem([routes.account.index, routes.account.followers]) ? '#fff' : '#B9C0DE'
          }
        />
      ),
      href: `${routes.account.index}?isAuth=true&hasProfilePic=true&myProfile=true`,
      activeHrefs: [routes.account.index, routes.account.followers],
    },
    {
      key: 6,
      title: 'Notifications',
      icon: (
        <NotificationsIcon
          fill={findActiveNavItem([routes.notifications.index]) ? '#fff' : '#B9C0DE'}
        />
      ),
      href: routes.notifications.index,
      activeHrefs: [routes.notifications.index],
    },
    {
      key: 7,
      title: 'FAQ',
      icon: <FaqIcon fill={findActiveNavItem([routes.faq]) ? '#fff' : '#B9C0DE'} />,
      href: routes.faq,
      activeHrefs: [routes.faq],
    },
  ];

  return (
    <div className={wrapperClass}>
      <div className={`flex ${isHome ? 'flex-row space-x-10' : 'flex-col space-y-10 mt-15'}`}>
        {navItems?.map((i) =>
          width > 1024 && [6, 7].includes(i.key) ? null : (
            <div
              key={i.key}
              className={`flex justify-between ${isHome ? 'flex-col items-center' : ''}`}
            >
              <Link href={i.href}>
                <div className="flex space-x-2.5 items-center cursor-pointer">
                  <div className={isHome ? 'hidden' : ''}>{i.icon}</div>
                  <div
                    className={`text-15 ${
                      findActiveNavItem(i.activeHrefs) ? 'text-white' : 'text-lightBlue font-light'
                    }`}
                  >
                    {i.title}
                  </div>
                </div>
              </Link>
              {findActiveNavItem(i.activeHrefs) && (
                <div className={`flex justify-center -mb-1 ${isHome ? 'ml-2' : ''}`}>
                  <div
                    className={`bg-primary ${isHome ? 'rounded-b-6' : 'rounded-l-6'}`}
                    style={{ width: isHome ? 30 : 3, height: isHome ? 3 : 30 }}
                  />
                </div>
              )}
            </div>
          ),
        )}
      </div>
    </div>
  );
}

export default Navigation;
