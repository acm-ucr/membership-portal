import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

const images = ["/1643607679196.png", "/fake-qr.png"];

const Photo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 30;

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const onTouchStart = (e) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isRightSwipe || isLeftSwipe) {
      goToNext;
    }
  };
  if (currentIndex == 0) {
    return (
      <div className="w-full flex justify-center items-center">
            <button
              className="flex justify-center items-center w-1/12 mr-4 mt-3 py-2 font-lexend font-bold  text-5xl"
              onClick={goToNext}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <FaChevronLeft className="hover:fill-acm-lightpurple"/>
            </button>
          <Image
            src={images[currentIndex]}
            alt="som"
            width={500}
            height={500}
          />
            <button className="flex justify-center items-center w-1/12 ml-4 mt-3 py-2 font-lexend font-bold text-5xl"
            >
              <FaChevronRight className="hover:fill-acm-lightpurple"/>
            </button>
      </div>
    );
  } else {
    return (
      <div className="w-full flex justify-center items-center">
            <button
              className="flex justify-center items-center w-1/12 mr-4 mt-3 py-2 font-lexend font-bold text-5xl"
              
            >
              <FaChevronLeft  className="hover:fill-acm-lightpurple"/>
            </button>
          <Image
            src={images[currentIndex]}
            alt="som"
            width={500}
            height={500}
          />
            <button className="flex justify-center items-center w-1/12 ml-4 mt-3 py-2 font-lexend font-bold text-5xl"
            onClick={goToNext}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            >
              <FaChevronRight className="hover:fill-acm-lightpurple"/>
            </button>
      </div>
    );
  }
};

export default Photo;
