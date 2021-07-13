import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';

function CalendarSlider() {
  const sliderRef = React.createRef();

  const settings = {
    arrows: false,
    infinite: true,
    swipeToSlide: true,
    speed: 500,
    variableWidth: true,
    centerMode: true,
    className: 'center',
  };

  const handlePrevArrow = () => {
    sliderRef.current.slickPrev();
    console.log(sliderRef.current);
  };

  const handleNextArrow = () => {
    sliderRef.current.slickNext();
    console.log(sliderRef.current);
  };

  const dates = [
    { key: 1, title1: 1 },
    { key: 2, title1: 2 },
    { key: 3, title1: 3 },
    { key: 4, title1: 4 },
    { key: 5, title1: 5, displayBorder: true },
    { key: 6, title1: 6 },
    { key: 7, title1: 7 },
    { key: 8, title1: 8 },
    { key: 9, title1: 9 },
    { key: 10, title1: 10 },
    { key: 11, title1: 11 },
    { key: 12, title1: 12 },
    { key: 13, title1: 13 },
    { key: 14, title1: 14 },
    { key: 15, title1: 15 },
  ];

  return (
    <div className="">
      <div className="text-white text-20 font-medium">2021</div>
      <div className="slick-slides-gap relative grid grid-cols-1 mx-8 mt-8">
        <div className="absolute top-7.5 -left-8 z-10 cursor-pointer" onClick={handlePrevArrow}>
          <div className="hidden lg:block">
            <Image src="/icons/prevArrow.svg" width={10} height={20} alt="arrow" />
          </div>
          <div className="block lg:hidden">
            <Image src="/icons/prevArrow.svg" width={10} height={20} alt="arrow" />
          </div>
        </div>
        <Slider className="" {...settings} ref={sliderRef}>
          {dates.map((d) => (
            <div
              key={d.key}
              className="bg-white bg-opacity-10 border border-solid border-fadeLightBlue1
                         rounded-20"
            >
              <div
                className="flex flex-col items-center"
                style={{ width: 76, height: 76, paddingTop: d.title2 ? 13 : 28 }}
              >
                <div className="text-white font-light text-center">{d.title1}</div>
                {d.title2 && (
                  <div className="text-20 text-white font-medium text-center">{d.title2}</div>
                )}
              </div>
              {d.displayBorder && (
                <div className="flex justify-center -mb-1">
                  <div className="bg-primary rounded-b-6" style={{ width: 30, height: 3 }} />
                </div>
              )}
            </div>
          ))}
        </Slider>
        <div className="absolute top-7.5 -right-8 z-10 cursor-pointer" onClick={handleNextArrow}>
          <div className="hidden lg:block">
            <Image src="/icons/nextArrow.svg" width={10} height={20} alt="arrow" />
          </div>
          <div className="block lg:hidden">
            <Image src="/icons/nextArrow.svg" width={10} height={20} alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalendarSlider;
