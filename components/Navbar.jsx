/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { BrandsMenu, ShopMenu } from ".";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [openBrandMenu, setOpenBrandMenu] = useState(false);
  const [openShopMenu, setOpenShopMenu] = useState(false);

  // console.log(images);

  return (
    <nav className="flexBetween w-full fixed bg-gray text-white h-20 px-10 p-4">
      {/* primary-menu */}
      <ul className="flex justify-around items-center gap-10 ">
        <li className="flexBetween menu-link">
          <Link href="https://bravaland.com/pages/brands">
            <button
              type="button"
              onMouseEnter={() => setOpenBrandMenu(true)}
              onMouseLeave={() => setOpenBrandMenu(false)}
            >
              brands
              <i
                className="fa-solid fa-angle-down"
                style={{ fontSize: "0.6rem", marginLeft: "0.3rem" }}
              />
            </button>
            {openBrandMenu && <BrandsMenu />}
          </Link>
        </li>
        <li className="flexCenter menu-link">
          <Link href="https://bravaland.com/collections/all-products">
            <button
              type="button"
              onMouseEnter={() => setOpenShopMenu(true)}
              onMouseLeave={() => setOpenShopMenu(false)}
            >
              shop
              <i
                className="fa-solid fa-angle-down"
                style={{ fontSize: "0.6rem", marginLeft: "0.3rem" }}
              />
            </button>
            {openShopMenu && <ShopMenu />}
          </Link>
        </li>
        <li className="menu-link">
          <Link href="https://bravaland.com/collections/premium">
            <button type="button">premium</button>
          </Link>
        </li>
        <li className="menu-link">
          <Link href="https://bravaland.com/collections/gift-cards">
            <button type="button">gift cards</button>
          </Link>
        </li>
      </ul>

      {/* Logo */}
      <div className="flex flex-row w-32">
        <Link href="/">
          <div>
            <Image src={logo} objectFit="contain" alt="logo" />
          </div>
        </Link>
      </div>

      {/* social-links */}
      <div className="flex justify-evenly items-center gap-5">
        <div className="menu-link">
          <Link href="https://bravaland.com/collections/gift-cards">
            <button type="button">become an affiliate</button>
          </Link>
        </div>

        <ul className="flexBetween gap-5">
          <li className="menu-link">
            <Link href="https://twitter.com/mybravaland">
              <button type="button">
                <i
                  className="fa-brands fa-twitter"
                  style={{ fontSize: "1rem" }}
                />
              </button>
            </Link>
          </li>
          <li className="menu-link">
            <Link href="https://www.tiktok.com/notfound">
              <button type="button">
                <i
                  className="fa-brands fa-tiktok"
                  style={{ fontSize: "1rem" }}
                />
              </button>
            </Link>
          </li>
          <li className="menu-link">
            <Link href="https://www.instagram.com/bravamarketplace">
              <button type="button">
                <i
                  className="fa-brands fa-instagram"
                  style={{ fontSize: "1rem" }}
                />
              </button>
            </Link>
          </li>
          <li className="menu-link">
            <Link href="https://bravaland.com/account/login">
              <button type="button">
                <i className="fa-solid fa-user" style={{ fontSize: "1rem" }} />
              </button>
            </Link>
          </li>
          <li className="menu-link">
            <button type="button">
              <i
                className="fa-solid fa-magnifying-glass"
                style={{ fontSize: "1rem" }}
              />
            </button>
          </li>
          <li className="menu-link">
            <button type="button" />
            <i
              className="fa-solid fa-cart-shopping cursor-pointer"
              style={{ fontSize: "1rem" }}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
