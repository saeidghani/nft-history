import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../Layout';
import routes from '../../constants/routes';
import PlaceBidModal from './PlaceBidModal';
import ConfirmBidModal from './ConfirmBidModal';
import CancelAuctionModal from './CancelAuctionModal';
import MakeOfferModal from './MakeOfferModal';
import UploadModal from './UploadModal';

function Auctions() {
  const [activeDetail, setActiveDetail] = useState('comments');
  const [placeABidOpen, setPlaceABidOpen] = useState(false);
  const [confirmABidOpen, setConfirmABidOpen] = useState(false);
  const [cancelAuctionOpen, setCancelAuctionOpen] = useState(false);
  const [makeOfferOpen, setMakeOfferOpen] = useState(false);
  const [uploadOpen, setUploadOpen] = useState(true);

  const router = useRouter();
  const { query } = router;

  const {
    auctionNotStarted,
    auctionStarted,
    auctionEnded,
    fixedPrice,
    onSale,
    auctionWon,
    dateNotAssigned,
    collection,
    cancel,
    id,
  } = query;

  const historyItems = [
    { key: 1, src: '/images/avatar3.png' },
    { key: 2, src: '/images/avatar4.png' },
    { key: 3, src: '/images/avatar5.png' },
    { key: 4, src: '/images/avatar6.png' },
    { key: 5, src: '/images/avatar.png' },
    { key: 6, src: '/images/avatar4.png' },
  ];

  const detailItems = [
    { key: 1, src: '/images/avatar3.png' },
    { key: 2, src: '/images/avatar4.png' },
    { key: 3, src: '/images/avatar5.png' },
    { key: 4, src: '/images/avatar6.png' },
  ];

  const details = [
    { key: 'comments', title: 'Comments(197)' },
    { key: 'likes', title: 'Likes(20)' },
  ];

  const Poster = () => (
    <div
      className={`order-1 bg-darkGray rounded-20 w-full lg:h-482px ${
        dateNotAssigned || auctionWon ? '' : 'p-4 lg:p-6.5'
      }`}
    >
      <div className="relative w-full h-full">
        {dateNotAssigned || auctionWon ? (
          <div className={`flex flex-col items-center w-full h-482px`}>
            <div
              className="text-primary text-center text-48 flex justify-center items-center font-bold
                         bg-white w-full rounded-t-20 border border-solid border-white h-130px"
            >
              FEB
            </div>
            <div
              className="flex justify-center items-center text-white text-center text-146
                         font-light rounded-b-20 w-full h-full border border-solid border-white"
            >
              23
            </div>
          </div>
        ) : collection ? (
          <div className="flex justify-center items-center bg-white rounded-10 h-full px-4 py-12 lg:p-0">
            <div>
              <div className="flex justify-between">
                <div className="text-48 lg:text-84 font-Ubuntu mr-6 mt-2">SPORT</div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/icons/sport.svg" className="w-15 lg:w-24 mr-4" />
              </div>
              <div className="text-48 lg:text-84 font-Ubuntu" style={{ letterSpacing: 15 }}>
                EVENTS
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center h-full">
            {/* eslint-disable-next-line @next/next/no-img-element*/}
            <img src="/images/poster1.png" className="object-cover h-full" />
          </div>
        )}
        <div
          className={`absolute left-4 right-4 flex justify-between items-center ${
            dateNotAssigned || auctionWon ? 'bottom-10' : 'bottom-6 lg:bottom-10'
          }`}
        >
          {!auctionWon && (
            <>
              <div className="rounded-6 flex space-x-1 text-white bg-black bg-opacity-50 px-1">
                <div className="">Token ID:</div>
                <div className="">20600010973</div>
              </div>
              <div
                className="flex space-x-1 items-center
                        rounded-6 bg-black bg-opacity-60 px-2 py-1"
              >
                <Image src="/icons/like.svg" width={18} height={16} />
                <div className="text-white text-12 text-opacity-75">20</div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );

  const Offer = () => (
    <div
      className="order-3 lg:order-2 flex flex-col justify-between bg-darkGray rounded-20
                    lg:h-482px p-4 lg:p-6.5"
    >
      <div>
        <div className="flex justify-between items-center bg-white bg-opacity-10 rounded-18 p-4">
          <div className="text-white text-18">{collection ? 'Sport Events' : '23 Feb, 2021'}</div>
          {(collection || auctionStarted || auctionWon) && (
            <div className="flex items-center">
              <div className="flex space-x-2 lg:space-x-4.5 mr-1">
                <div className="text-white text-15 lg:text-18">6h</div>
                <div className="text-white text-15 lg:text-18">35m</div>
                <div className="text-white text-15 lg:text-18">12s</div>
              </div>
              <div className="text-white text-opacity-70 text-12 lg:text-14 font-light">
                Till End
              </div>
            </div>
          )}
          {auctionNotStarted && (
            <div className="flex items-center">
              <div className="flex space-x-2 lg:space-x-4.5 mr-1">
                <div className="text-white text-15 lg:text-18">56h</div>
                <div className="text-white text-15 lg:text-18">35m</div>
                <div className="text-white text-15 lg:text-18">12s</div>
              </div>
              <div className="text-white text-opacity-70 text-12 lg:text-14 font-light">
                To Start
              </div>
            </div>
          )}
          {(auctionEnded || dateNotAssigned) && (
            <div className="text-white text-opacity-70 text-12 lg:text-14 font-light">
              Auction Ended
            </div>
          )}
        </div>
        {collection ? (
          <div className="text-white mt-6">
            <span className="font-medium mr-1">Sport Events</span>
            <span className="text-14 font-light">(collection)</span>
          </div>
        ) : auctionWon ? (
          <div className="text-white font-medium mt-6">Token ID: 20600010973</div>
        ) : (onSale && auctionEnded) || dateNotAssigned ? (
          <div className="text-white font-medium mt-6">Day Name</div>
        ) : (
          <div className={`text-white font-medium ${auctionNotStarted ? 'mt-3' : 'mt-6'}`}>
            Day of Me
          </div>
        )}
        {collection ? (
          <div className="text-white mt-1.5">
            <p>
              Contains: 23 Feb, 2021 & 23 Feb, 2021 & 23 Feb, 2021 23 Feb, 2021 & 23 Feb, 2021 & 23
              Feb, 2021
            </p>
            <p>
              “Not everything that is faced can be changed, but nothing can be changed until it is
              faced.”
            </p>
          </div>
        ) : (
          <p className="text-white mt-1.5">
            “Not everything that is faced can be changed, but nothing can be changed until it is
            faced.” Detail of a forgotten relic, broken off from the source and lost from memory.
          </p>
        )}
        {!collection && (auctionStarted || auctionNotStarted || auctionEnded || fixedPrice) && (
          <div
            className="font-medium text-primary text-left flex justify-center
                      bg-primary bg-opacity-10 rounded-10 mt-2.5 py-1 w-16"
          >
            Sport
          </div>
        )}
      </div>
      <div>
        {(auctionStarted || auctionNotStarted || auctionEnded || auctionWon || fixedPrice) && (
          <>
            <div className="flex justify-between items-center mt-1">
              <div className="text-white font-medium ">
                {auctionStarted
                  ? 'Current Bid'
                  : auctionNotStarted
                  ? 'Minimum Bid:'
                  : fixedPrice
                  ? 'Price'
                  : auctionWon
                  ? 'Winner Bid'
                  : 'Sold For:'}
              </div>
              <div className="text-white font-medium">
                {auctionWon ? '3,600 HSY' : '299.49 HSY'}
              </div>
            </div>
            {(auctionStarted || auctionNotStarted) && (
              <div className="text-white text-12 text-opacity-80 font-light mt-3">
                You must at least bis 10% higher than current bid.
              </div>
            )}
            {!auctionWon && !fixedPrice && !dateNotAssigned && (
              <div className="relative mt-5">
                <input
                  className="text-white bg-transparent rounded-12 border border-solid border-lightBlue
                          h-14 w-full px-16"
                />
                <div className="absolute top-4 left-4 text-white text-18 text-opacity-80 font-light">
                  0.00$
                </div>
                <div className="absolute top-4 right-4 text-white text-18 font-light">0 HSY</div>
              </div>
            )}
          </>
        )}
        <div className="flex items-center space-x-3 lg:space-x-6.5 mt-5">
          <button
            className={`bg-primary text-white text-18 font-medium rounded-12 w-full h-14 ${
              auctionNotStarted ? 'opacity-40 cursor-not-allowed' : ''
            }`}
            onClick={() => {
              if (auctionStarted) {
                setPlaceABidOpen(true);
              } else if (onSale && cancel) {
                setCancelAuctionOpen(true);
              } else if (!onSale && auctionEnded) {
                setMakeOfferOpen(true);
              } else if (fixedPrice) {
              } else if (onSale && auctionEnded) {
              } else if (auctionWon) {
              } else {
              }
            }}
          >
            {auctionNotStarted || auctionStarted
              ? 'Place a Bid'
              : onSale && cancel
              ? 'Cancel Auction'
              : fixedPrice
              ? 'Buy Now'
              : !onSale && auctionEnded
              ? 'Make an Offer'
              : auctionWon
              ? 'Claim'
              : 'Put on Sale'}
          </button>
          <div className="flex items-center space-x-3 lg:space-x-6.5">
            {onSale && !cancel && (
              <Link href={routes.auctions.edit(id)}>
                <div
                  className="h-14 w-14 rounded-18 flex justify-center items-center
                        border border-solid border-lightBlue cursor-pointer"
                >
                  <Image src="/icons/editPencil.svg" width={26} height={28} />
                </div>
              </Link>
            )}
            <div
              className="h-14 w-14 rounded-18 flex justify-center items-center
                        border border-solid border-lightBlue cursor-pointer"
              onClick={() => setUploadOpen(true)}
            >
              <Image src="/icons/switch.svg" width={26} height={26} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const Details = () => (
    <div className="order-2 lg:order-3 bg-darkGray rounded-20 py-6.5 overflow-hidden lg:h-549px">
      <div
        className="flex items-center space-x-6 bg-white bg-opacity-10 rounded-18 px-4 mx-6.5"
        style={{ height: 58 }}
      >
        {details.map((d) => (
          <div
            key={d.key}
            className={`text-white font-medium py-2 px-3 cursor-pointer ${
              d.key === activeDetail ? 'bg-white bg-opacity-10 rounded-10' : ''
            }`}
            onClick={() => setActiveDetail(d.key)}
          >
            {d.title}
          </div>
        ))}
      </div>
      <div className="hidden lg:flex flex-col mt-6.5 overflow-auto ml-6.5 mr-4.5 pr-2 h-330px">
        {detailItems.map((i, index) => (
          <div
            key={i.key}
            className={`flex space-x-3.5 border-b border-solid pt-4 pb-2 ${
              index === historyItems.length - 1 ? 'border-transparent' : 'border-fadeLightBlue4'
            }`}
          >
            <div>
              <Image src={i.src} width={48} height={48} />
            </div>
            <div className="">
              <div className="text-14 text-white font-medium">artecsteam</div>
              <div className="text-14 text-white font-medium mt-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="hidden lg:block relative mt-5 mx-6.5">
        <input
          placeholder="Put a Comment"
          className="text-white bg-transparent rounded-12 border border-solid border-lightBlue
                          h-14 w-full pl-4 pr-16"
        />
        <div className="absolute top-4 right-4 text-white text-18 font-light">
          <Image src="/icons/message.svg" width={28} height={28} />
        </div>
      </div>
    </div>
  );

  const History = () => (
    <div className="order-4 bg-darkGray rounded-20 py-6.5 overflow-hidden h-549px">
      <div
        className="flex items-center text-white bg-white bg-opacity-10
                   rounded-18 font-medium px-4 mx-6.5"
        style={{ height: 58 }}
      >
        History
      </div>
      <div
        className="flex flex-col mt-6.5 overflow-auto ml-6.5 mr-4.5 pr-2"
        style={{ height: 410 }}
      >
        {historyItems.map((i, index) => (
          <div
            key={i.key}
            className={`flex space-x-3.5 border-b border-solid pt-4 pb-2 ${
              index === historyItems.length - 1 ? 'border-transparent' : 'border-fadeLightBlue4'
            }`}
          >
            <div>
              <Image src={i.src} width={48} height={48} />
            </div>
            <div className="">
              <div className="text-14 text-white">
                The Bitcoin Angel#61321 <span className="text-12">sold</span> 1.02HSY
              </div>
              <div className="text-14 text-white text-opacity-50 mt-1">2 days ago</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <Layout>
      <PlaceBidModal
        open={placeABidOpen}
        onCloseModal={() => setPlaceABidOpen(false)}
        onConfirmPlaceBid={() => {
          setPlaceABidOpen(false);
          setConfirmABidOpen(true);
        }}
      />
      <ConfirmBidModal open={confirmABidOpen} onCloseModal={() => setConfirmABidOpen(false)} />
      <CancelAuctionModal
        open={cancelAuctionOpen}
        onCloseModal={() => setCancelAuctionOpen(false)}
      />
      <MakeOfferModal open={makeOfferOpen} onCloseModal={() => setMakeOfferOpen(false)} />
      <UploadModal open={uploadOpen} onCloseModal={() => setUploadOpen(false)} />
      <div className="bg-darkGray rounded-20 px-5 lg:px-8 py-6.5">
        <div className="flex justify-between">
          <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-3">
            <div className="w-23 h-23 flex justify-center items-center rounded-full">
              <Image src="/images/avatar.png" width={112} height={112} />
            </div>
            <div className="flex flex-col mt-7 lg:mt-2">
              <div className="text-white text-18 font-medium">Emilie Butler</div>
              <div className="text-white text-14 font-light mt-2">The future is coming.</div>
              <div className="flex mt-1">
                <div className="text-white text-14 font-light mr-2">0x4A34639...5a81</div>
                <Image src="/icons/walletAddress.svg" width={18} height={18} />
              </div>
            </div>
          </div>
          <div
            className="flex flex-col lg:flex-row items-center space-y-12 lg:space-y-0
                       space-x-0 lg:space-x-6.5 mt-6 lg:mt-0"
          >
            <div className="flex flex-col">
              <div className="order-1 lg:order-2 flex space-x-8">
                <div className="flex flex-col items-center">
                  <div className="text-white text-14 font-light">Following</div>
                  <div className="text-white text-18">56</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-white text-14 font-light">Followers</div>
                  <div className="text-white text-18">2,233</div>
                </div>
              </div>
            </div>
            <button className="border border-white border-solid rounded-12 text-white w-33 h-9.5">
              Follow
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-8 mt-8">
        <Poster />
        <Offer />
        <Details />
        <History />
      </div>
    </Layout>
  );
}

export default Auctions;
