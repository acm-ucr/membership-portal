import React, { useContext } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import Image from "next/image";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import UserContext from "./UserContext";

const Navigation = () => {
  const { user, setUser } = useContext(UserContext);
  console.log(user);

  const logout = () => {
    signOut(auth)
      .then((response) => {
        console.log(response);
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Navbar
      collapseOnSelect
      className="py-0 font-lexend w-full px-3 m-0 min-h-[8vh] bg-white border-acm-blue border-b-4 flex justify-between items-center"
      expand="md"
      fixed="top"
    >
      <Navbar.Brand className="flex flex-row items-center p-0 m-0">
        <Link href="/dashboard">
          <Image
            src="/acm-ucr-logo.png"
            alt="ACM at UCR"
            width={50}
            height={50}
          />
        </Link>
        <div className="hidden lg:block">
          <Link href="/dashboard">
            <p className="m-0 font-lexend font-medium text-2xl cursor-pointer">
              membership portal
            </p>
          </Link>
        </div>
      </Navbar.Brand>

      {user && (
        <>
          <Navbar.Toggle className="!text-sm" aria-controls="navbar-nav" />
          <Navbar.Collapse
            id="navbar-nav"
            className="-mt-2 flex justify-center md:justify-end items-center"
          >
            <Nav className="no-underline text-2xl flex justify-center items-center">
              <Link href="/dashboard" passHref>
                <Nav.Link
                  className="my-0 whitespace-nowrap w-full text-center !text-acm-black !font-medium hover:!text-acm-blue"
                  eventKey="6"
                >
                  dashboard
                </Nav.Link>
              </Link>
              <Link href="/profile" passHref>
                <Nav.Link
                  className="my-0 whitespace-nowrap w-full text-center !text-acm-black !font-medium hover:!text-acm-blue"
                  eventKey="2"
                >
                  profile
                </Nav.Link>
              </Link>
              {/* <Link href="/user/forms" passHref>
                <Nav.Link
                  className="m-auto whitespace-nowrap w-full text-center !text-acm-black !font-medium hover:!text-acm-blue"
                  eventKey="3"
                >
                  forms
                </Nav.Link>
              </Link> */}
              <Link href="/resources" passHref>
                <Nav.Link
                  className="my-0 whitespace-nowrap w-full text-center !text-acm-black !font-medium hover:!text-acm-blue"
                  eventKey="4"
                >
                  resources
                </Nav.Link>
              </Link>
              <Link href="/calendar" passHref>
                <Nav.Link
                  className="my-0 whitespace-nowrap w-full text-center !text-acm-black !font-medium hover:!text-acm-blue"
                  eventKey="5"
                >
                  calendar
                </Nav.Link>
              </Link>
              <Link href="/clubroom" passHref>
                <Nav.Link
                  className="m-auto whitespace-nowrap w-full text-center !text-acm-black !font-medium hover:!text-acm-blue"
                  eventKey="5"
                >
                  clubroom
                </Nav.Link>
              </Link>
              <Link href="/" passHref>
                <Nav.Link
                  className="my-0 whitespace-nowrap w-full text-center !text-acm-black !font-medium hover:!text-acm-white bg-acm-gray rounded-lg"
                  eventKey="7"
                  onClick={logout}
                >
                  logout
                </Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </>
      )}
    </Navbar>
  );
};

export default Navigation;
