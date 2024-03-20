import asterisk from "../assets/svgs/asterisk.svg";

interface NavLink {
  name: string;
  to: string;
}

const Nav = () => {
  const navLinks: NavLink[] = [
		{ name: "home", to: "#home" },
		{ name: "experience", to: "#experiences" },
		{ name: "projects", to: "#projects" },
		{ name: "skills", to: "#skills" },
    { name: "connect", to: "#connect" }
	];
  return (
		<nav className="w-full py-5">
			<ul className="flex justify-center items-center gap-5">
				{navLinks.map(({ name, to }: NavLink, index: number) => (
					<li key={index}>
						<a
							className="relative group text-xl font-thin select-none"
							href={to}>
							{name}
							<img className="w-5 top-10 absolute right-[35%] animate-slowspin opacity-0 group-hover:top-6 group-hover:opacity-80 transition-all ease-in-out duration-300" src={asterisk} alt="asterisk"/>
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
}

export default Nav;