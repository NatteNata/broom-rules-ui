import {ComponentPropsWithoutRef, ElementRef, forwardRef} from "react";
import {Slot} from "@radix-ui/react-slot";
import {cn} from "../../utils/merge-class-names.ts";

type Props = {
    asChild?: boolean;
    variant?: "primary" | "secondary" | "outlined" | "ghost";
    fullWidth?: boolean;
} & ComponentPropsWithoutRef<"button">;

export const Button = forwardRef<ElementRef<"button">, Props>(
    ({variant = "primary", fullWidth, className, asChild, ...props}, ref) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp
                {...props}
                ref={ref}
                className={cn('capitalize',
                    "flex items-center cursor-pointer box-border gap-2 p-1.5 px-6 rounded transition-colors ease-in-out",
                    variant === "primary" &&
                    "bg-accent-500 hover:bg-accent-100 active:bg-accent-700 disabled:bg-accent-900 disabled:text-light-900",
                    variant === "secondary" &&
                    "bg-dark-300 hover:bg-dark-100 active:bg-dark-400 disabled:bg-dark-500 disabled:text-light-900",
                    variant === "outlined" &&
                    "border border-gray-300 text-accent-500 hover:text-accent-100 hover:border-accent-100 active:text-accent-700 active:border-accent-700 disabled:text-accent-900 disabled:border-accent-900",
                    variant === "ghost" &&
                    "text-accent-500 hover:text-accent-100 active:text-accent-700 disabled:text-accent-900",
                    fullWidth && "flex justify-center w-full",
                    className
                )}
            />
        );
    },
);


