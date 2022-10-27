import React from "react";
import { Row, Col } from "react-bootstrap";

const msg = ["swipe for member QR code >>", "<< swipe for profile picture"];
const QRCode = () => {
  return (
    <div className="w-[40%] h-[30%] text-acm-athiti">
      <Row className="bg-acm-gray rounded-[10%] ">
        <Col className="text-center">
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
    </div>
  );
};

export default QRCode;
