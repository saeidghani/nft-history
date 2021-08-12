import React from 'react';
import Image from 'next/image';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Link from 'next/link';
import routes from '../../constants/routes';
import { useRouter } from 'next/router';

function ProfileSummary({
  filterItems,
  activeFilter,
  onSetActiveFilter,
  displayCategories = true,
  wrapperClass,
}) {
  const router = useRouter();
  const { pathname, query } = router;
  const { hasProfilePic, myProfile, follows } = query;

  return (
    <div className={wrapperClass}>
      <div className="flex justify-between ">
        <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-3">
          {hasProfilePic ? (
            <div className="w-23 h-23 flex justify-center items-center rounded-full">
              <Image src="/images/avatar.png" width={112} height={112} />
            </div>
          ) : (
            <div
              className="w-23 h-23 flex justify-center items-center rounded-full
                       bg-white bg-opacity-20"
            >
              <Image src="/icons/user.svg" width={54} height={54} />
            </div>
          )}
          <div className="flex flex-col mt-4">
            <div className="text-white text-18 font-medium">Emilie Butler</div>
            <div className="text-white text-14 font-light mt-2">The future is coming.</div>
            <div className="flex mt-1">
              <div className="text-white text-14 font-light mr-2">0x4A34639...5a81</div>
              <CopyToClipboard text="0x4A34639...5a81">
                <div className="cursor-pointer">
                  <Image src="/icons/walletAddress.svg" width={18} height={18} />
                </div>
              </CopyToClipboard>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end">
          {myProfile && (
            <div className="order-2 lg:order-1 flex mt-10 lg:mt-0">
              <Link href={routes.account.edit}>
                <div className={`cursor-pointer ${hasProfilePic ? '' : 'mr-4'}`}>
                  <Image src="/icons/edit.svg" width={30} height={30} />
                </div>
              </Link>
              {!hasProfilePic && (
                <Link href={routes.account.followers}>
                  <div className="cursor-pointer">
                    <Image src="/icons/dots.svg" width={30} height={30} />
                  </div>
                </Link>
              )}
            </div>
          )}
          {hasProfilePic && (
            <div className="order-1 lg:order-2 flex space-x-4 mt-3">
              <Link href={routes.account.followers}>
                <div className="flex flex-col items-center cursor-pointer">
                  <div className="text-gray3 text-14 font-light">Following</div>
                  <div className="text-white text-18">2,233</div>
                </div>
              </Link>
              <Link href={routes.account.followers}>
                <div className="flex flex-col items-center cursor-pointer">
                  <div className="text-gray3 text-14 font-light">Followers</div>
                  <div className="text-white text-18">2,233</div>
                </div>
              </Link>
            </div>
          )}
          {!myProfile && (
            <button
              className={`order-1 rounded-12 font-light mt-13 lg:mt-0 mb-0 lg:mb-3 rounded-12
                              text-white border border-solid w-33 h-9.5 ${
                                follows === 'true'
                                  ? 'btn-primary border-transparent'
                                  : 'border-white'
                              }`}
              onClick={() =>
                router.push({ pathname, query: { ...query, follows: follows !== 'true' } })
              }
            >
              {follows === 'true' ? 'Unfollow' : 'Follow'}
            </button>
          )}
        </div>
      </div>
      {displayCategories && (
        <div
          className="flex lg:hidden justify-between rounded-18 bg-darkGray2
                       border border-solid border-fadeLightBlue1 py-1.5 px-4 2xs:px-6 mt-7"
        >
          {filterItems.map((i) => (
            <div
              key={i.key}
              className={`rounded-10 p-2 ${
                i.key === activeFilter.key ? 'text-white bg-primary' : 'text-white text-opacity-40'
              }`}
              onClick={() => onSetActiveFilter(i)}
            >
              {i.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProfileSummary;
