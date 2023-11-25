/* eslint-disable import/no-unresolved */
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import green from "../assets/green.png";
import black from "../assets/black.png";
import blue from "../assets/blue.png";
import girl1 from "../assets/girl1.png";
import girl2 from "../assets/girl2.png";

const Home = () => {
  const backgrounds = [
    {
      text: "heritage hoodies",
      image: green,
      link: "shop now",
      url: "https://bravaland.com/collections/heritage-hoodies",
    },
    {
      text: "premium zip hoodies",
      image: black,
      link: "shop now",
      url: "https://bravaland.com/collections/premium-zip-hoodies",
    },
    {
      text: "heritage women's tanks",
      image: blue,
      link: "shop now",
      url: "https://bravaland.com/collections/womens-tanks",
    },
    {
      text: "premium tees",
      image: girl1,
      link: "shop now",
      url: "https://bravaland.com/collections/premium-tees",
    },
    {
      text: "heritage tees",
      image: girl2,
      link: "shop now",
      url: "https://bravaland.com/collections/heritage-tees",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? backgrounds.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isFinalIndex = currentIndex === backgrounds.length - 1;
    const newIndex = isFinalIndex ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const isEvenIndex = currentIndex % 2 === 0;
  const textPosition = isEvenIndex ? "left-20" : "right-20";
  const linkPosition = isEvenIndex ? "left-10" : "right-10";

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % backgrounds.length);
    }, 100000);

    return () => clearTimeout(timeOut);
  }, [currentIndex]);

  return (
    <div className="w-full relative group image-container">
      <div className="w-full h-full rounded-2xl bg-center bg-cover duration-500">
        <Image src={backgrounds[currentIndex].image} alt="model" />
        <div
          className={`absolute top-[50%] -translate-y-[-50%] ${textPosition} text-2xl p-2 bg-black/20 text-white bg-black hover:text-black rounded-full cursor-pointer font-lexend flex-col`}
        >
          {backgrounds[currentIndex].text}
          <br />
          <Link href={backgrounds[currentIndex].url}>
            <button
              type="button"
              className="mt-10 border border-bg-white bg-black px-5 py-2 text-sm text-black rounded-full"
            >
              {backgrounds[currentIndex].link}
            </button>
          </Link>
        </div>
      </div>

      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl p-2 bg-black/20 text-white bg-black hover:text-black hover:bg-white rounded-full cursor-pointer">
        <i className="fa-solid fa-arrow-left" onClick={prevSlide} />
      </div>

      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white bg-black hover:text-black hover:bg-white cursor-pointer">
        <i className="fa-solid fa-arrow-right" onClick={nextSlide} />
      </div>
    </div>
  );
};

export default Home;
