import React from 'react';
import Image from 'next/image';
import Modal from '../../components/UI/Modal';
import Layout from '../../Layout';

function PlaceBidModal({ open, onCloseModal }) {
  const title = (
    <div
      className="flex justify-between items-center text-18 bg-white bg-opacity-10 rounded-18
                    h-14 px-4 mt-6.5 mx-6.5"
    >
      <div className="text-white text-18">Place a Bid</div>
      <button className="mt-2" onClick={onCloseModal}>
        <Image src="/icons/close.svg" width={21} height={22} />
      </button>
    </div>
  );

  const content = (
    <div className="p-6.5">
      <p className="text-white text-18 font-light">
        You Placed the first bid. auction will last for 24 hours Good Luck!
      </p>
      <button className="text-white text-18 font-medium bg-primary rounded-12 w-full h-14 mt-12">
        Confirm
      </button>
    </div>
  );

  return (
    <Layout>
      <Modal title={title} open={open} content={content} onCloseModal={onCloseModal} />
    </Layout>
  );
}

export default PlaceBidModal;
