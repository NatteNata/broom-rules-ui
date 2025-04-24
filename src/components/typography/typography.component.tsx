import {
	type ComponentPropsWithoutRef,
	type ElementType,
	type ForwardedRef,
	forwardRef,
} from "react";
import { cn } from "../../utils";

type TypographyVariant =
	| "bold_text_14"
	| "bold_text_16"
	| "error"
	| "h1"
	| "h2"
	| "h3"
	| "large"
	| "medium_text_14"
	| "regular_link"
	| "regular_text_14"
	| "regular_text_16"
	| "semi-bold_small_text"
	| "small_link"
	| "small_text";

type TypographyProps<T extends ElementType> = {
	asElement?: T;
	variant?: TypographyVariant;
} & ComponentPropsWithoutRef<T>;

const Typography = forwardRef(
	<T extends ElementType = "span">(
		{
			asElement,
			children,
			className,
			variant = "regular_text_16",
			...props
		}: TypographyProps<T>,
		ref: ForwardedRef<T>,
	) => {
		const Component = asElement || getDefaultComponent(variant);

		return (
			<Component
				className={cn(getVariantClasses(variant), className)}
				ref={ref}
				{...props}
			>
				{children}
			</Component>
		);
	},
);

function getDefaultComponent(variant: TypographyVariant): ElementType {
	switch (variant) {
		case "large":
			return "h1";
		case "h1":
			return "h1";
		case "h2":
			return "h2";
		case "h3":
			return "h3";
		default:
			return "span";
	}
}

function getVariantClasses(variant: TypographyVariant): string {
	switch (variant) {
		case "large":
			return "text-2xl/9 font-semibold";
		case "h1":
			return "text-xl/9 font-bold";
		case "h2":
			return "text-lg/6 font-bold";
		case "h3":
			return "text-base font-semibold";
		case "regular_text_16":
			return "text-base font-normal";
		case "bold_text_16":
			return "text-base font-bold";
		case "regular_text_14":
			return "text-sm/6 font-normal";
		case "medium_text_14":
			return "text-sm/6 font-medium";
		case "bold_text_14":
			return "text-sm/6 font-bold";
		case "small_text":
			return "font-normal text-xs/4";
		case "error":
			return "text-danger-500 text-xs/4 font-normal";
		case "semi-bold_small_text":
			return "text-xs/4 font-semibold";
		case "regular_link":
			return "text-primary-500 text-sm/6 font-normal underline";
		case "small_link":
			return "text-primary-500 text-xs/4 font-normal underline";
		default:
			return "";
	}
}

export { Typography };