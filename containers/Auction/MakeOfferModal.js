import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Modal from '../../components/UI/Modal';
import TimePicker from '../../components/UI/TimePicker';
import Select from '../../components/UI/Select';

function MakeOfferModal({ open, onCloseModal }) {
  const [selectedOfferExpiration, setSelectedOfferExpiration] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    setSelectedOfferExpiration(offerExpirationItems[4]);
  }, []);

  const offerExpirationItems = [
    { key: 1, title: 'In One Day' },
    { key: 2, title: 'In Two Days' },
    { key: 3, title: 'In Three Days' },
    { key: 4, title: 'In Four Days' },
    { key: 5, title: 'In Five Days' },
  ];

  const title = (
    <div
      className="flex justify-between items-center text-18 bg-white bg-opacity-10 rounded-18
                    h-14 px-4 mt-6.5 mx-6.5"
    >
      <div className="text-white text-18">Make an Offer</div>
      <button className="mt-2" onClick={onCloseModal}>
        <Image src="/icons/close.svg" width={21} height={22} />
      </button>
    </div>
  );

  const content = (
    <div className="px-6.5 pb-6.5 pt-7.5">
      <div
        className="flex flex-col md:flex-row space-y-8 md:space-y-0 space-x-0 md:space-x-8
       items-end"
      >
        <div className="w-full">
          <div className="text-white font-medium">Price:</div>
          <div className="relative w-full mt-3 mr-8">
            <input
              className="text-white text-opacity-80 bg-transparent rounded-12 px-4 h-14 w-full
                              border border-solid border-lightBlue lg:max-w-222px"
            />
            <div className="text-18 absolute top-4 right-4 md:right-4 text-white text-opacity-80">
              HSY
            </div>
          </div>
        </div>
        <div className="relative w-full">
          <input
            placeholder="0.00"
            className="text-white text-opacity-80 bg-transparent rounded-12 px-4 h-14 w-full
                       border border-solid border-lightBlue lg:max-w-222px"
          />
          <div className="text-18 absolute top-4 right-4 text-white text-opacity-80">$</div>
        </div>
      </div>
      <div
        className="flex flex-col md:flex-row space-y-8 md:space-y-0 space-x-0 md:space-x-8
      items-end mt-6.5"
      >
        <div className="w-full">
          <div className="text-white font-medium">Offer Expiration:</div>
          <div className="w-full border border-solid border-lightBlue rounded-12 mt-3">
            <Select
              options={offerExpirationItems}
              onSelect={(val) => setSelectedOfferExpiration(val)}
              selected={selectedOfferExpiration}
              placeholder="Right after listing"
              width="w-full"
              buttonClass="h-14 px-4"
              selectedClass="text-18 text-white text-opacity-80"
              optionClass="text-18 text-white font-light bg-darkGray3"
            />
          </div>
        </div>
        <TimePicker />
      </div>
      <button
        className="text-white text-18 font-medium btn-primary rounded-12 w-full h-14 mt-8"
        onClick={onCloseModal}
      >
        Make an Offer
      </button>
    </div>
  );

  return <Modal title={title} open={open} content={content} onCloseModal={onCloseModal} />;
}

export default MakeOfferModal;
