"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import IMAGES from "../../assets/images.jsx";
import "./navbar.scss";

const Navbar = () => {
  const pathName = usePathname();
  let [menuOpened, setMenu] = useState(false);

  useEffect(() => {}, []);
  return (
    <header className="header">
      <nav>
        <div className="logo-holder">
          <Link href="/" className="logo-link">
            <Image
              src={IMAGES.logo}
              alt="Phoenix"
              width="100"
              height={100}
              priority={true}
            />
          </Link>
        </div>
        <div>
          {/* <div className="phone-holder">
              <img src={IMAGES.phone} alt="phone" className="phone" />
              <strong>902-393-8289</strong>
            </div> */}
          <ul>
            {/* <li className="hamburger-menu-trigger">
                <button
                  className="menu-trigger"
                  onClick={() => setMenu(!menuOpened)}
                >
                  <img src={IMAGES.menu} alt="Menu" />
                </button>
              </li> */}
            <li>
              <Link
                href="/about"
                className={pathName === "/about" ? "active" : ""}
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className={pathName === "/services" ? "active" : ""}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/account"
                className={pathName === "/account" ? "active" : ""}
              >
                My Account
              </Link>
            </li>
            <li>
              <Link
                href="/contact-us"
                className={pathName === "/contact-us" ? "active" : ""}
              >
                Contact US
              </Link>
            </li>{" "}
            <button
              type="button"
              className="text-white focus:outline-none rounded-full text-sm px-6 py-3 text-center cursor-pointer estimate-btn"
            >
              Get a free estimate
            </button>
          </ul>
        </div>
      </nav>
      {/* <div
          className={`hamburger-menu ${
            menuOpened ? "menu-expanded" : "menu-collapsed"
          }`}
        >
          <ul>
            <li>
              <Link href="/" className={pathName === "" ? "active" : ""}>
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className={pathName === "" ? "active" : ""}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/contact-us"
                className={pathName === "" ? "active" : ""}
              >
                Contact US
              </Link>
            </li>
         
          </ul>
        </div> */}
    </header>
  );
};

export default Navbar;
