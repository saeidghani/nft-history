import React, { useState } from 'react';
import Layout from '../../Layout';
import Image from 'next/image';

export default function Settings() {
  const [selectedItems, setSelectedItems] = useState([]);

  const checkBoxItems = [
    { key: 1, title: 'Item Sold', text: 'When someone purchased one of your items' },
    { key: 2, title: 'Bid Activity', text: 'When someone bids on one of your items' },
    { key: 3, title: 'Auction Expiration', text: 'When anc English auction you created ends' },
    { key: 4, title: 'Outbid', text: 'When an offer you placed is exceeded by another user' },
    { key: 5, title: 'Successful Purchase', text: '' },
    {
      key: 6,
      title: 'NFT History Newsletter',
      text: 'Occasional updates from the NFT History team',
    },
  ];

  const handleSave = () => {
    console.log(selectedItems);
  };

  return (
    <Layout>
      <div className="text-white text-20">Notification Settings</div>
      <div className="text-white text-14 font-light mt-1.5">
        Select which notification would you like to receive
      </div>
      <div className="flex flex-col space-y-5 mt-9">
        {checkBoxItems.map((i) => (
          <div
            key={i.key}
            className="flex space-x-2.5 cursor-pointer"
            onClick={() => {
              if (selectedItems.includes(i.key)) {
                const newItems = selectedItems.filter((s) => s !== i.key);
                setSelectedItems(newItems);
              } else {
                setSelectedItems([...selectedItems, i.key]);
              }
            }}
          >
            <div
              className={`w-6.5 h-6.5 rounded-md flex justify-center items-center
                              border border-solid border-primary mt-1 ${
                                selectedItems.includes(i.key) ? 'bg-primary' : ''
                              }`}
            >
              {selectedItems.includes(i.key) && (
                <div className="bg-transparent">
                  <Image src="/icons/tick.svg" width={14} height={12} />
                </div>
              )}
            </div>
            <div className="flex flex-col space-y-1.5">
              <div className="text-white font-medium">{i.title}</div>
              {i.text && <div className="text-white text-opacity-80">{i.text}</div>}
            </div>
          </div>
        ))}
      </div>
      <div className="text-white font-medium mt-4.5">Bid Threshold</div>
      <p className="text-lightGray font-Ubuntu mt-2.5 w-full" style={{ maxWidth: 626 }}>
        Receive notifications only when you receive offers with a value greater than or equal to
        this amount of HSY.
      </p>
      <div className="flex space-x-8 mt-5">
        <div className="relative">
          <input
            type="text"
            className="bg-transparent rounded-12 text-white w-full
                       border border-solid border-fadeLightBlue5 h-14 pl-4 pr-12"
            style={{ maxWidth: 222 }}
          />
          <div className="absolute top-4 right-4 text-white text-opacity-80 text-18 font-light">
            HSY
          </div>
        </div>
        <div className="relative">
          <input
            type="text"
            className="bg-transparent rounded-12 text-white w-full
                       border border-solid border-fadeLightBlue5 h-14 pl-14 pr-4"
            style={{ maxWidth: 222 }}
          />
          <div className="absolute top-4 left-4 text-white text-opacity-80 text-18 font-light">
            0.00$
          </div>
        </div>
      </div>
      <button
        className="text-white text-18 font-medium bg-primary rounded-12 w-full h-14 mt-5"
        style={{ maxWidth: 224 }}
        onClick={handleSave}
      >
        Save
      </button>
    </Layout>
  );
}
