import { Suspense } from "react";
import SectionWrapper from "./section-wrapper";
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
    <div className="w-full h-full flex items-center justify-center p-8">
      <div className="loading loading-spinner loading-xl text-primary" />
    </div>
  );
}

export default async function WorkSection() {
  return (
    <SectionWrapper
      id="work"
      header="Our Work"
      className="px-2 py-8 sm:px-6 xl:py-16 xl:px-14 site-section"
    >
      <Suspense fallback={<Fallback />}>
        <Content />
      </Suspense>
    </SectionWrapper>
  );
}
