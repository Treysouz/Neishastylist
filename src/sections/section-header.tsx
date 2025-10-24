interface SectionHeaderProps {
  /**Text to render in header */
  children: string;
}

export default function SectionHeader({ children }: SectionHeaderProps) {
  return (
    <h2 className="text-xl sm:text-2xl xl:text-4xl tracking-widest text-white font-medium">
      {children}
    </h2>
  );
}
