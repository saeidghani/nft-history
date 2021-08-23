import React, { useState } from 'react';
import Layout from '../../Layout';
import FollowersSearch from '../../components/FollowersSearch';
import FollowStatus from '../../components/FollowStatus';
import { statuses } from '../../constants/FollowersData';

function Followers() {
  const [activeStatus, setActiveStatus] = useState(1);
  const [followingUsers, setFollowingUsers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  const [followerUsers, setFollowerUsers] = useState([2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);

  const handleFollowingClick = (item) => {
    if (followingUsers.includes(item)) {
      const newFollowings = followingUsers.filter((u) => u !== item);
      setFollowingUsers(newFollowings);
    } else {
      setFollowingUsers([...followingUsers, item]);
    }
  };

  const handleFollowersClick = (item) => {
    if (followerUsers.includes(item)) {
      const newFollowers = followerUsers.filter((u) => u !== item);
      setFollowerUsers(newFollowers);
    } else {
      setFollowerUsers([...followerUsers, item]);
    }
  };

  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  return (
    <Layout>
      <div
        className="lg:hidden bg-darkGray2 rounded-18 border border-solid border-fadeWhite1
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
      <div className="lg:hidden mt-6">
        {activeStatus === 2 ? (
          <div className="">
            <div className="text-white text-20 font-medium text-gray3">Following</div>
            <FollowersSearch wrapperClass="mt-7" />
            <div
              className={`flex flex-col space-y-8 overflow-auto mt-8 ${
                items.length > 12 ? 'pr-4' : ''
              }`}
              style={{ height: 1100 }}
            >
              {items.map((i) => (
                <FollowStatus
                  key={i}
                  isFollowing={followingUsers.includes(i)}
                  onClick={() => handleFollowingClick(i)}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="">
            <div className="text-white text-20 font-medium text-gray3">Follower</div>
            <FollowersSearch wrapperClass="mt-7" />
            <div
              className={`flex flex-col space-y-8 overflow-auto mt-8 ${
                items.length > 12 ? 'pr-4' : ''
              }`}
              style={{ height: 1100 }}
            >
              {items.map((i) => (
                <FollowStatus
                  key={i}
                  isFollowing={followerUsers.includes(i)}
                  onClick={() => handleFollowersClick(i)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="hidden lg:grid grid-cols-2 gap-x-8 mt-0">
        <div className="">
          <div className="text-gray3 text-20 font-medium">Following</div>
          <FollowersSearch wrapperClass="pr-4 mt-7" />
          <div
            className={`flex flex-col space-y-8 overflow-auto mt-8 ${
              items.length > 12 ? 'pr-4' : ''
            }`}
            style={{ height: 1100 }}
          >
            {items.map((i) => (
              <FollowStatus
                key={i}
                isFollowing={followingUsers.includes(i)}
                onClick={() => handleFollowingClick(i)}
              />
            ))}
          </div>
        </div>
        <div className="">
          <div className="text-gray3 text-20 font-medium">Follower</div>
          <FollowersSearch wrapperClass="pr-4 mt-7" />
          <div
            className={`flex flex-col space-y-8 overflow-auto mt-8 ${
              items.length > 12 ? 'pr-4' : ''
            }`}
            style={{ height: 1100 }}
          >
            {items.map((i) => (
              <FollowStatus
                key={i}
                isFollowing={followerUsers.includes(i)}
                onClick={() => handleFollowersClick(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Followers;
