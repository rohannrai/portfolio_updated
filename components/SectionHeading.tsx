import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  label,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-16 md:mb-20",
        align === "center" && "text-center mx-auto max-w-3xl",
        align === "left" && "text-left max-w-2xl",
        className
      )}
    >
      {label && (
        <p className="text-accent text-sm font-medium tracking-widest uppercase mb-4">
          {label}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-text mb-5">
        {title}
      </h2>
      {description && (
        <p className="text-text-secondary text-base md:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
