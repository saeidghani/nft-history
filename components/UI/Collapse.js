import React, { useState } from 'react';
import Image from 'next/image';

export default function Collapse({ collapsed, title, children }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="border-b border-solid border-fadeLightBlue2 py-4 pr-12">
      <button className="w-full" onClick={() => setIsCollapsed(!isCollapsed)}>
        <div className="flex justify-between items-center w-full">
          <div className="text-white font-medium">{title}</div>
          <div className={`cursor-pointer ${isCollapsed ? 'transform rotate-180' : ''}`}>
            <Image src="/icons/arrowLight.svg" width={22} height={12} />
          </div>
        </div>
      </button>
      <div className={`${isCollapsed ? 'block' : 'hidden'}`} aria-expanded={isCollapsed}>
        {children}
      </div>
    </div>
  );
}
