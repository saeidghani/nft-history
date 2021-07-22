import React, { useEffect, useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import Layout from '../../Layout';
import Image from 'next/image';
import Select from '../../components/UI/Select';

export default function Edit() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const avatarFileRef = useRef(null);

  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState('');
  const [loading, setLoading] = useState(true);
  const [selectedExpirationDuration, setSelectedExpirationDuration] = useState({});
  const [auctionType, setAuctionType] = useState('auction');

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    setSelectedExpirationDuration(expirationDurationItems[4]);
  }, []);

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onFileUpload = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    setSelectedFile(e.target.files[0]);
  };

  const onSubmit = (data) => console.log(data);

  console.log(watch('example')); // watch input value by passing the name of it

  const expirationDurationItems = [
    { key: 1, title: 'In 1 Day' },
    { key: 2, title: 'In 2 Days' },
    { key: 3, title: 'In 3 Days' },
    { key: 4, title: 'In 4 Days' },
    { key: 5, title: 'In 5 Days' },
  ];

  const auctionTypes = [
    { key: 'auction', title: 'Auction' },
    { key: 'fixed', title: 'Fixed' },
  ];

  return (
    <Layout>
      <form className="grid grid-cols-2 gap-x-8" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col bg-darkGray rounded-20 p-6.5" style={{ height: 630 }}>
          <div className="text-white font-medium">Preview</div>
          <div className="flex-grow flex flex-col justify-center items-center py-4">
            {preview && (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="w-full h-full"
                  //style={{ height: 124, width: 124 }}
                  src={preview || '/icons/switch.svg'}
                  alt=""
                />
              </>
            )}
            <div className="relative w-full h-full">
              <input
                className={`file-upload-btn-hidden text-transparent cursor-pointer w-full h-full
                          ${preview ? 'hidden' : 'block'}`}
                onChange={onFileUpload}
                type="file"
                accept="image/*"
                ref={avatarFileRef}
              />
              {!preview && (
                <div
                  className="absolute top-40 left-56 z-30 mt-4 cursor-pointer"
                  //style={{ position: 'absolute', top: '50%', left: '50%' }}
                  onClick={() => avatarFileRef?.current?.click()}
                >
                  <Image src="/icons/switchLight.svg" width={94} height={96} />
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-between">
            <div className="text-white">23 Feb, 2021</div>
            <div className="text-white font-medium">$ 299.49</div>
          </div>
          <div className="flex justify-between border-t border-solid border-fadeWhite1 pt-3 mt-8">
            <div className="flex items-center space-x-1">
              <Image src="/icons/star.svg" width={17} height={16} />
              <div className="text-white opacity-80 text-12">22</div>
            </div>
            <div className="flex items-center space-x-1">
              <Image src="/icons/comment.svg" width={16} height={15} />
              <div className="text-white opacity-80 text-12">22</div>
            </div>
            <div className="flex items-center space-x-1">
              <Image src="/icons/like.svg" width={18} height={16} />
              <div className="text-white opacity-80 text-12">20</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-white text-18">Name Your Date</div>
          <input
            className="rounded-12 border border-solid border-fadeLightBlue5 bg-transparent
                     text-white h-14 px-3 mt-2.5 w-full"
            placeholder="Title"
            {...register('title')}
          />

          <div className="text-white text-18 mt-6">Description</div>
          <input
            className="rounded-12 border border-solid border-fadeLightBlue5 bg-transparent
                     text-white h-14 px-3 mt-2.5 w-full"
            placeholder="Containing 180 character."
            {...register('description', { required: true })}
          />
          <div className="flex space-x-6.5 mt-7">
            {auctionTypes.map((i) => (
              <button
                key={i.key}
                className={`text-18 font-medium  rounded-12 w-full h-14 ${
                  i.key === auctionType
                    ? 'text-white bg-primary'
                    : 'text-lightBlue border border-solid border-lightBlue'
                }`}
                onClick={() => setAuctionType(i.key)}
              >
                {i.title}
              </button>
            ))}
          </div>
          {auctionType === 'auction' && (
            <div>
              <div className="text-white text-18 mt-7">Minimum Price</div>
              <input
                className="rounded-12 border border-solid border-fadeLightBlue5 bg-transparent
                     text-white h-14 px-3 mt-2.5 w-full"
                placeholder="Add Price"
                {...register('minimumPrice')}
              />
              <div className="text-white text-18 mt-5">Reserved Price</div>
              <input
                className="rounded-12 border border-solid border-fadeLightBlue5 bg-transparent
                     text-white h-14 px-3 mt-2.5 w-full"
                placeholder="Add Price"
                {...register('reservedPrice')}
              />
              <div className="text-14 font-light text-white text-opacity-80 mt-1">
                Service fee 2.5%
              </div>
              <div className="text-white text-18 mt-5">Starting Date</div>
              <Select
                options={[]}
                onSelect={() => {}}
                selected={{}}
                placeholder="Right after listing"
              />
              <div className="text-white text-18 mt-5">Expiration Duration</div>
              <p className="text-14 font-light text-gray2 mt-1">
                Your auction will automatically end at this time and the highest bidder will win. No
                need to cancel it!
              </p>
              <div className="border border-solid border-fadeLightBlue5 rounded-12 mt-3">
                <Select
                  options={expirationDurationItems}
                  onSelect={(val) => setSelectedExpirationDuration(val)}
                  selected={selectedExpirationDuration}
                  placeholder="Right after listing"
                  width="w-full"
                  buttonClass="h-14 px-4"
                  selectedClass="text-gray"
                  optionClass="text-white bg-darkGray"
                />
              </div>
              <div className="text-white text-18 mt-5">Expiration Time</div>
            </div>
          )}
          {auctionType === 'fixed' && (
            <>
              <div className="text-white text-18 mt-7">Fixed Price</div>
              <input
                className="rounded-12 border border-solid border-fadeLightBlue5 bg-transparent
                     text-white h-14 px-3 mt-2.5 w-full"
                placeholder="Add Price"
                {...register('fixedPrice')}
              />
            </>
          )}
          <div className="flex space-x-6.5 mt-7">
            <button
              type="submit"
              className="text-white text-18 font-medium bg-primary rounded-12 w-full h-14"
            >
              Put on Sale
            </button>
            <button
              className="text-lightBlue text-18 font-medium rounded-12 w-full
                           border border-solid border-lightBlue h-14"
            >
              Cansel
            </button>
          </div>
        </div>
      </form>
    </Layout>
  );
}
