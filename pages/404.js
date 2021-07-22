import React from 'react';
import Image from 'next/image';

export default function Custom404() {
  return (
    <div className="flex justify-center items-center space-x-11 pt-60">
      <Image src="/images/404.svg" width={445} height={412} />
      <div className="w-full" style={{ maxWidth: 376 }}>
        <div className="text-190 font-Nunito font-extralight text-white">404</div>
        <p className="text-white text-18 text-opacity-80">
          Sorry. the content you’re looking for doesn’t exist. Either it was removed, or you
          mistyped the link.
        </p>
        <button className="text-white bg-primary rounded-12 h-14 w-60 mt-9">Go to Home</button>
      </div>
    </div>
  );
}
