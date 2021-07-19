import React, { useState } from 'react';
import Image from 'next/image';
import Layout from '../../Layout';

function Followers() {
  const [activeStatus, setActiveStatus] = useState(1);

  const SearchInput = ({ wrapperClass }) => (
    <div className={wrapperClass}>
      <div className="relative w-full">
        <input
          type="text"
          className="text-white bg-white bg-opacity-10 rounded-18 w-full
                    border border-solid border-fadeLightBlue1 h-10.5 pl-12"
          placeholder="Search"
        />
        <div className="absolute left-4 top-2.5">
          <Image src="/icons/magnifier.svg" width={19} height={19} />
        </div>
      </div>
    </div>
  );

  const FollowStatus = ({ isFollowing = true }) => (
    <div className="flex justify-between items-center mt-8">
      <div className="flex space-x-6 items-center">
        <div className="w-15.5 h-15.5 flex justify-center items-center rounded-full">
          <Image src="/images/avatar.png" width={112} height={112} />
        </div>
        <div className="text-white text-18">Emilie Butler</div>
      </div>
      <button
        className={`text-white font-light rounded-12 w-33 h-9.5 ${
          isFollowing ? 'bg-primary' : 'border border-solid border-white'
        }`}
      >
        {isFollowing ? 'Unfollow' : 'Follow'}
      </button>
    </div>
  );

  const statuses = [
    { key: 1, title: 'Followers' },
    { key: 2, title: 'Following' },
  ];

  return (
    <Layout>
      <div
        className="bg-darkGray2 rounded-18 border border-solid border-fadeWhite1
                      flex justify-between items-center py-2 px-3"
      >
        {statuses.map((s) => (
          <div
            key={s.key}
            className={`text-white py-1 px-9 cursor-pointer ${
              s.key === activeStatus ? 'bg-primary rounded-10' : 'text-opacity-40'
            }`}
            onClick={() => setActiveStatus(s.key)}
          >
            {s.title}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 mt-6 lg:mt-0">
        {activeStatus === 2 ? (
          <div className="">
            <div className="text-white text-20 font-medium">Following</div>
            <SearchInput wrapperClass="mt-7" />
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
              <FollowStatus key={i} />
            ))}
          </div>
        ) : (
          <div className="">
            <div className="text-white text-20 font-medium">Follower</div>
            <SearchInput wrapperClass="mt-7" />
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
              <FollowStatus key={i} isFollowing={i !== 1} />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Followers;
