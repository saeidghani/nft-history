import React from 'react';
import Image from 'next/image';
import Modal from '../../components/UI/Modal';

function ConfirmBidModal({ open, onCloseModal }) {
  const title = (
    <div
      className="flex justify-between items-center text-18 bg-white bg-opacity-10 rounded-18
                    h-14 px-4 mt-6.5 mx-6.5"
    >
      <div className="text-white text-18">Confirm Your Bid</div>
      <button className="mt-2" onClick={onCloseModal}>
        <Image src="/icons/close.svg" width={21} height={22} />
      </button>
    </div>
  );

  const content = (
    <div className="p-6.5">
      <p className="text-white text-opacity-80 text-18 font-light">
        You Placed a bid worth $20 are you sure?
      </p>
      <button
        className="text-white text-18 font-medium btn-primary rounded-12 w-full h-14 mt-20"
        onClick={onCloseModal}
      >
        Confirm
      </button>
    </div>
  );

  return <Modal title={title} open={open} content={content} onCloseModal={onCloseModal} />;
}

export default ConfirmBidModal;
