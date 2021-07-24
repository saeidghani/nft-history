import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { filterQuery } from '../../utils';

export default function CategoryTabs() {
  const router = useRouter();
  const { pathname, query } = router;
  const { category, displayCalendar } = query;

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
        className="flex items-center justify-between bg-white bg-opacity-10 rounded-18 border
         border-solid border-fadeLightBlue1 px-2 xs:px-3.5 lg:pl-5.5 lg:pr-3.5 py-2 mt-4.5"
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
        <div
          className="cursor-pointer"
          onClick={() => {
            if (displayCalendar) {
              router.push({ pathname, query: filterQuery(query, 'displayCalendar') });
            } else {
              router.push({ pathname, query: { ...query, displayCalendar: !displayCalendar } });
            }
          }}
        >
          {displayCalendar ? (
            <div className="bg-primary bg-opacity-10 rounded-10 px-4 pt-2 pb-1">
              <Image src="/icons/calendarColorful.svg" width={25} height={22} />
            </div>
          ) : (
            <div className="px-4 pt-2 pb-1">
              <Image src="/icons/calendar.svg" width={25} height={22} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
