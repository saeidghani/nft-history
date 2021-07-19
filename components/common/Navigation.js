import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { HomeIcon, AccountIcon, DropsIcon, MarketPlaceIcon, WalletBalanceIcon } from '../icons';
import routes from '../../constants/routes';

function Navigation({ wrapperClass = '' }) {
  const router = useRouter();
  const { pathname } = router;

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
      href: routes.account.index,
      activeHrefs: [routes.account.index, routes.account.followers],
    },
  ];

  return (
    <div className={wrapperClass}>
      <div className="flex flex-col space-y-10 mt-15">
        {navItems?.map((i) => (
          <div key={i.key} className="flex justify-between">
            <Link href={i.href}>
              <div className="flex space-x-2.5 items-center cursor-pointer">
                <div>{i.icon}</div>
                <div
                  className={`text-15 font-semibold ${
                    findActiveNavItem(i.activeHrefs) ? 'text-white' : 'text-lightBlue'
                  }`}
                >
                  {i.title}
                </div>
              </div>
            </Link>
            {findActiveNavItem(i.activeHrefs) && (
              <div className="flex justify-center -mb-1">
                <div className="bg-primary rounded-l-6" style={{ width: 3, height: 30 }} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Navigation;
