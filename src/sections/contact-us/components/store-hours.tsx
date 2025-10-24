import clsx from "clsx";

interface HoursDescriptionProps {
  /** Text to render representing day range for store hours */
  dayRange: string;
  /** Text to render representing time range */
  timeRange: string | "CLOSED";
}

function HoursDescription({ dayRange, timeRange }: HoursDescriptionProps) {
  return (
    <li className="flex flex-row justify-between text-xs sm:text-base lg:text-lg text-white space-x-8">
      <span className="font-semibold col-span-1 whitespace-nowrap">
        {dayRange}
      </span>
      <div className="text-left">
        <span
          className={clsx("col-span-1 whitespace-nowrap", {
            "font-semibold": timeRange === "CLOSED",
          })}
        >
          {timeRange}
        </span>
      </div>
    </li>
  );
}

export default function StoreHours() {
  return (
    <div className="col-span-1 space-y-4 w-min">
      <h3 className="text-accent text-sm sm:text-xl lg:text-2xl font-bold">
        Store Hours
      </h3>
      <ul className="space-y-2">
        <HoursDescription
          dayRange="Everyday (By Appointment)"
          timeRange="9 AM - 5 PM"
        />
      </ul>
    </div>
  );
}
