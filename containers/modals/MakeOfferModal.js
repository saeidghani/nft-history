import React from 'react';
import Image from 'next/image';
import Modal from '../../components/UI/Modal';
import Layout from '../../Layout';

function MakeOfferModal({ open, onCloseModal }) {
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
      <div className="text-white font-medium">Price:</div>
      <div className="flex mt-3">
        <div className="relative mr-8 w-full">
          <input className="bg-transparent rounded-12 px-4 h-14 border border-solid border-lightBlue" />
          <div className="absolute top-4 right-7 text-white text-opacity-80">HSY</div>
        </div>
        <div className="relative w-full">
          <input
            placeholder="0.00"
            className="bg-transparent rounded-12 px-4 h-14 border border-solid border-lightBlue"
          />
          <div className="absolute top-4 right-7 text-white text-opacity-80">$</div>
        </div>
      </div>
      <div className="text-white font-medium mt-6.5">Offer Expiration:</div>
      <div className="flex mt-3">
        <div className="relative mr-8 w-full">
          <input className="bg-transparent rounded-12 px-4 h-14 border border-solid border-lightBlue" />
          <div className="absolute top-4 right-7 text-white text-opacity-80">HSY</div>
        </div>
        <div className="relative w-full">
          <input
            placeholder="0.00"
            className="bg-transparent rounded-12 px-4 h-14 border border-solid border-lightBlue"
          />
          <div className="absolute top-4 right-7 text-white text-opacity-80">$</div>
        </div>
      </div>
      <button className="text-white text-18 font-medium bg-primary rounded-12 w-full h-14 mt-8">
        Make an Offer
      </button>
    </div>
  );

  return (
    <Layout>
      <Modal title={title} open={open} content={content} onCloseModal={onCloseModal} />
    </Layout>
  );
}

export default MakeOfferModal;
