import { Card } from "@/components";
import Image from "next/image";
import { MouseEventHandler } from "react";

interface ImageCardProps {
  /**Url for image */
  imgUrl: string;
  /** Click event handler for image card */
  onClick?: MouseEventHandler;
}

/** Card component that wraps an image for the carousel component */
export default function ImageCard({ imgUrl, onClick }: ImageCardProps) {
  return (
    <button onClick={onClick} aria-label="View Image">
      <Card
        className="card carousel-item w-32 h-40 md:w-64 md:h-80 xl:w-80 xl:h-100 shadow-lg"
        key={imgUrl}
      >
        <Image
          src={imgUrl}
          className="rounded-box object-cover h-full w-full"
          sizes="128px 160px, (min-width:768px) 256px 320px, (min-width:1280px) 320px 400px"
          key={imgUrl}
          fill
          alt="Work"
        />
      </Card>
    </button>
  );
}
