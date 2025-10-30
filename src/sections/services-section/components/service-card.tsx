"use client";

import { Card, Icon, SVGS } from "@/components";
import { motion } from "motion/react";

interface ServiceCardProps {
  /**Icon to render */
  svg: keyof typeof SVGS;
  /**Category of services */
  category: string;
  /**Array of services */
  services: string[];
  /**Animation delay */
  animationDelay?: number;
}

export default function ServiceCard({
  svg,
  category,
  services,
  animationDelay,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: animationDelay, duration: 0.4 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <Card className="bg-neutral p-4 lg:p-8 flex flex-col items-center justify-center space-y-4 lg:space-y-8 w-full sm:w-auto shadow-lg">
        <Icon svg={svg} className="size-10 lg:size-16 text-accent" />
        <h3 className="text-sm sm:text-xl lg:text-2xl font-bold">{category}</h3>
        <ul className="text-xs sm:text-base lg:text-lg list-disc pl-8">
          {services.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul>
      </Card>
    </motion.div>
  );
}
