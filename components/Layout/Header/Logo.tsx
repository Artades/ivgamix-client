import React, { FC } from "react";
import Image from "next/image";

interface LogoProps {
	withLabel: boolean;
    size: number
}
const Logo: FC<LogoProps> = ({ withLabel, size }) => {
	return (
		<div className="flex space-x-1 items-center">
			<Image
				width={size}
				height={size}
				priority
				alt="Ivgamix Logo"
				src={"/images/logo.png"}
				className="  cursor-pointer"
			/>
			{withLabel && (
				<span className="text-xl text-white/90 font-bold">Ivgamix</span>
			)}
		</div>
	);
};

export default Logo;
