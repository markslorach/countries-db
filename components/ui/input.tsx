import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactElement;
  iconPosition?: "left" | "right";
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, iconPosition = "left", ...props }, ref) => {
    return (
      <div className="relative flex items-center">
        {icon && (
          <div
            className={cn(
              "absolute inset-y-0 flex items-center pointer-events-none",
              iconPosition === "right" ? "left-3" : "right-3"
            )}
          >
            {icon}
          </div>
        )}
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-slate-200 dark:border-gray-500/50 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-300 dark:focus-visible:ring-slate-300",
            icon && (iconPosition === "left" ? "pl-10" : "pr-10"), // Adjusted padding
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
