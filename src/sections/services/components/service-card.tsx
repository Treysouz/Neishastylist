import { Card, Icon, SVGS } from "@/components";

interface ServiceCardProps {
  /**Icon to render */
  svg: keyof typeof SVGS;
  /**Category of services */
  category: string;
  /**Array of services */
  services: string[];
}

export default function ServiceCard({
  svg,
  category,
  services,
}: ServiceCardProps) {
  return (
    <Card className="bg-neutral p-4 lg:p-8 flex flex-col items-center justify-center space-y-4 lg:space-y-8 w-full sm:w-auto shadow-lg">
      <Icon svg={svg} className="size-10 lg:size-16 text-accent" />
      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">{category}</h3>
      <ul className="text-sm lg:text-base list-disc pl-8">
        {services.map((service) => (
          <li key={service}>{service}</li>
        ))}
      </ul>
    </Card>
  );
}
