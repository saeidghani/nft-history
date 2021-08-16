import React from 'react';
import Image from 'next/image';
import { CommentIcon, LikeIcon, StarIcon } from './Icons';
import routes from '../../constants/routes';
import { useRouter } from 'next/router';

function BidCard({
  wrapperClass = '',
  calendar,
  status,
  date,
  price,
  timer,
  fixedPriceDate,
  id,
  comments,
  currentLikes,
  likeIsFilled,
  currentStars,
  starIsFilled,
  onStarClick,
  onLikeClick,
}) {
  const router = useRouter();

  return (
    <div className={wrapperClass}>
      <div
        className={`flex flex-col bg-darkGray rounded-20 pb-4 px-5 cursor-pointer mx-9 sm:mx-0 ${
          calendar && timer ? 'pt-3' : 'pt-5'
        }`}
        onClick={() => router.push(routes.auctions.view(id))}
      >
        <div className="relative flex flex-col items-center w-full" style={{ height: 218 }}>
          {calendar ? (
            <div
              className={`flex flex-col items-center w-full ${
                calendar && timer ? 'mt-10' : 'mt-3.5'
              }`}
              style={{ height: 182 }}
            >
              <div
                className="text-primary text-center text-28 font-bold bg-white w-full rounded-t-20
                         border border-solid border-white"
                style={{ height: 50 }}
              >
                {calendar.month}
              </div>
              <div
                className="text-white text-center text-96 font-light rounded-b-20 w-full
                          border border-solid border-white"
              >
                {calendar.day}
              </div>
            </div>
          ) : (
            <div className="relative" style={{ width: '100%', height: 218 }}>
              <Image src="/images/cardPic1.png" layout="fill" />
            </div>
          )}
          {timer && (
            <div
              className="absolute top-1.5 right-1.5 flex items-center space-x-1 rounded-6
                     bg-black bg-opacity-60 text-white px-1 py-0.5"
            >
              <div className="text-14 text-white">{timer.hour}h</div>
              <div className="text-14 text-white">{timer.minute}m</div>
              <div className="text-14 text-white">{timer.second}s</div>
              <div className="text-12 text-white text-opacity-60">{timer.status}</div>
            </div>
          )}
        </div>
        <div className="">
          <div
            className={`text-14 text-white opacity-60 font-light ${
              timer && calendar ? 'mt-5' : 'mt-3'
            }`}
          >
            {status}
          </div>
          <div className={`flex justify-between ${timer && calendar ? 'mt-2' : 'mt-3'}`}>
            <div className="text-white">{date}</div>
            <div className="text-white font-medium">{price}</div>
          </div>
          <div
            className={`flex justify-between items-center text-white text-12 font-light h-8 ${
              fixedPriceDate ? 'opacity-1' : 'opacity-0'
            }`}
          >
            <div className="">
              {fixedPriceDate?.date1},{fixedPriceDate?.date2},{fixedPriceDate?.date3}
            </div>
            <div className="border-b border-solid border-white">More</div>
          </div>
          <div className="flex justify-between border-t border-solid border-fadeWhite1">
            <div
              className="flex items-center space-x-1 pt-3 px-1"
              onClick={(e) => {
                e.stopPropagation();
                onStarClick();
              }}
            >
              <StarIcon fill={starIsFilled ? '#fff' : 'transparent'} />
              <div className="text-white opacity-80 text-12">{currentStars}</div>
            </div>
            <div
              className="flex items-center space-x-1 pt-3 px-1"
              onClick={(e) => e.stopPropagation()}
            >
              <CommentIcon />
              <div className="text-white opacity-80 text-12">{comments}</div>
            </div>
            <div
              className="flex items-center space-x-1 pt-3 px-1"
              onClick={(e) => {
                e.stopPropagation();
                onLikeClick();
              }}
            >
              <LikeIcon fill={likeIsFilled ? '#fff' : 'transparent'} />
              <div className="text-white opacity-80 text-12">{currentLikes}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BidCard;
