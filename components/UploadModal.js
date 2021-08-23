import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Modal from './UI/Modal';
import routes from '../constants/routes';

function UploadModal({ open, onCloseModal }) {
  const title = (
    <div
      className="flex justify-between items-center text-18 bg-white bg-opacity-10 rounded-18
                    h-14 px-4 mt-6.5 mx-6.5"
    >
      <div className="text-white text-18">Good News!</div>
      <button className="mt-2" onClick={onCloseModal}>
        <Image src="/icons/close.svg" width={21} height={22} />
      </button>
    </div>
  );

  const content = (
    <div className="p-6.5">
      <p className="text-white text-18 font-light">
        You won NFT history item #20600010973 : <br /> (4/20/1900)
      </p>
      <p className="text-white text-opacity-75 mt-4">
        To authenticate the ownership, upload a photo, Gif, etc to customize your date
      </p>
      <div className="flex space-x-6.5 mt-6.5">
        <Link href={routes.upload}>
          <div
            className="flex justify-center items-center text-white text-18
                          font-medium btn-primary rounded-12 w-full h-14 cursor-pointer"
          >
            Upload and Assign
          </div>
        </Link>
        <button
          className="hidden lg:block text-lightBlue text-18 font-medium rounded-12 w-full
                           border border-solid border-lightBlue h-14"
        >
          Later
        </button>
      </div>
    </div>
  );

  return <Modal title={title} open={open} content={content} onCloseModal={onCloseModal} />;
}

export default UploadModal;
