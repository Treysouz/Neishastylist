interface SectionHeaderProps {
  /**Text to render in header */
  children: string;
}

export default function SectionHeader({ children }: SectionHeaderProps) {
  return (
    <h2 className="text-2xl sm:text-4xl xl:text-5xl text-white">{children}</h2>
  );
}
