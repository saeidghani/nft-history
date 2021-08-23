import React from 'react';
import Image from 'next/image';

const FollowStatus = ({ isFollowing = true, onClick }) => (
  <div className="flex justify-between items-center">
    <div className="flex space-x-2 xs:space-x-6 items-center">
      <div className="w-15.5 h-15.5 flex justify-center items-center rounded-full">
        <Image src="/images/avatar.png" width={112} height={112} />
      </div>
      <div className="text-white text-16 lg:text-18">Emilie Butler</div>
    </div>
    <button
      className={`text-white font-light rounded-12 w-28 2xs:w-33 h-9.5 ${
        isFollowing ? 'btn-primary' : 'border border-solid border-white'
      }`}
      onClick={onClick}
    >
      {isFollowing ? 'Unfollow' : 'Follow'}
    </button>
  </div>
);

export default FollowStatus;
