import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { twOverride } from '../utils';

function Layout({ children, mainClass, isHome }) {
  return (
    <div className="flex">
      {!isHome && <Sidebar />}
      <div className="w-full relative">
        <Header isHome={isHome} />
        <main
          className={twOverride('pt-8.5 px-4 2xs:px-6 2xl:px-10 pb-11 lg:pb-23', mainClass || '')}
        >
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;
