import React from 'react';
import { acceptRejectButtons } from '../constants/offerButtonsData';

const NotificationOfferButtons = ({
  id,
  wrapperClass,
  acceptedOffers,
  onOpenOfferButtonsClick,
}) => (
  <div className={wrapperClass}>
    <div className="flex space-x-4 xl:space-x-5 mt-5">
      {acceptRejectButtons.map((b) => (
        <button
          key={b.key}
          className={`text-18 font-medium rounded-12 w-full h-14 ${
            acceptedOffers[id] === b.key
              ? 'text-white btn-primary'
              : `text-lightBlue border border-solid border-lightBlue`
          }`}
          onClick={() => onOpenOfferButtonsClick(id)}
        >
          {b.title}
        </button>
      ))}
    </div>
  </div>
);

export default NotificationOfferButtons;
