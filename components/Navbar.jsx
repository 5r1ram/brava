import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// import images from "../assets";

const Navbar = () => (
  <div className="flex flex-row justify-between items-center bg-gray text-white h-20">
    <ul className="flex justify-around items-center gap-10 ml-10">
      <li>
        <Link href="https://bravaland.com/pages/brands">
          <button type="button">brands</button>
        </Link>
      </li>
      <li>
        <Link href="https://bravaland.com/collections/all-products">
          <button type="button">shop</button>
        </Link>
      </li>
      <li>
        <Link href="https://bravaland.com/collections/premium">
          <button type="button">premium</button>
        </Link>
      </li>
      <li>
        <Link href="https://bravaland.com/collections/gift-cards">
          <button type="button">gift cards</button>
        </Link>
      </li>
    </ul>

    <div>
      <Image />
    </div>

    <div className="flex justify-around items-center">
      <div>
        <Link href="https://bravaland.com/collections/gift-cards">
          <button type="button">become an affiliate</button>
        </Link>
      </div>

      <div className="flexBetween">
        <div>
          <Link href="https://twitter.com/mybravaland">
            <button type="button">
              <i className="fa-brands fa-square-twitter" />
            </button>
          </Link>
        </div>
        <div>
          <Link href="https://www.tiktok.com/notfound">
            <button type="button">
              <i className="fa-brands fa-tiktok" />
            </button>
          </Link>
        </div>
        <div>
          <Link href="https://www.instagram.com/bravamarketplace">
            <button type="button">
              <i className="fa-brands fa-instagram" />
            </button>
          </Link>
        </div>
        <div>
          <Link href="https://bravaland.com/account/login">
            <button type="button">
              <i className="fa-solid fa-user" />
            </button>
          </Link>
        </div>
        <div>
          <Link href="">
            <button type="button">
              <i className="fa-solid fa-magnifying-glass" />
            </button>
          </Link>
        </div>
        <div>
          <Link href="">
            <button type="button" />
            <i className="fa-solid fa-cart-shopping" />
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Navbar;
