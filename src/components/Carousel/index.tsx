"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./styles.module.scss";
import casaco from '@/assets/casaco.png'
import casaco1 from '@/assets/casaco1.png'
import blender from '@/assets/blender.webp'

import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

export const Carousel = () => {
  const [init, setInit] = useState(0);
  const [end, setEnd] = useState(3);
  const [open, setOpen] = useState(true);
  const imgs = [casaco1, casaco1, casaco1, blender, blender,blender,casaco,casaco,casaco];
  const increaseCarousel = (newInitValue:number = 3, newEndValue:number=3) => {
    if(end   >= imgs.length ){
             
      setOpen(false)
      setInit(0)
      setEnd(3)
      
      setTimeout(() => setOpen(true), 300);
      return 
  }
  setOpen(false);
  setInit(init + 3 );
  setEnd(end + 3);
  
  setTimeout(() => setOpen(true), 300);
  
  }
  const decreaseCarousel=() => {
    if(init <= 0){
    
      setOpen(false)
      setInit(imgs.length -3)
      setEnd(imgs.length)
      setTimeout(() => setOpen(true), 300);
      return
  }
setOpen(false);
setInit(init - 3);
setEnd(end - 3);
setTimeout(() => setOpen(true), 300);
  }

  const handleIncreaseCarousel = () => {
    increaseCarousel()
  }
const handleDecreaseCarousel =() => {
  decreaseCarousel()
}

  return (
    <section className={styles.wrapperCarousel}>
      {imgs.slice(init, end).map((img, index) => (
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
      <button
        onClick={
            handleIncreaseCarousel
        }
      >
        <IoIosArrowForward />
      </button>
      <button
        onClick={() => {
       
          handleDecreaseCarousel
       
        }}
      >
        <IoIosArrowBack />
      </button>
      </div>
    </section>
  );
};
