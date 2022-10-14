import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Row, Col, Container } from "react-bootstrap";

const Confirmation = () => {
  return (
    <div className="w-[45%] h-[20%]">
      <Container className="font-bold font-lexend mb-4">
        <Row>
          <Col className="bg-acm-blue rounded-[10%]">
            <div className="pl-[5%] pr-[5%] text-center text-acm-black font-bold pt-[12%]">
              <h3 className="text-[150%]">
                welcome! you are now an official member of
              </h3>
            </div>

            <div className="bg-acm-black rounded-3xl w-3/4 mx-auto px-2.5">
              <Image
                layout="responsive"
                src="/acmucr.png"
                alt="acm logo"
                width={200}
                height={70}
              />
            </div>

            <div className="text-center pt-[2.5%] pb-[12%]">
              <Link
                href="/"
                className="bg-acm-gray text-black text-center text-[60%] sm:text-[75%] md:text-[100%] lg:text-[100%] xl:text-[100%] rounded-full w-[50%] h-[100%] p-[.25%]"
              >
                back to sign in
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Confirmation;
