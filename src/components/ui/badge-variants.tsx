import { cva } from "class-variance-authority";

export const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-[3px] aria-invalid:ring-destructive/40 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground [&_a&]:hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground [&_a&]:hover:bg-secondary/90",
        destructive:
          "border-transparent bg-destructive text-white [&_a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:bg-destructive/60",
        outline:
          "text-foreground [&_a&]:hover:bg-accent [&_a&]:hover:text-accent-foreground",
      },
    },
    defaultVariants: { variant: "default" },
  }
);
