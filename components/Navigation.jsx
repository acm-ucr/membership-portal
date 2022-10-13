import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import Image from "next/image";
import Toggle from "./Toggle";

const Navigation = () => {
  return (
    <Navbar
      collapseOnSelect
      className=" py-0 font-lexend w-full px-3 m-0 h-[12vh] bg-white border-acm-blue border-b-4 flex justify-center items-center"
      expand="md"
      fixed="top"
    >
      <Navbar.Brand>
        <Link href="/dashboard" passHref>
          <Nav.Link eventKey="1">
            <Image
              src="/acm-ucr-logo.png"
              alt="ACM at UCR"
              width={100}
              height={100}
            />
          </Nav.Link>
        </Link>
      </Navbar.Brand>
      <Nav className="float-left font-lexend font-medium text-2xl">
        membership portal
      </Nav>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse
        id="navbar-nav"
        className="-mt-2 flex justify-center items-center"
      >
        <Nav className=" w-12/12 no-underline ml-auto text-2xl">
          <Link href="/dashboard" passHref>
            <Nav.Link
              className="m-auto whitespace-nowrap w-full text-center !text-acm-black !font-medium hover:!text-acm-blue"
              eventKey="6"
            >
              dashboard
            </Nav.Link>
          </Link>
          <Link href="/profile" passHref>
            <Nav.Link
              className="m-auto whitespace-nowrap w-full text-center !text-acm-black !font-medium hover:!text-acm-blue"
              eventKey="2"
            >
              profile
            </Nav.Link>
          </Link>
          <Link href="/forms" passHref>
            <Nav.Link
              className="m-auto whitespace-nowrap w-full text-center !text-acm-black !font-medium hover:!text-acm-blue"
              eventKey="3"
            >
              forms
            </Nav.Link>
          </Link>
          <Link href="/resources" passHref>
            <Nav.Link
              className="m-auto whitespace-nowrap w-full text-center !text-acm-black !font-medium hover:!text-acm-blue"
              eventKey="4"
            >
              resources
            </Nav.Link>
          </Link>
          <Toggle />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
