import {Logo} from "./Logo.tsx";
import {cn} from "../../utils/merge-class-names.ts";

type Props = {
    children?: React.ReactNode;
    className?: string;
}

export const Header = ({children, className}: Props) => {
    return (
        <header
            className={cn('flex bg-dark-700 border-b border-dark-300 items-center justify-between px-6 py-4', className)}>
            <Logo/>
            {children}
        </header>
    )
}