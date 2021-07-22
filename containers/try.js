import React from 'react';

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
        className="absolute top-30 lg:top-8 left-3.5 z-30 font-semibold cursor-pointer mt-4"
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
</div>;
