import { Icon } from "@/components";

interface StaffCardProps {
  firstName: string;
  lastName: string;
  title: string;
}

export default function StaffCard({
  firstName,
  lastName,
  title,
}: StaffCardProps) {
  return (
    <div className="flex flex-col items-center space-y-4 lg:space-y-8 sm:size-54 lg:size-66">
      <div className="size-20 sm:size-30 lg:size-40 flex items-center justify-center rounded-full p-4 bg-logo-dark">
        <Icon svg="user" className="h-full w-full" />
      </div>
      <div className="text-center sm:space-y-2">
        <h3 className="text-white text-sm sm:text-xl lg:text-2xl font-bold">
          {firstName} {lastName}
        </h3>
        <h4 className="text-accent text-xs sm:text-base lg:text-lg ">
          {title}
        </h4>
      </div>
    </div>
  );
}
