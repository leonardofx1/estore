"use client";

import Image from "next/image";
import styles from "./styles.module.scss";

import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import CarouselHook from "./CarouselHook";

export const Carousel = () => {
  const {handleDecreaseCarousel,handleIncreaseCarousel,open,endIndex,startIndex,imgs} = CarouselHook() 
  return (
    <section className={styles.wrapperCarousel}>
      {imgs.slice(startIndex, endIndex).map((img, index) => (
        <Image
          className={open ? styles.view : styles.close}
          height={200}
          width={200}
          src={img}
          alt="img carousel"
          key={index}
        />
      ))}
      <div>
        <button onClick={handleDecreaseCarousel}>
          <IoIosArrowBack />
        </button>
        <button onClick={handleIncreaseCarousel}>
          <IoIosArrowForward />
        </button>

      </div>
    </section>
  );
};
