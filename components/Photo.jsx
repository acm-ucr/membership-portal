import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
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
  return (
    <Row className="w-full">
      <Container>
        <Image src={images[currentIndex]} alt="som" width={500} height={500} />
      </Container>
      <Row>
        <Col xl={5}>
          <button
            className=" w-full mt-3 py-2 font-lexend font-bold text-acm-black border-2 border-acm-lightpurple text-2xl transition-colors duration-150 bg-acm-lightpurple rounded-lg focus:shadow-outline hover:border-acm-black "
            onClick={goToNext}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            QR Code/Profile Picture
          </button>
        </Col>
      </Row>
    </Row>
  );
};

export default Photo;
