import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article" | "blockquote";
}

export function Card({ children, className, as: Tag = "div" }: CardProps) {
  return (
    <Tag
      className={cn(
        "rounded-2xl border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
