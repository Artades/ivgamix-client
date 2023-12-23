import React, { useState, useEffect } from "react";
import { RiMenu3Line } from "react-icons/ri";
import Logo from "./Logo";
import { nav } from "@/config/nav";
import NavItem from "./NavItem";
import { usePathname } from "next/navigation";
import CreateButton from "./CreateButton";
import { cn } from "@/lib/utils";

const Header = () => {
	const [scrollPosition, setScrollPosition] = useState(0);
	const [showMenuIcon, setShowMenuIcon] = useState(false);
	const [navHidden, setNavHidden] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		const handleScroll = () => {
			const currentPosition = window.scrollY;

			setScrollPosition(currentPosition);

			if (currentPosition > 50) {
				setShowMenuIcon(true);
				setNavHidden(true);
			} else {
				setShowMenuIcon(false);
				setNavHidden(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<header
			className={`fixed top-0 left-0 right-0 w-full py-6 px-1 md:px-0 bg-black/50 backdroop-blur-md`}
		>
			<div className="flex items-center justify-between max-w-[1000px] px-3 mx-auto ">
				<div className="flex items-center gap-x-5">
					<div
						className={cn(
							"bg-zinc-900 rounded-[0.5rem] p-2 transition-all duration-300 ease-out",
							!showMenuIcon
								? "md:translate-x-16 md:opacity-0 md:scale-0"
								: "md:translate-x-0 md:opacity-1 md:scale-1"
						)}
					>
						<RiMenu3Line className="text-white w-7 h-7" />
					</div>
					<div className="flex items-center gap-x-16">
						<Logo withLabel size={50} />
						<nav
							className={`md:block hidden overflow-hidden transition-all duration-700 ease-out ${
								navHidden
									? "max-h-0 -translate-x-16 opacity-0"
									: "max-h-50 translate-x-0 opacity-1"
							}`}
						>
							<ul className="flex item-center gap-x-5">
								{nav.map((item) => (
									<NavItem
										active={pathname === item.path}
										key={item.id}
										label={item.label}
										path={item.path}
										notifications={item.notifications}
									/>
								))}
							</ul>
						</nav>
					</div>
				</div>

				<CreateButton />
			</div>
		</header>
	);
};

export default Header;
