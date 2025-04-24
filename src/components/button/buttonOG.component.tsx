import {
	type ComponentProps,
	type ElementRef,
	type ElementType,
	type ForwardedRef,
	forwardRef,
} from "react";

import { cn } from "../../utils";

type ButtonVariant = "ghost" | "outlined" | "primary" | "secondary";

type CommonButtonProps<T extends ElementType> = {
	as?: T;
	fullWidth?: boolean;
	variant?: ButtonVariant;
} & ComponentProps<"button">;

type ButtonWithRefProps<T extends ElementType> = {
	ref?: ForwardedRef<ElementRef<T>>;
} & CommonButtonProps<T>;

const ButtonPolymorph = <T extends ElementType = "button">(
	{
		as,
		className,
		fullWidth,
		type,
		variant,
		...restProps
	}: CommonButtonProps<T>,
	ref: ForwardedRef<ElementRef<T>>,
) => {
	const Component = (as ?? "button") as ElementType;

	return (
		<Component
			className={cn(
				"box-border flex cursor-pointer items-center gap-2 rounded p-1.5 px-6 font-inter text-white transition-colors ease-in-out disabled:cursor-default",
				variant === "primary" &&
					"bg-primary-500 text-light-100 hover:bg-primary-100 focus:border-2 focus:border-primary-700 focus:bg-primary-500 active:bg-primary-700 active:text-light-500 disabled:bg-primary-900 disabled:text-light-900",
				variant === "secondary" &&
					"bg-dark-300 text-light-100 hover:bg-dark-100 focus:border focus:border-primary-300 active:bg-dark-400 disabled:bg-dark-500 disabled:text-light-900",
				variant === "outlined" &&
					"border border-primary-500 text-primary-500 hover:border-primary-100 hover:text-primary-100 focus:border-2 focus:border-primary-700 focus:text-primary-700 active:border-primary-700 active:text-primary-700 disabled:border-primary-900 disabled:text-primary-900",
				variant === "ghost" &&
					"text-primary-500 hover:text-primary-100 focus:border-2 focus:border-primary-700 focus:text-primary-700 active:text-primary-700 disabled:text-primary-900",
				fullWidth && "flex w-full justify-center",
				className,
			)}
			ref={ref}
			type={type ?? (as === "button" ? "button" : undefined)}
			{...restProps}
		/>
	);
};

export const ButtonOG = forwardRef(ButtonPolymorph) as <
	T extends ElementType = "button",
>(
	props: ButtonWithRefProps<T>,
) => ReturnType<typeof ButtonPolymorph>;