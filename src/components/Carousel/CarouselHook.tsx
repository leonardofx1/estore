
import casaco from "@/assets/casaco.png";
import casaco1 from "@/assets/casaco1.png";
import blender from "@/assets/blender.webp";
import { useEffect, useState } from "react";


const  CarouselHook = () => {
    
const [startIndex, setStartIndex] = useState<number>(0);
const [endIndex, setEndIndex] = useState<number>(3);
const [open, setOpen] = useState(true);
const [imgsViews, setImgswies] = useState(0)

const imgs = [
  casaco1,
  casaco1,
  casaco1,
  blender,
  blender,
  blender,
  casaco,
  casaco,
  casaco,
];
useEffect(() => {
  const width = window.innerWidth
    if(width < 700){
       setImgswies(1)
       setEndIndex(1)
      
       return
    }
    setImgswies(3)
}, [])
const updateCarousel = (
) => {
  const increment =( ) =>  {
    setStartIndex( (oldInit) => oldInit + imgsViews);
    setEndIndex((oldEnd) => oldEnd + imgsViews);
  }
  const decrement =() =>  {
    setStartIndex((oldInit) => oldInit - imgsViews);
    setEndIndex((oldEnd) => oldEnd - imgsViews);
  }
  const reset = () => {
    setStartIndex(0)
    setEndIndex(imgsViews)
  }
  return {reset, increment,decrement}
};
const increaseCarousel = () => {
  if (endIndex >= imgs.length) {
    setOpen(false);
    updateCarousel().reset();
    setTimeout(() => setOpen(true), 300);
    return;
  }
  setOpen(false);
  updateCarousel().increment();

  setTimeout(() => setOpen(true), 300);
};
const decreaseCarousel = () => {
  if (startIndex <= 0) {
    setOpen(false);
    updateCarousel().reset();
    setTimeout(() => setOpen(true), 300);
    return;
  }
  setOpen(false);
  updateCarousel().decrement();
  setTimeout(() => setOpen(true), 300);
};

const handleIncreaseCarousel = () => {
  increaseCarousel();
};
const handleDecreaseCarousel = () => {
  decreaseCarousel();
};
return {
    handleDecreaseCarousel,handleIncreaseCarousel, open,startIndex,endIndex, imgs
}
}

export default CarouselHook