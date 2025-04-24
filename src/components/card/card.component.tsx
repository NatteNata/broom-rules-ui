import {
	type ComponentPropsWithoutRef,
	type ElementRef,
	type ElementType,
	type ForwardedRef,
	type JSX,
	type Ref,
	forwardRef,
} from "react";
import { cn } from "../../utils";

type CardProps<T extends ElementType = "div"> = {
	asElement?: T;
} & {
	ref?: Ref<ElementRef<T>>;
} & ComponentPropsWithoutRef<T>;

export const Card = forwardRef(
	<T extends ElementType = "div">(
		{ asElement, className, ...restProps }: CardProps<T>,
		ref: ForwardedRef<T>,
	) => {
		const Component = (asElement ?? "div") as ElementType;

		return (
			<Component
				className={cn(
					"flex border border-dark-300 bg-dark-500 font-inter",
					className,
				)}
				ref={ref}
				{...restProps}
			/>
		);
	},
) as <T extends ElementType = "div">(props: CardProps<T>) => JSX.Element;