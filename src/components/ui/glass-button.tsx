import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

const glassButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-button text-sm font-semibold ring-offset-background transition-smooth focus-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-primary-hover active:bg-primary-pressed shadow-glass",
        secondary: "glass text-foreground hover:bg-glass/80 border-glass-border",
        ghost: "hover:glass hover:text-foreground",
        danger: "bg-danger text-white hover:bg-danger/90 shadow-glass",
        success: "bg-success text-white hover:bg-success/90 shadow-glass",
        hero: "glass text-foreground border-glass-border hover:bg-primary hover:text-primary-foreground shadow-glass-lg backdrop-blur-glass",
      },
      size: {
        sm: "h-9 rounded-button px-3",
        md: "h-10 px-4 py-2",
        lg: "h-11 rounded-button px-8",
        xl: "h-12 rounded-button px-10 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface GlassButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof glassButtonVariants> {
  asChild?: boolean;
  loading?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

const GlassButton = React.forwardRef<HTMLButtonElement, GlassButtonProps>(
  ({ className, variant, size, asChild = false, loading = false, iconLeft, iconRight, children, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    
    return (
      <Comp
        className={cn(glassButtonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || loading}
        aria-busy={loading}
        {...props}
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            {children}
          </>
        ) : (
          <>
            {iconLeft && <span className="mr-2">{iconLeft}</span>}
            {children}
            {iconRight && <span className="ml-2">{iconRight}</span>}
          </>
        )}
      </Comp>
    );
  }
);
GlassButton.displayName = "GlassButton";

export { GlassButton, glassButtonVariants };