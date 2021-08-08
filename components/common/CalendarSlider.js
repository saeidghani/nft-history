import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import { useRouter } from 'next/router';

const daysSliderDates = [
  { key: 9, title1: 9 },
  { key: 10, title1: 10 },
  { key: 11, title1: 11 },
  { key: 12, title1: 12 },
  { key: 13, title1: 13, displayPointer: true },
  { key: 14, title1: 14 },
  { key: 15, title1: 15 },
  { key: 16, title1: 16 },
  { key: 17, title1: 17 },
  { key: 18, title1: 18 },
  { key: 19, title1: 19 },
  { key: 20, title1: 20 },
  { key: 21, title1: 21 },
];

const monthSliderDates = [
  { key: 1, title1: 'Mon', title2: 22 },
  { key: 2, title1: 'Tue', title2: 23 },
  { key: 3, title1: 'Wed', title2: 24 },
  { key: 4, title1: 'thu', title2: 25 },
  { key: 5, title1: 'Fri', title2: 26, displayPointer: true },
  { key: 6, title1: 'Sat', title2: 27 },
  { key: 7, title1: 'Sun', title2: 28 },
  { key: 8, title1: 'Mon', title2: 29 },
  { key: 9, title1: 'Tue', title2: 30 },
  { key: 10, title1: 'Wed', title2: 31 },
  { key: 11, title1: 'Thu', title2: 1 },
  { key: 12, title1: 'Fri', title2: 2 },
  { key: 13, title1: 'Sat', title2: 3 },
];

const yearSliderDates = [
  { key: 1, title1: 'Jan' },
  { key: 2, title1: 'Feb' },
  { key: 3, title1: 'Mar' },
  { key: 4, title1: 'Apr' },
  { key: 5, title1: 'May', displayPointer: true },
  { key: 6, title1: 'Jun' },
  { key: 7, title1: 'Jul' },
  { key: 8, title1: 'Aug' },
  { key: 9, title1: 'Sep' },
  { key: 10, title1: 'Oct' },
  { key: 11, title1: 'Nov' },
  { key: 12, title1: 'Dec' },
];

const yearsSliderDates = [
  { key: 1, title1: 2009 },
  { key: 2, title1: 2010 },
  { key: 3, title1: 2011 },
  { key: 4, title1: 2012 },
  { key: 5, title1: 2013 },
  { key: 6, title1: 2014, displayPointer: true },
  { key: 7, title1: 2015 },
  { key: 8, title1: 2016 },
  { key: 9, title1: 2017 },
  { key: 10, title1: 2018 },
  { key: 11, title1: 2019 },
  { key: 12, title1: 2020 },
  { key: 13, title1: 2021 },
];

function CalendarSlider() {
  const router = useRouter();
  const { query } = router;
  const { calendarType } = query;
  const sliderRef = React.createRef();

  const [dates, setDates] = useState([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    let dates = [];
    let title = '';
    if (calendarType === 'month') {
      dates = monthSliderDates;
      title = 'March-April 2021';
    } else if (calendarType === 'days') {
      dates = daysSliderDates;
      title = '9-21 Centery';
    } else if (calendarType === 'years') {
      dates = yearsSliderDates;
      title = '2009-2021';
    } else {
      dates = yearSliderDates;
      title = '2021';
    }
    setDates(dates);
    setTitle(title);
  }, [calendarType]);

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
      <div
        className="text-white text-20 font-medium"
        onClick={() =>
          router.push({
            pathname,
            query: { calendarType: calendarType === 'month' ? 'years' : 'days' },
          })
        }
      >
        {title}
      </div>
      <div className="slick-slides-gap relative grid grid-cols-1 sm:mr-2 lg:mx-5 mt-8">
        <div
          className="hidden lg:block absolute top-7.5 -left-6 z-10 cursor-pointer"
          onClick={handlePrevArrow}
        >
          <Image src="/icons/prevArrow.svg" width={10} height={20} alt="arrow" />
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
        <div
          className="hidden lg:block absolute top-7.5 -right-6 z-10 cursor-pointer"
          onClick={handleNextArrow}
        >
          <Image src="/icons/nextArrow.svg" width={10} height={20} alt="arrow" />
        </div>
      </div>
      <div className="lg:hidden flex justify-center items-center space-x-11 mt-4">
        <div className="cursor-pointer" onClick={handlePrevArrow}>
          <Image src="/icons/prevArrow.svg" width={10} height={20} alt="arrow" />
        </div>
        <div className="cursor-pointer" onClick={handleNextArrow}>
          <Image src="/icons/nextArrow.svg" width={10} height={20} alt="arrow" />
        </div>
      </div>
    </div>
  );
}

export default CalendarSlider;
