interface SectionHeaderProps {
  /**Text to render in header */
  children: string;
}

export default function SectionHeader({ children }: SectionHeaderProps) {
  return (
    <h2 className="text-2xl sm:text-4xl xl:text-5xl tracking-widest text-white font-medium">
      {children}
    </h2>
  );
}
