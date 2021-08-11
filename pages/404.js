import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import routes from '../constants/routes';

export default function Custom404() {
  return (
    <div
      className="flex flex-col lg:flex-row justify-center items-center
                    space-x-0 lg:space-x-11 pt-60"
    >
      <div className="lg:hidden flex justify-center">
        <Image src="/images/404.svg" width={325} height={301} />
      </div>
      <div className="hidden lg:block flex justify-center">
        <Image src="/images/404.svg" width={445} height={412} />
      </div>
      <div className="w-full" style={{ maxWidth: 376 }}>
        <div
          className="text-190 font-Nunito font-extralight text-white text-center lg:text-left"
          style={{ lineHeight: 1 }}
        >
          404
        </div>
        <p className="text-white text-18 text-opacity-80 text-center lg:text-left px-6 lg:px-0">
          Sorry. the content you’re looking for doesn’t exist. Either it was removed, or you
          mistyped the link.
        </p>
        <div className="flex justify-center lg:justify-start">
          <Link href={routes.home.index}>
            <div
              className="btn-primary text-white text-18 rounded-12 h-14 w-80 lg:w-60
                             cursor-pointer flex justify-center items-center mt-9"
            >
              Go to Home
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
