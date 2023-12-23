import { NavItemProps } from "@/config/nav";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { FC } from "react";

const NavItem: FC<NavItemProps> = ({ label, path, notifications, active }) => {
	return (
		<li className="group relative flex flex-col items-start">
			{/* <div ></div> */}
			<Link
				href={path}
				className={cn(
					"text-lg font-regular  hover:text-primary hover:opacity-80",
					active
						? "text-primary opacity-90 rounded-[0.5rem] px-3  border border-primary"
						: "text-white/90"
				)}
			>
				{label}
			</Link>
			{/* {!active && (
				<div className="group-hover:w-full transition-all duration-400 ease-in-out w-0 h-[3px] bg-primary opacity-60 " />
			)} */}
		</li>
	);
};

export default NavItem;
