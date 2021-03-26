import { useState } from "react";

export type useCarouselReturn = {
  slides: any[];
};
export function useCarousel(props: useCarouselReturn) {
  const { slides } = props;
  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesCount = slides.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };
  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };
  const setSlide = (s: number) => {
    setCurrentSlide(s);
  };

  const isFirstSlide = currentSlide === 0;
  const isLastSlide = currentSlide === slides.length - 1;
  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };
  return {
    currentSlide,
    prevSlide,
    nextSlide,
    setSlide,
    isFirstSlide,
    isLastSlide,
    carouselStyle,
  };
}
