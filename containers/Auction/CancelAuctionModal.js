import React from 'react';
import Image from 'next/image';
import Modal from '../../components/UI/Modal';

function UploadModal({ open, onCloseModal }) {
  const title = (
    <div
      className="flex justify-between items-center text-18 bg-white bg-opacity-10 rounded-18
                    h-14 px-4 mt-6.5 mx-6.5"
    >
      <div className="text-white text-18">Cancel Auction</div>
      <button className="mt-2" onClick={onCloseModal}>
        <Image src="/icons/close.svg" width={21} height={22} />
      </button>
    </div>
  );

  const content = (
    <div className="p-6.5">
      <p className="text-white text-18 font-light">
        By canseling the auction people can’t bid on your date anymore, Are you sure?
      </p>
      <div className="text-white text-18 font-light text-opacity-75 mt-2.5">10 HSY fee</div>
      <button
        className="text-white text-18 font-medium bg-primary rounded-12 w-full h-14 mt-5"
        onClick={onCloseModal}
      >
        Yes!
      </button>
    </div>
  );

  return <Modal title={title} open={open} content={content} onCloseModal={onCloseModal} />;
}

export default UploadModal;
