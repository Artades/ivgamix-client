import React, { FC } from "react";
import Image from "next/image";

interface LogoProps {
	withLabel: boolean;
    size: number;
	className?: string;
}
const Logo: FC<LogoProps> = ({ withLabel, size, className }) => {
	return (
		<div className={`flex space-x-1 items-center  ${className}`}>
			<Image
				width={size}
				height={size}
				priority
				alt="Ivgamix Logo"
				src={"/images/logo.png"}
				className="  cursor-pointer"
			/>
			{withLabel && (
				<span className={`text-xl text-white/90 font-bold`}>Ivgamix</span>
			)}
		</div>
	);
};

export default Logo;
