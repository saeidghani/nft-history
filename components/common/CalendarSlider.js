import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';

function CalendarSlider({ dates, title }) {
  const sliderRef = React.createRef();

  const settings = {
    arrows: false,
    infinite: true,
    swipeToSlide: true,
    speed: 500,
    variableWidth: true,
  };

  const handlePrevArrow = () => {
    sliderRef.current.slickPrev();
    console.log(sliderRef.current);
  };

  const handleNextArrow = () => {
    sliderRef.current.slickNext();
    console.log(sliderRef.current);
  };

  return (
    <div className="">
      <div className="text-white text-20 font-medium">{title}</div>
      <div className="slick-slides-gap relative grid grid-cols-1 mx-5 mt-8">
        <div className="absolute top-7.5 -left-6 z-10 cursor-pointer" onClick={handlePrevArrow}>
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
              {d.displayPointer && (
                <div className="flex justify-center -mb-1">
                  <div className="bg-primary rounded-b-6" style={{ width: 30, height: 3 }} />
                </div>
              )}
            </div>
          ))}
        </Slider>
        <div className="absolute top-7.5 -right-6 z-10 cursor-pointer" onClick={handleNextArrow}>
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
