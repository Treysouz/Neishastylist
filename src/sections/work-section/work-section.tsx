import { Suspense } from "react";
import { SectionWrapper, SectionHeader } from "..";
import { ImageActions } from "@/actions";
import { ErrorBoundary, Carousel } from "@/components";

async function Content() {
  try {
    const response = await ImageActions.getWorkImages();
    if (!response) {
      throw Error("Failed to get images");
    }
    return <Carousel imageUrls={response} />;
  } catch (error) {
    if (error instanceof Error) {
      return <ErrorBoundary svg="x-mark" header={error.message} />;
    }
  }
}

function Fallback() {
  return (
    <div className="w-full flex items-center justify-center p-8 h-40 md:h-80 xl:h-100">
      <div className="loading loading-spinner loading-xl text-primary" />
    </div>
  );
}

export default async function WorkSection() {
  return (
    <SectionWrapper
      id="work"
      className="px-2 sm:px-6 xl:px-14 py-8 space-y-8 xl:py-16 xl:space-y-16"
    >
      <SectionHeader>Our Work</SectionHeader>
      <Suspense fallback={<Fallback />}>
        <Content />
      </Suspense>
    </SectionWrapper>
  );
}
