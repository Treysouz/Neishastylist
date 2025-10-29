"use client";

import { Icon } from "@/components";
import { motion } from "motion/react";

interface StaffCardProps {
  firstName: string;
  lastName: string;
  title: string;
  /**Animation delay */
  animationDelay?: number;
}

export default function StaffCard({
  firstName,
  lastName,
  title,
  animationDelay,
}: StaffCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: animationDelay, duration: 0.4 }}
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-col items-center space-y-4 lg:space-y-8 min-h-33 w-33 sm:h-auto sm:w-auto sm:size-54 lg:size-66"
    >
      <div className="size-20 sm:size-30 lg:size-40 flex items-center justify-center rounded-full p-4 bg-theme-dark shadow-lg">
        <Icon svg="user" className="h-full w-full" />
      </div>
      <div className="text-center sm:space-y-2">
        <h3 className="text-white text-sm sm:text-xl lg:text-2xl font-bold">
          {firstName} {lastName}
        </h3>
        <h4 className="text-accent text-xs sm:text-base lg:text-lg">{title}</h4>
      </div>
    </motion.div>
  );
}
