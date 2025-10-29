import { Icon, SVGS } from "@/components";
import clsx from "clsx";

interface ErrorBoundaryProps {
  /** Icon to render with error*/
  svg: keyof typeof SVGS;
  /** The text to render as the header of the error state*/
  header: string;
  /** The text to render as the sub content under the header*/
  message?: string;
}

// Error boundary component to render when something blows up.
export default function ErrorBoundary({
  svg,
  header,
  message = "",
}: ErrorBoundaryProps) {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex flex-col items-center space-y-2 text-center">
        <Icon svg={svg} className="text-primary size-20" />
        <span className="font-bold lg:text-xl 2xl:text-3xl">{header}</span>

        <span className={clsx("lg:text-sm 2xl:text-lg", { hidden: !message })}>
          {message}
        </span>
      </div>
    </div>
  );
}
