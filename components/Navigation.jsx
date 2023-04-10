import React, { useContext } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import Image from "next/image";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import UserContext from "./UserContext";
import { useRouter } from "next/router";

const Navigation = () => {
  const { user, setUser } = useContext(UserContext);
  const router = useRouter();

  const logout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        router.push("/");
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
        <Link href={`${user ? "/dashboard" : "/"}  `}>
          <div className="flex items-center justify-center">
            <Image
              src="/acm-ucr-logo.png"
              alt="ACM at UCR"
              width={50}
              height={50}
            />
            <div className="hidden lg:block">
              <p className="m-0 font-lexend font-medium text-2xl cursor-pointer">
                membership portal
              </p>
            </div>
          </div>
        </Link>
      </Navbar.Brand>

      {/* {!user && (
        <>
          <Navbar.Toggle className="!text-sm" aria-controls="navbar-nav" />
          <Navbar.Collapse
            id="navbar-nav"
            className="-mt-2 flex justify-center md:justify-end items-center"
          >
            <Nav className="no-underline text-2xl flex justify-center items-center">
              <Link href="/apply">
                <p className="hover:cursor-pointer my-0 mx-2 whitespace-nowrap w-full text-center !text-acm-black !font-medium hover:!text-acm-blue">
                  become a member
                </p>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </>
      )} */}

      {user && (
        <>
          <Navbar.Toggle className="!text-sm" aria-controls="navbar-nav" />
          <Navbar.Collapse
            id="navbar-nav"
            className="-mt-2 flex justify-center md:justify-end items-center"
          >
            <Nav className="no-underline text-2xl flex justify-center items-center">
              <Link href="/dashboard">
                <p className="hover:cursor-pointer my-0 mx-2 whitespace-nowrap w-full text-center !text-acm-black !font-medium hover:!text-acm-blue">
                  dashboard
                </p>
              </Link>
              <Link href="/profile">
                <p className="hover:cursor-pointer my-0 mx-2 whitespace-nowrap w-full text-center !text-acm-black !font-medium hover:!text-acm-blue">
                  profile
                </p>
              </Link>
              <Link href="/resources">
                <p className="hover:cursor-pointer my-0 mx-2 whitespace-nowrap w-full text-center !text-acm-black !font-medium hover:!text-acm-blue">
                  resources
                </p>
              </Link>
              <Link href="/calendar">
                <p className="hover:cursor-pointer my-0 mx-2 whitespace-nowrap w-full text-center !text-acm-black !font-medium hover:!text-acm-blue">
                  calendar
                </p>
              </Link>
              <Link href="/clubroom">
                <p className="hover:cursor-pointer my-0 mx-2 whitespace-nowrap w-full text-center !text-acm-black !font-medium hover:!text-acm-blue">
                  clubroom
                </p>
              </Link>
              <Link href="/">
                <p
                  className="hover:cursor-pointer my-0 px-2 py-1 whitespace-nowrap w-full text-center !text-acm-black !font-medium hover:!text-acm-white bg-acm-gray rounded-xl ml-6"
                  onClick={logout}
                >
                  logout
                </p>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </>
      )}
    </Navbar>
  );
};

export default Navigation;
