"use client";

import { Card } from "@/components";
import Image from "next/image";
import { type RefObject, useEffect, useRef, useState } from "react";
import CarouselButton from "./components/carousel-button";

interface CarouselProps {
  /** Array of image Urls */
  imageUrls: string[];
}

export default function Carousel({ imageUrls }: CarouselProps) {
  const [carouselAtStart, setCarouselAtStart] = useState(false);
  const [carouselAtEnd, setCarouselAtEnd] = useState(false);

  const carouselRef: RefObject<HTMLDivElement | null> = useRef(null);

  const checkScrollPosition = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;

      // Check if at the beginning (with small tolerance for rounding)
      setCarouselAtStart(scrollLeft <= 1);

      // Check if at the end (with small tolerance for rounding)
      setCarouselAtEnd(scrollLeft + clientWidth >= scrollWidth - 1);
    }
  };

  useEffect(() => {
    const carousel = carouselRef.current;

    if (carousel) {
      // Check initial position
      checkScrollPosition();

      // Add scroll event listener
      carousel.addEventListener("scroll", checkScrollPosition);

      // Cleanup
      return () => {
        carousel.removeEventListener("scroll", checkScrollPosition);
      };
    }
  }, []);

  return (
    <div className="flex flex-row items-center space-x-2 sm:space-x-6 xl:space-x-14 w-full">
      <CarouselButton
        carouselRef={carouselRef}
        disabled={carouselAtStart}
        direction="l"
      />

      <div
        className="carousel rounded-box w-full space-x-4 sm:space-x-8"
        tabIndex={0}
        ref={carouselRef}
      >
        {imageUrls.map((imgUrl) => (
          <Card
            className="card carousel-item w-32 h-40 md:w-64 md:h-80 xl:w-80 xl:h-100"
            key={imgUrl}
          >
            <Image
              src={imgUrl}
              className="rounded-box object-cover h-full w-full"
              sizes="320px 400px"
              key={imgUrl}
              fill
              alt="Work"
            />
          </Card>
        ))}
      </div>

      <CarouselButton
        carouselRef={carouselRef}
        disabled={carouselAtEnd}
        direction="r"
      />
    </div>
  );
}
