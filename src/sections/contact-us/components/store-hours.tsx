interface HoursDescriptionProps {
  /** Text to render representing day range for store hours */
  dayRange: string;
  /** Text to render representing time range */
  timeRange: string;
}

function HoursDescription({ dayRange, timeRange }: HoursDescriptionProps) {
  return (
    <li className="flex flex-row justify-between text-xs sm:text-base lg:text-lg text-white space-x-8">
      <span className="font-semibold col-span-1">{dayRange}:</span>
      <span className="col-span-1 whitespace-nowrap">{timeRange}</span>
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
        <HoursDescription dayRange="Monday" timeRange="9 AM - 6 PM" />
        <HoursDescription dayRange="Tuesday" timeRange="9 AM - 6 PM" />
        <HoursDescription dayRange="Wednesday" timeRange="9 AM - 6 PM" />
        <HoursDescription dayRange="Thursday" timeRange="9 AM - 6 PM" />
        <HoursDescription dayRange="Friday" timeRange="9 AM - 6 PM" />
        <HoursDescription dayRange="Saturday" timeRange="9 AM - 6 PM" />
        <HoursDescription dayRange="Sunday" timeRange="9 AM - 6 PM" />
      </ul>
    </div>
  );
}
