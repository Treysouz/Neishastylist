"use client";

import { Modal } from "@/components";
import {
  type RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import CarouselButton from "./components/carousel-button";
import ImageCard from "./components/image-card";
import ImageModalContent from "./components/image-modal-content";
import { motion } from "motion/react";

interface CarouselProps {
  /** Array of image Urls */
  imageUrls: string[];
}

export default function Carousel({ imageUrls }: CarouselProps) {
  const [carouselAtStart, setCarouselAtStart] = useState(false);
  const [carouselAtEnd, setCarouselAtEnd] = useState(false);
  const [modalImageUrl, setModalImageUrl] = useState<string>("");

  /** Reference to carousel div element */
  const carouselRef: RefObject<HTMLDivElement | null> = useRef(null);
  /** Reference to modal's dialog element   */
  const modalRef = useRef<HTMLDialogElement>(null);

  const checkScrollPosition = useCallback(() => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;

      // Check if at the beginning (with small tolerance for rounding)
      setCarouselAtStart(scrollLeft <= 1);

      // Check if at the end (with small tolerance for rounding)
      setCarouselAtEnd(scrollLeft + clientWidth >= scrollWidth - 1);
    }
  }, [carouselRef]);

  /**
   * Opens image modal and sets image url for modal
   * @param imgUrl
   */
  const showImageModal = useCallback(
    (imgUrl: string) => {
      modalRef.current?.showModal();
      setModalImageUrl(imgUrl);
    },
    [modalRef]
  );

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
  }, [carouselRef, checkScrollPosition]);

  return (
    <div className="w-full h-full">
      <Modal ref={modalRef}>
        <ImageModalContent imgUrl={modalImageUrl} />
      </Modal>
      <div className="flex flex-row items-center space-x-2 sm:space-x-6 xl:space-x-14 w-full">
        <CarouselButton
          carouselRef={carouselRef}
          disabled={carouselAtStart}
          direction="l"
        />
        <motion.div
          className="carousel overflow-y-hidden rounded-box w-full space-x-4 sm:space-x-8"
          tabIndex={0}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          ref={carouselRef}
        >
          {imageUrls.map((imgUrl) => (
            <ImageCard
              imgUrl={imgUrl}
              onClick={() => {
                showImageModal(imgUrl);
              }}
              key={imgUrl}
            />
          ))}
        </motion.div>

        <CarouselButton
          carouselRef={carouselRef}
          disabled={carouselAtEnd}
          direction="r"
        />
      </div>
    </div>
  );
}
