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
    { image: green },
    { image: black },
    { image: blue },
    { image: girl1 },
    { image: girl2 },
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

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % backgrounds.length);
    }, 5000);

    return () => clearTimeout(timeOut);
  }, [currentIndex]);

  return (
    <div className="w-full relative group">
      <div className="w-full h-full rounded-2xl bg-center bg-cover duration-500">
        <Image src={backgrounds[currentIndex].image} alt="model" />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <i className="fa-solid fa-arrow-left" onClick={prevSlide} />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <i className="fa-solid fa-arrow-right" onClick={nextSlide} />
      </div>
    </div>
  );
};

export default Home;
