import type { ReactNode } from "react";

import { cn } from "../../utils";

type Props = {
	children?: ReactNode;
	className?: string;
};

export const Header = ({ children, className }: Props) => {
	return (
		<header
			className={cn(
				"flex items-center justify-between border-dark-300 border-b bg-dark-700 px-6 py-4",
				className,
			)}
		>
			{children}
		</header>
	);
};
