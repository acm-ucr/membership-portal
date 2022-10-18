import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

const images = ["/pic-default.png", "/fake-qr.png"];
const msg = ["swipe for member QR code >>", "<< swipe for profile picture"];

const QRCode = () => {
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
    <div className="w-[40%] h-[30%] text-acm-athiti">
      <Container
        onClick={goToNext}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <Row className="bg-acm-gray rounded-[10%] ">
          <Col className="text-center">
            <Image
              src={images[currentIndex]}
              alt="som"
              width={500}
              height={500}
            />
            <div className="d-inline-flex">
              {images.map((slides, slideIndex) => (
                <div
                  key={slides}
                  className={
                    currentIndex === slideIndex
                      ? "text-acm-darkgray pr-2"
                      : "text-acm-white pr-2"
                  }
                >
                  ●
                </div>
              ))}
            </div>
          </Col>
        </Row>
        <Row className="mt-2 text-center font-bold text-[50%] sm:text-[45%] md:text-[75%] lg:text-[80%] xl:text-[80%]">
          <Col>{msg[currentIndex]}</Col>
        </Row>
      </Container>
    </div>
  );
};

export default QRCode;
