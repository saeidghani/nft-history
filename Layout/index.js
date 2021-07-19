import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { twOverride } from '../utils';

function Main({ children, mainClass }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full relative">
        <Header />
        <main className={twOverride('pt-8.5 px-4 2xs:px-6 2xl:px-10 pb-11 lg:pb-23', mainClass)}>
          {children}
        </main>
      </div>
    </div>
  );
}

export default Main;
