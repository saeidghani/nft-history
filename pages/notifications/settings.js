import React, { useState } from 'react';
import Layout from '../../Layout';
import Image from 'next/image';
import { checkBoxItems } from '../../constants/notificationsSettingsData';

export default function NotificationsSettings() {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleItemClick = (item) => {
    if (selectedItems.includes(item.key)) {
      const newItems = selectedItems.filter((s) => s !== item.key);
      setSelectedItems(newItems);
    } else {
      setSelectedItems([...selectedItems, item.key]);
    }
  };

  const handleSave = () => {
    console.log(selectedItems);
  };

  return (
    <Layout>
      <div className="text-white text-20">Notification Settings</div>
      <div className="text-white text-14 font-light mt-1.5">
        Select which notification would you like to receive
      </div>
      <div className="flex flex-col mt-4">
        {checkBoxItems.map((i, index) => (
          <div
            key={i.key}
            className={`flex space-x-2.5 cursor-pointer ${index === 5 ? 'mt-11' : 'mt-5'}`}
            onClick={() => handleItemClick(i)}
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
      <div className="flex space-x-4 lg:space-x-8 mt-5">
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
        className="text-white text-18 font-medium btn-primary rounded-12
                   h-14 mt-5 w-full xs:max-w-56"
        onClick={handleSave}
      >
        Save
      </button>
    </Layout>
  );
}
