import React, { useEffect, useState } from 'react';
import Layout from '../../Layout';
import PlaceBidModal from '../../components/PlaceBidModal';
import ConfirmBidModal from '../../components/ConfirmBidModal';
import CancelAuctionModal from '../../components/CancelAuctionModal';
import MakeOfferModal from '../../components/MakeOfferModal';
import UploadModal from '../../components/UploadModal';
import ProfileSummary from '../../components/common/ProfileSummary';
import AuctionPoster from '../../components/AuctionPoster';
import AuctionOffer from '../../components/AuctionOffer';
import AuctionDetails from '../../components/AuctionDetails';
import AuctionHistory from '../../components/AuctionHistory';
import { filterItems } from '../../constants/accountData';

function Auctions() {
  const [placeABidOpen, setPlaceABidOpen] = useState(false);
  const [confirmABidOpen, setConfirmABidOpen] = useState(false);
  const [cancelAuctionOpen, setCancelAuctionOpen] = useState(false);
  const [makeOfferOpen, setMakeOfferOpen] = useState(false);
  const [uploadOpen, setUploadOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState({});

  useEffect(() => {
    setActiveFilter(filterItems[0]);
  }, []);

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
      <ProfileSummary
        filterItems={filterItems}
        activeFilter={activeFilter}
        onSetActiveFilter={(filter) => setActiveFilter(filter)}
        displayCategories={false}
        wrapperClass="bg-darkGray rounded-20 px-5 lg:px-8 py-6.5"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 xl:gap-8 mt-8">
        <AuctionPoster />
        <AuctionOffer
          onSetCancelAuctionOpen={() => setCancelAuctionOpen(true)}
          onSetMakeOfferOpen={() => setMakeOfferOpen(true)}
          onSetPlaceABidOpen={() => setPlaceABidOpen(true)}
        />
        <AuctionDetails />
        <AuctionHistory />
      </div>
    </Layout>
  );
}

export default Auctions;
