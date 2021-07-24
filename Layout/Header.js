import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Navigation from '../components/common/Navigation';
import Drawer from '../components/UI/Drawer';
import Dropdown from '../components/UI/Dropdown';
import routes from '../constants/routes';

function Header() {
  const router = useRouter();
  const { query } = router;
  const { pathname, isAuth } = query;
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [displaySearch, setDisplaySearch] = useState(false);

  const Menu = () => (
    <div className="flex justify-between items-center pt-13 px-6">
      <div className="flex items-center space-x-4">
        <div className="flex justify-center space-x-4">
          <div className="w-7.5">
            <Image src="/icons/logo.svg" width={30} height={30} />
          </div>
          <div className="text-white text-26 font-semibold" style={{ whiteSpace: 'nowrap' }}>
            NFT HISTORY
          </div>
        </div>
        <div className="w-5 cursor-pointer">
          <Image
            onClick={() => setMenuOpen(!menuOpen)}
            src="/icons/arrowDown.svg"
            width={20}
            height={12}
          />
        </div>
      </div>
      <div
        className="w-full flex justify-end cursor-pointer"
        onClick={() => {
          setMenuOpen(false);
          setSearchOpen(true);
        }}
      >
        <Image src="/icons/magnifier.svg" width={25} height={25} />
      </div>
    </div>
  );

  const SearchInput = ({ isSm }) => (
    <div className="relative w-full">
      <input
        type="text"
        className={`text-white bg-white bg-opacity-10 rounded-18 w-full 
                    border border-solid border-fadeLightBlue1 ${
                      isSm ? 'h-9.5 pl-12' : 'h-11.5 pl-14'
                    }`}
        placeholder="Search"
      />
      <div className={`absolute left-4 ${isSm ? 'top-2.5' : 'top-3'}`}>
        <Image src="/icons/magnifier.svg" width={isSm ? 19 : 25} height={isSm ? 19 : 25} />
      </div>
    </div>
  );

  const helpItems = [
    {
      key: 1,
      title: (
        <div className="flex items-center space-x-2">
          <Image src="/icons/magnifier.svg" width={25} height={25} />
          <div className="text-white text-14">Nina Blake</div>
        </div>
      ),
    },
    {
      key: 2,
      title: (
        <div className="flex items-center space-x-2">
          <Image src="/images/avatar.png" width={38} height={38} />
          <div className="text-white text-14">Emilie Butler</div>
        </div>
      ),
    },
    {
      key: 3,
      title: (
        <div className="flex items-center space-x-2">
          <Image src="/images/avatar2.png" width={38} height={38} />
          <div className="text-white text-14">Emilie Bumser</div>
        </div>
      ),
    },
  ];

  const notificationsItems = [
    {
      key: 1,
      title: (
        <div
          className="flex justify-between items-center text-18 bg-white bg-opacity-10 rounded-18
                    h-14 px-4 mt-6.5 w-full"
        >
          <div className="text-white text-18">Notifications</div>
        </div>
      ),
    },
    {
      key: 2,
      title: (
        <div className="text-white pr-8 mt-2">
          Serati Ma has made an offer of 10 HSY for your “Faces” collection
        </div>
      ),
    },
    {
      key: 3,
      title: (
        <div className="text-white pr-8">
          Serati Ma has made an offer of 10 HSY for your “Faces” collection
        </div>
      ),
    },
    {
      key: 4,
      title: (
        <div className="text-white pr-8">
          Serati Ma has made an offer of 10 HSY for your “Faces” collection
        </div>
      ),
    },
    {
      key: 5,
      title: (
        <div className="text-white pr-8">
          Serati Ma has made an offer of 10 HSY for your “Faces” collection
        </div>
      ),
    },
    {
      key: 6,
      title: (
        <Link href={routes.notifications.index}>
          <div className="text-primary font-medium flex justify-center w-full mb-1">
            <div>Show more</div>
          </div>
        </Link>
      ),
    },
  ];

  const logoutItems = [
    {
      key: 1,
      title: (
        <div
          className="cursor-pointer flex items-center"
          onClick={() => router.push({ pathname, query: { isAuth: false } })}
        >
          <Image src="/icons/logoutSwitch.svg" width={31} height={31} />
          <div className="text-white text-18 ml-4">Log Out</div>
        </div>
      ),
    },
  ];

  return (
    <header className="">
      <Drawer drawerOpen={menuOpen} closeDrawer={() => setMenuOpen(false)}>
        <div className="relative bg-darkBlue rounded-b-18 overflow-hidden" style={{ height: 651 }}>
          <Menu />
          <Navigation wrapperClass="px-6 mt-12" />
        </div>
      </Drawer>
      <Drawer drawerOpen={searchOpen} closeDrawer={() => setSearchOpen(false)}>
        <div
          className="flex flex-col justify-between items-center bg-darkBlue
                     rounded-b-18 overflow-hidden pt-12 pb-6 px-6"
          style={{ height: 786 }}
        >
          <SearchInput />
          <div
            className="text-14 text-white font-semibold cursor-pointer
                          border-b border-solid border-white"
            onClick={() => setSearchOpen(false)}
          >
            Cancel
          </div>
        </div>
      </Drawer>
      <div className="hidden lg:flex justify-end items-center w-full px-10 pt-10">
        {!displaySearch ? (
          <Image
            className="cursor-pointer"
            onClick={() => setDisplaySearch(true)}
            src="/icons/magnifier.svg"
            width={25}
            height={25}
          />
        ) : (
          <div className="w-full" style={{ maxWidth: 380 }}>
            <SearchInput isSm />
          </div>
        )}
        <div className="flex justify-between items-center w-full" style={{ maxWidth: 160 }}>
          <div className="w-full flex justify-end">
            <Dropdown
              title={
                <div className="cursor-pointer">
                  <Image src="/icons/help.svg" width={24} height={24} />
                </div>
              }
              items={helpItems}
              width="w-6"
              menuItemClass="justify-start"
              menuItemsClass="pl-4 pb-5 -left-100 -mt-7 w-95"
            />
          </div>
          <div className="w-full flex justify-end">
            <Dropdown
              title={
                <div className="w-full flex justify-end cursor-pointer">
                  <Image src="/icons/bell.svg" width={22} height={25} />
                </div>
              }
              items={notificationsItems}
              width="w-6"
              menuItemClass="justify-start text-left"
              menuItemsClass="-left-130 mt-5 w-95 px-4 w-130 bg-darkGray"
            />
          </div>
          <div className="w-full flex justify-end cursor-pointer pl-3">
            <div className="bg-white bg-opacity-20 rounded-full w-9.5 h-9.5 flex justify-center">
              {isAuth === 'true' ? (
                <Dropdown
                  title={
                    <div className="cursor-pointer">
                      <Image src="/images/avatar.png" width={38} height={38} />
                    </div>
                  }
                  items={logoutItems}
                  width="w-10"
                  menuItemClass="justify-start text-left py-4.5"
                  menuItemsClass="-left-48 mt-8 px-4 w-56 bg-darkGray"
                  onSelect={() => {}}
                />
              ) : (
                <Image src="/icons/user.svg" width={20} height={20} />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <Menu />
      </div>
    </header>
  );
}

export default Header;
