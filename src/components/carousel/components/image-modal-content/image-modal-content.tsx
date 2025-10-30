"use client";

import Image from "next/image";
import { useCallback, useState, type ReactEventHandler } from "react";

interface ImageModalContentProps {
  /**Url for image */
  imgUrl: string;
}

/** Content to render in modal when an image card component is clicked */
export default function ImageModalContent({ imgUrl }: ImageModalContentProps) {
  const [dimensions, setDimensions] = useState<{
    width: number;
    height: number;
  } | null>(null);

  const onImageLoad: ReactEventHandler<HTMLImageElement> = useCallback(
    (event) => {
      const img = event.currentTarget;
      setDimensions({
        width: img.width,
        height: img.height,
      });
    },
    []
  );

  if (imgUrl) {
    return (
      <div className="flex items-center justify-center">
        <Image
          src={imgUrl}
          className="rounded-box object-cover h-full w-full"
          onLoad={onImageLoad}
          key={imgUrl}
          width={dimensions?.width || 0}
          height={dimensions?.height || 0}
          alt="Work"
        />
      </div>
    );
  }
  return null;
}
