import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { HomeIcon, AccountIcon, DropsIcon, MarketPlaceIcon, WalletBalanceIcon } from '../icons';
import routes from '../../constants/routes';

function Navigation({ wrapperClass = '' }) {
  const router = useRouter();
  const { pathname } = router;
  console.log(pathname);

  const sidebarItems = [
    {
      key: 1,
      title: 'Home',
      icon: <HomeIcon fill={pathname === routes.home.index ? '#fff' : '#B9C0DE'} />,
      href: routes.home.index,
    },
    {
      key: 2,
      title: 'Market Place',
      icon: <MarketPlaceIcon fill={pathname === routes.marketPlace.index ? '#fff' : '#B9C0DE'} />,
      href: routes.marketPlace.index,
    },
    {
      key: 3,
      title: 'Wallet Balance',
      icon: (
        <WalletBalanceIcon fill={pathname === routes.walletBalance.index ? '#fff' : '#B9C0DE'} />
      ),
      href: routes.walletBalance.index,
    },
    {
      key: 4,
      title: 'Drops',
      icon: <DropsIcon fill={pathname === routes.drops.index ? '#fff' : '#B9C0DE'} />,
      href: routes.drops.index,
    },
    {
      key: 5,
      title: 'Account',
      icon: <AccountIcon fill={pathname === routes.account.index ? '#fff' : '#B9C0DE'} />,
      href: routes.account.index,
    },
  ];

  return (
    <div className={wrapperClass}>
      <div className="flex flex-col space-y-10 mt-15">
        {sidebarItems?.map((i) => (
          <div key={i.key} className="flex justify-between">
            <Link href={i.href}>
              <div className="flex space-x-2.5 cursor-pointer">
                <div>{i.icon}</div>
                <div
                  className={`text-15 font-semibold ${
                    pathname === i.href ? 'text-white' : 'text-lightBlue'
                  }`}
                >
                  {i.title}
                </div>
              </div>
            </Link>
            {pathname === i.href && (
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
