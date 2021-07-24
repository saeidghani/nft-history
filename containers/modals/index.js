import React, { useState, useEffect } from 'react';
import PlaceBidModal from './PlaceBidModal';
import ConfirmBidModal from './ConfirmBidModal';
import UploadModal from './UploadModal';
import MakeOfferModal from './MakeOfferModal';
import CancelAuctionModal from './CancelAuctionModal';

function Modals() {
  const [placeABidOpen, setPlaceABidOpen] = useState(false);
  const [confirmABidOpen, setConfirmABidOpen] = useState(false);
  const [makeOfferOpen, setMakeOfferOpen] = useState(false);
  const [uploadOpen, setUploadOpen] = useState(false);
  const [cancelAuctionOpen, setCancelAuctionOpen] = useState(false);

  useEffect(() => {
    //setPlaceABidOpen(true);
    //setConfirmABidOpen(true);
    setMakeOfferOpen(true);
    //setUploadOpen(true);
    //setCancelAuctionOpen(true);
  }, []);

  return (
    <div>
      <PlaceBidModal open={placeABidOpen} onCloseModal={() => setPlaceABidOpen(false)} />
      <ConfirmBidModal open={confirmABidOpen} onCloseModal={() => setConfirmABidOpen(false)} />
      <UploadModal open={uploadOpen} onCloseModal={() => setUploadOpen(false)} />
      <MakeOfferModal open={makeOfferOpen} onCloseModal={() => setMakeOfferOpen(false)} />
      <CancelAuctionModal
        open={cancelAuctionOpen}
        onCloseModal={() => setCancelAuctionOpen(false)}
      />
    </div>
  );
}

export default Modals;
