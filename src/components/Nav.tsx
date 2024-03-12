import climb from "../assets/icons/climb.svg";
import phone from "../assets/icons/phone.svg";
import puzzle from "../assets/icons/puzzle.svg";
import tools from "../assets/icons/tools.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";

interface NavLink {
  name: string;
  to: string;
	icon: string;
}

const Nav = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const [currentPath, setCurrentPath] = useState<NavLink | undefined>();

  const navLinks: NavLink[] = useMemo(() => {
		return [
			{
				name: "Work",
				to: "/career",
				icon: climb,
			},
			{
				name: "Projects",
				to: "/projects",
				icon: tools,
			},
			{
				name: "Skills",
				to: "/skills",
				icon: puzzle,
			},
			{
				name: "Contact",
				to: "/contact",
				icon: phone,
			}]
	}, []);

	useEffect(() => {
		setCurrentPath(navLinks.filter(link => link.to === location.pathname)[0]);
	}, [location.pathname, navLinks])

	if(location.pathname === "/") {
		return (
			<nav className="flex flex-col justify-center items-center w-full py-2">
				<div className="text-[3rem] font-bold">
					<div className="cursor-pointer" onClick={() => navigate("/")}>
						Pushkar<span className="text-instagram">.</span>
					</div>
				</div>
				<div className="text-instagram font-semibold mt-[-1rem]">v0</div>
			</nav>
		);
	}
	
  return (
		<nav className="flex justify-between items-center w-full py-2">
			<div>
				<div className="flex items-center text-[3rem] font-bold">
					<div className="cursor-pointer" onClick={() => navigate("/")}>
						Pushkar<span className="text-instagram">.</span>
					</div>
					{currentPath && (
						<div className="flex items-center mt-2 ml-3">
							<img
								className="w-10"
								src={currentPath.icon}
								alt={currentPath.name}
							/>
							<span className="text-[2rem]">{currentPath.name}</span>
						</div>
					)}
				</div>
				<div className="text-instagram font-semibold mt-[-1rem] ml-1">v0</div>
			</div>

			<ul className="flex justify-end items-center gap-5 mt-2">
				{navLinks.map(({ name, to }: NavLink, index: number) => (
					<li key={index}>
						<a
							className="flex items-center gap-1 hover:text-instagram transition-all ease-in-out duration-300"
							href={to}>
							<span className="text-xs">[0{index}]</span>
							<span className="font-semibold">{name}</span>
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
}

export default Nav;