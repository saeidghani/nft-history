import React, { useEffect, useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import Layout from '../../Layout';

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

  return (
    <Layout>
      <form onSubmit={handleSubmit(onSubmit)} className="mx-auto" style={{ maxWidth: 373 }}>
        <div className="md:mt-6.5 flex flex-col items-center">
          {preview && (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="text-18 font-semibold rounded-full bg-white bg-opacity-20"
                style={{ height: 124, width: 124 }}
                src={preview || '/images/avatar.png'}
                alt=""
              />
            </>
          )}
          <div className="relative">
            <input
              className={`file-upload-btn-hidden text-transparent cursor-pointer w-full text-16 
                          lg:text-18 font-semibold rounded-full bg-gray bg-opacity-50 w-31 h-31 
                          ${preview ? 'hidden' : 'block'}`}
              style={{ height: 124, width: 124 }}
              onChange={onFileUpload}
              type="file"
              accept="image/*"
              ref={avatarFileRef}
            />
            {!preview && (
              <div
                className="absolute top-30 lg:top-9 left-3.5 z-30 font-semibold cursor-pointer mt-4"
                style={{ color: '#377CF6', fontSize: 18 }}
                onClick={() => avatarFileRef?.current?.click()}
              >
                Add Picture
              </div>
            )}
          </div>
          {preview && (
            <div
              className="z-30 font-semibold cursor-pointer mt-4"
              style={{ color: '#377CF6', fontSize: 18 }}
              onClick={() => avatarFileRef?.current?.click()}
            >
              Edit picture
            </div>
          )}
        </div>

        <div className="text-white text-18 mt-5">Name*</div>
        <input
          className="rounded-12 border border-solid border-fadeLightBlue5 bg-transparent
                     text-white h-14 px-3 mt-2.5 w-full"
          defaultValue="Emilie"
          placeholder="Name"
          {...register('name', { required: true })}
        />
        {errors.name && <div className="text-red-500 mt-1">Please Enter Your Name</div>}

        <div className="text-white text-18 mt-6">Bio</div>
        <input
          className="rounded-12 border border-solid border-fadeLightBlue5 bg-transparent
                     text-white h-14 px-3 mt-2.5 w-full"
          placeholder="Description"
          {...register('bio')}
        />
        <div className="text-white text-18 mt-6">Email</div>
        <input
          className="rounded-12 border border-solid border-fadeLightBlue5 bg-transparent
                     text-white h-14 px-3 mt-2.5 w-full"
          placeholder="Email"
          {...register('email')}
        />

        <div className="flex space-x-5 mt-11">
          <button
            type="submit"
            className="text-white text-18 font-medium bg-primary rounded-12 w-full h-14"
          >
            Save
          </button>
          <button
            className="text-lightBlue text-18 font-medium rounded-12 w-full
                           border border-solid border-lightBlue h-14"
          >
            Cancel
          </button>
        </div>
      </form>
    </Layout>
  );
}
