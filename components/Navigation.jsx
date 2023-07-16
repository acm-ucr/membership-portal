import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import Image from "next/image";
import NavImage from "../public/acm-ucr-logo.webp";
import { useSession, signOut } from "next-auth/react";

const Navigation = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <Navbar
        collapseOnSelect
        className="py-0 font-lexend w-full px-3 m-0 min-h-[8vh] bg-white border-acm-blue border-b-4 flex justify-between items-center"
        expand="md"
        fixed="top"
      >
        {console.log("NAV", session)}
        <Navbar.Brand className="flex flex-row items-center p-0 m-0">
          <Link href={`${session.user ? "/user/dashboard" : "/"}  `}>
            <div className="flex items-center justify-center">
              <Image src={NavImage} alt="ACM at UCR" width={50} height={50} />
              <div className="hidden lg:block">
                <p className="m-0 font-lexend font-medium text-2xl cursor-pointer">
                  membership portal
                </p>
              </div>
            </div>
          </Link>
        </Navbar.Brand>

        {session.user.verified && (
          <>
            <Navbar.Toggle className="!text-sm" aria-controls="navbar-nav" />
            <Navbar.Collapse
              id="navbar-nav"
              className="-mt-2 flex justify-center md:justify-end items-center"
            >
              <Nav className="no-underline text-2xl flex justify-center items-center">
                <Link href="/user/dashboard">
                  <p className="hover:cursor-pointer my-0 mx-2 whitespace-nowrap w-full text-center !text-acm-black !font-medium hover:!text-acm-blue">
                    dashboard
                  </p>
                </Link>
                <Link href="/user/profile">
                  <p className="hover:cursor-pointer my-0 mx-2 whitespace-nowrap w-full text-center !text-acm-black !font-medium hover:!text-acm-blue">
                    profile
                  </p>
                </Link>
                <Link href="/user/resources">
                  <p className="hover:cursor-pointer my-0 mx-2 whitespace-nowrap w-full text-center !text-acm-black !font-medium hover:!text-acm-blue">
                    resources
                  </p>
                </Link>
                <Link href="/user/calendar">
                  <p className="hover:cursor-pointer my-0 mx-2 whitespace-nowrap w-full text-center !text-acm-black !font-medium hover:!text-acm-blue">
                    calendar
                  </p>
                </Link>
                <Link href="/user/clubroom">
                  <p className="hover:cursor-pointer my-0 mx-2 whitespace-nowrap w-full text-center !text-acm-black !font-medium hover:!text-acm-blue">
                    clubroom
                  </p>
                </Link>
                <Link href="/user/resume">
                  <p className="hover:cursor-pointer my-0 mx-2 whitespace-nowrap w-full text-center !text-acm-black !font-medium hover:!text-acm-blue">
                    resume
                  </p>
                </Link>
                <Link href="/">
                  <p
                    className="hover:cursor-pointer my-0 px-3 py-2 whitespace-nowrap w-full text-center !text-acm-black !font-medium hover:!text-acm-white bg-acm-gray rounded-xl ml-6"
                    onClick={() =>
                      signOut({ callbackUrl: "/", redirect: true })
                    }
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
  }
};

export default Navigation;
