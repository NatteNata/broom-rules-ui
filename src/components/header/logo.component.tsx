import { TornadoIcon } from "lucide-react";

export const LogoComponent = () => {
	return (
		<div className={"flex justify-items-start"}>
			<LogoIcon />
			<LogoName />
		</div>
	);
};

const LogoIcon = () => {
	return <TornadoIcon className={"size-10 stroke-white"} />;
};

const LogoName = () => {
	return <span className={"font-bold text-3xl text-white"}>tornata</span>;
};
