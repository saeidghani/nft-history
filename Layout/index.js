import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

function Main({ children, mainClass }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full relative">
        <Header />
        <main className={`pt-8.5 px-10 pb-23 ${mainClass}`}>{children}</main>
      </div>
    </div>
  );
}

export default Main;
