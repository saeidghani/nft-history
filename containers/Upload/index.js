import React, { useEffect, useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import Layout from '../../Layout';
import Image from 'next/image';

export default function Upload() {
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

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
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

  return (
    <Layout>
      <form className="grid grid-cols-2 gap-x-8" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col bg-darkGray rounded-20 p-6.5" style={{ height: 630 }}>
          <div className="text-white font-medium">Preview</div>
          <div className="flex-grow flex flex-col justify-center items-center py-4">
            {preview && (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="w-full h-full" src={preview || '/icons/switch.svg'} alt="" />
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
        <div className="flex flex-col justify-between">
          <div className="">
            <div className="text-white text-18">Name Your Date</div>
            <input
              className="rounded-12 border border-solid border-fadeLightBlue5 bg-transparent
                     text-white h-14 px-3 mt-2.5 w-full"
              placeholder="Title"
              {...register('title')}
            />

            <div className="text-white text-18 mt-6">Description</div>
            <textarea
              rows={7}
              className="rounded-12 border border-solid border-fadeLightBlue5 bg-transparent
                     text-white px-3 pt-3 mt-2.5 w-full"
              placeholder="Containing 180 character."
              {...register('description', { required: true })}
            />
          </div>
          <div className="flex space-x-6.5 mt-11">
            <button
              type="submit"
              className="text-white text-18 font-medium bg-primary rounded-12 w-full h-14"
            >
              Upload
            </button>
            <button
              className="text-lightBlue text-18 font-medium rounded-12 w-full
                           border border-solid border-lightBlue h-14"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </Layout>
  );
}
