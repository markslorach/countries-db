import { cn } from "@/lib/utils";

type AsElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type HeadingProps = {
  children: React.ReactNode;
  className?: string;
  tag?: AsElement;
};

const Heading = ({ children, className, tag = "h1" }: HeadingProps) => {
  const Component = tag;
  return (
    <Component className={cn("text-xl font-semibold", className)}>
      {children}
    </Component>
  );
};

export default Heading;
