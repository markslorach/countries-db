import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn("mx-auto h-full max-w-[1400px] px-4 sm:px-8", className)}
    >
      {children}
    </div>
  );
}

export default Container;
