import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function CategoryTabs() {
  const router = useRouter();
  const { pathname, query } = router;
  const { category } = query;

  const categories = [
    { key: 'sport', name: 'Sport' },
    { key: 'art', name: 'Art' },
    { key: 'history', name: 'History' },
    { key: 'personal', name: 'Personal' },
  ];

  return (
    <div>
      <div className="hidden lg:block text-20 text-white">The Premier Marketplace for Dates</div>
      <div
        className="flex items-center justify-between bg-white bg-opacity-10
                   border border-solid border-fadeLightBlue1 rounded-18 px-2 xs:px-3.5 lg:px-5.5 py-2 mt-4.5"
      >
        <div className="flex space-x-0 lg:space-x-6">
          {categories?.map((c) => (
            <Link key={c.key} href={{ pathname, query: { ...query, category: c.key } }}>
              <div
                className={`text-14 lg:text-16 cursor-pointer ${
                  c.key === category
                    ? 'text-primary bg-primary bg-opacity-10 rounded-10 px-2.5 py-2'
                    : 'text-secondary text-opacity-80 px-2.5 py-2'
                }`}
              >
                {c.name}
              </div>
            </Link>
          ))}
        </div>
        <Image src="/icons/calendar.svg" width={25} height={22} />
      </div>
    </div>
  );
}
