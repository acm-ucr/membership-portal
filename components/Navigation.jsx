import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import Image from "next/image";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const Navigation = () => {
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, async (currentState) => {
      if (currentState !== null) {
        console.log(currentState.email);
        const response = await axios.post("/api/profile/verifyUser", {
          uid: currentState.uid,
        });
        if (response.status === 200) {
          setVerified(true);
        }
      }
    });
  }, []);

  const logout = () => {
    signOut(auth)
      .then((response) => {
        console.log(response);
        setVerified(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Navbar
      collapseOnSelect
      className="py-0 font-lexend w-full px-3 m-0 min-h-[10vh] bg-white border-acm-blue border-b-4 flex justify-between items-center"
      expand="md"
      fixed="top"
    >
      <Navbar.Brand className="flex flex-row items-center p-0 m-0">
        <Link href="/user/dashboard">
          <Image
            src="/acm-ucr-logo.png"
            alt="ACM at UCR"
            width={80}
            height={80}
          />
        </Link>
        <div className="hidden lg:block">
          <Link href="/user/dashboard">
            <p className="m-0 font-lexend font-medium text-2xl cursor-pointer">
              membership portal
            </p>
          </Link>
        </div>
      </Navbar.Brand>

      {verified && (
        <>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse
            id="navbar-nav"
            className="-mt-2 flex justify-center md:justify-end items-center"
          >
            <Nav className=" no-underline text-2xl flex justify-center items-center">
              <Link href="/user/dashboard" passHref>
                <Nav.Link
                  className="m-auto whitespace-nowrap w-full text-center !text-acm-black !font-medium hover:!text-acm-blue"
                  eventKey="6"
                >
                  dashboard
                </Nav.Link>
              </Link>
              <Link href="/user/profile" passHref>
                <Nav.Link
                  className="m-auto whitespace-nowrap w-full text-center !text-acm-black !font-medium hover:!text-acm-blue"
                  eventKey="2"
                >
                  profile
                </Nav.Link>
              </Link>
              <Link href="/user/forms" passHref>
                <Nav.Link
                  className="m-auto whitespace-nowrap w-full text-center !text-acm-black !font-medium hover:!text-acm-blue"
                  eventKey="3"
                >
                  forms
                </Nav.Link>
              </Link>
              <Link href="/user/resources" passHref>
                <Nav.Link
                  className="m-auto whitespace-nowrap w-full text-center !text-acm-black !font-medium hover:!text-acm-blue"
                  eventKey="4"
                >
                  resources
                </Nav.Link>
              </Link>
              <Link href="/user/calendar" passHref>
                <Nav.Link
                  className="m-auto whitespace-nowrap w-full text-center !text-acm-black !font-medium hover:!text-acm-blue"
                  eventKey="5"
                >
                  calendar
                </Nav.Link>
              </Link>
              <Link href="/" passHref>
                <Nav.Link
                  className="m-4 whitespace-nowrap w-full text-center !text-acm-black !font-medium hover:!text-acm-white bg-acm-gray rounded-lg"
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
