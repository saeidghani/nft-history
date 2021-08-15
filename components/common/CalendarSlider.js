import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { filterQuery, useWindowSize } from '../../utils';

const daysSliderDates = [
  { key: 12, title1: 1 },
  { key: 13, title1: 2, displayPointer: true },
  { key: 14, title1: 3 },
  { key: 15, title1: 4 },
  { key: 16, title1: 5 },
  { key: 17, title1: 6 },
  { key: 18, title1: 7 },
  { key: 19, title1: 8 },
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
  { key: 22, title1: 22 },
  { key: 23, title1: 23 },
  { key: 24, title1: 24 },
  { key: 25, title1: 25 },
  { key: 26, title1: 26 },
  { key: 27, title1: 27 },
  { key: 28, title1: 28 },
  { key: 29, title1: 29 },
  { key: 30, title1: 30 },
  { key: 31, title1: 1 },
  { key: 32, title1: 2 },
  { key: 33, title1: 3 },
  { key: 34, title1: 4 },
  { key: 35, title1: 5 },
  { key: 36, title1: 6 },
  { key: 37, title1: 7 },
  { key: 38, title1: 8 },
  { key: 39, title1: 9 },
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
  { key: 1, title1: 'Jan' },
  { key: 2, title1: 'Feb' },
  { key: 3, title1: 'Mar' },
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

const categories = [
  { key: 'sport', name: 'Sport' },
  { key: 'art', name: 'Art' },
  { key: 'history', name: 'History' },
  { key: 'personal', name: 'Personal' },
];

function CalendarSlider({ wrapperClass }) {
  const router = useRouter();
  const { pathname, query } = router;
  const { category, displayCalendar, calendarType } = query;

  const sliderRef = React.createRef();

  const [dates, setDates] = useState([]);
  const [title, setTitle] = useState('');
  const [selectedItem, setSelectedItem] = useState(5);
  const [count, setCount] = useState(13);
  const { width } = useWindowSize();

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

  useEffect(() => {
    if (width < 430) {
      setCount(4);
    } else if (width < 520) {
      setCount(5);
    } else if (width < 700) {
      setCount(6);
    } else if (width < 850) {
      setCount(8);
    } else if (width < 1024) {
      setCount(10);
    } else if (width < 1200) {
      setCount(8);
    } else if (width < 1400) {
      setCount(10);
    } else {
      setCount(13);
    }
  }, [width]);

  const settings = {
    arrows: false,
    infinite: false,
    swipeToSlide: true,
    speed: 900,
    slidesToShow: 13,
    slidesToScroll: 13,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 10,
          slidesToScroll: 10,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 8,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 10,
          slidesToScroll: 10,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 8,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
    ],
    beforeChange: function (currentSlide, nextSlide) {
      if (currentSlide !== nextSlide) {
        removeFadeClass();

        let startSlide = currentSlide < nextSlide ? currentSlide : currentSlide;
        let endSlide = currentSlide < nextSlide ? nextSlide : currentSlide + count;

        for (let i = startSlide; i < endSlide; i++) {
          let el = document.getElementById(`slide-${i}`);
          el?.classList.add('fadeOutLeft');
        }
      }
    },

    afterChange: function (currentSlide) {
      let startSlide = currentSlide;
      let endSlide = currentSlide + count;

      let time = 0;
      for (let i = startSlide; i < endSlide; i++) {
        time++;
        setTimeout(() => {
          let el = document.getElementById(`slide-${i}`);
          el?.classList.add('fadeInDown');
        }, time * 50);
      }
    },
  };

  const addFadeClass = () => {
    removeFadeClass();
    for (let i = 0; i < 13; i++) {
      setTimeout(() => {
        let el = document.getElementById(`slide-${i}`);
        el?.classList.add('fadeInDown');
      }, i * 50 + 1000);
    }
  };

  const removeFadeClass = () => {
    let all = document.querySelectorAll(`.my-slide`);

    for (let i = 0; i < all.length; i++) {
      all[i].classList.remove('fadeInDown');
      all[i].classList.remove('fadeOutLeft');
    }
  };

  const handlePrevArrow = () => {
    sliderRef.current.slickPrev();
  };

  const handleNextArrow = () => {
    sliderRef.current.slickNext();
  };

  const showCalender = () => {
    setTimeout(() => {
      if (!displayCalendar) {
        document.getElementById('calenderSlider').classList.add('display-block');
        document.getElementById('calender-title').classList.add('show');
        document.getElementById('calender-title').classList.add('show');
        addFadeClass();
      } else {
        removeFadeClass();
        document.getElementById('calender-title').classList.remove('show');
        document.getElementById('calenderSlider').classList.remove('display-block');
      }
    }, 500);
  };

  const titleAnimation = () => {
    document.getElementById('calender-title').classList.remove('show');
    setTimeout(() => {
      document.getElementById('calender-title').classList.add('show');
    }, 500);
  };

  const changeCalendar = () => {
    sliderRef.current.slickGoTo(0);
    setSelectedItem(5);
    addFadeClass();
    titleAnimation();
    setTimeout(() => {
      router.push({
        pathname,
        query: {
          ...query,
          calendarType:
            calendarType === 'month'
              ? 'year'
              : calendarType === 'year'
              ? 'years'
              : calendarType === 'years'
              ? 'days'
              : 'month',
        },
      });
    }, 500);
  };

  return (
    <div className={wrapperClass}>
      <div>
        <div className="hidden lg:block text-20 text-white">The Premier Marketplace for Dates</div>
        <div
          className="flex items-center justify-between bg-white bg-opacity-10 rounded-18 border
         border-solid border-fadeLightBlue1 px-2 xs:px-3.5 lg:pl-2.5 lg:pr-1 py-2 mt-4.5"
        >
          <div className="flex space-x-0 lg:space-x-6">
            {categories?.map((c) => (
              <Link key={c.key} href={{ pathname, query: { ...query, category: c.key } }}>
                <div
                  className={`text-14 lg:text-16 cursor-pointer transition-all duration-500 ease-in-out 
                  ${
                    c.key === category
                      ? `text-primary bg-primary bg-opacity-10 rounded-10 
                    font-medium px-2.5 py-2`
                      : 'text-secondary text-opacity-80 px-2.5 py-2'
                  }`}
                >
                  {c.name}
                </div>
              </Link>
            ))}
          </div>
          <div
            className="cursor-pointer"
            onClick={() => {
              showCalender();
              if (displayCalendar) {
                router.push({ pathname, query: filterQuery(query, 'displayCalendar') });
              } else {
                router.push({ pathname, query: { ...query, displayCalendar: !displayCalendar } });
              }
            }}
          >
            {displayCalendar ? (
              <div className="bg-primary bg-opacity-10 rounded-10 px-4 pt-2 pb-1">
                <Image src="/icons/calendarColorful.svg" width={25} height={22} />
              </div>
            ) : (
              <div className="px-4 pt-2 pb-1">
                <Image src="/icons/calendar.svg" width={25} height={22} />
              </div>
            )}
          </div>
        </div>
      </div>
      <div
        className={`mt-12 calender-slider px-4 2xs:px-6 2xl:px-10 -mx-4 2xs:-mx-6 2xl:-mx-10`}
        id="calenderSlider"
      >
        <div
          className="text-white text-20 font-medium cursor-pointer show"
          id="calender-title"
          onClick={changeCalendar}
        >
          {title}
        </div>
        <div className="animated-slider slick-slides-gap relative grid grid-cols-1 sm:mr-2 lg:mx-5 mt-8">
          <div
            className="hidden lg:block absolute top-7.5 -left-6 z-10 cursor-pointer prevArrow Arrow"
            onClick={handlePrevArrow}
          >
            <Image src="/icons/prevArrow.svg" width={10} height={20} alt="arrow" />
          </div>
          <Slider className="custom-slider" {...settings} ref={sliderRef}>
            {dates.map((d, index) => (
              <div
                key={d.key}
                id={`slide-${index}`}
                className={`my-slide bg-white bg-opacity-10 border border-solid border-fadeLightBlue1
                          rounded-20 active cursor-pointer`}
                onClick={() => setSelectedItem(index)}
              >
                <div
                  className="flex flex-col items-center"
                  style={{ height: 76, paddingTop: d.title2 ? 13 : 28 }}
                >
                  <div className="text-white font-light text-center">{d.title1}</div>
                  {d.title2 && (
                    <div className="text-20 text-white font-medium text-center">{d.title2}</div>
                  )}
                </div>
                {index === selectedItem && (
                  <div className="flex justify-center -mb-1">
                    <div className="bg-primary rounded-b-6" style={{ width: 30, height: 3 }} />
                  </div>
                )}
              </div>
            ))}
          </Slider>
          <div
            className="hidden lg:block absolute top-7.5 -right-6 z-10 cursor-pointer nextArrow Arrow"
            onClick={handleNextArrow}
          >
            <Image src="/icons/nextArrow.svg" width={10} height={20} alt="arrow" />
          </div>
        </div>
        <div className="lg:hidden flex justify-center items-center space-x-11 mt-4">
          <div className="text-white cursor-pointer " id="prevArrow" onClick={handlePrevArrow}>
            <Image src="/icons/prevArrow.svg" width={10} height={20} alt="arrow" />
          </div>
          <div className="cursor-pointer " id="nextArrow" onClick={handleNextArrow}>
            <Image src="/icons/nextArrow.svg" width={10} height={20} alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalendarSlider;
