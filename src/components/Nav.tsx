// interface NavLink {
//   name: string;
//   to: string;
// }

const Nav = () => {
  // const navLinks: NavLink[] = [
	// 	{
	// 		name: "About",
	// 		to: "#about",
	// 	},
	// 	{
	// 		name: "Work",
	// 		to: "#work",
	// 	},
	// 	{
	// 		name: "Projects",
	// 		to: "#projects",
	// 	},
	// 	{
	// 		name: "Skills",
	// 		to: "#skills",
	// 	},
  //   {
  //     name: "Contact",
  //     to: "#contact"
  //   }
	// ];
  return (
		<nav className="flex flex-col justify-center items-center w-full py-2">
			<div className="text-[3rem] font-bold mt-21">Pushkar<span className="text-instagram">.</span></div>
			<div className="text-instagram font-semibold mt-[-1rem]">
				v0
			</div>
			{/* <ul className="flex justify-end items-center gap-5">
				{navLinks.map(({ name, to }: NavLink, index: number) => (
					<li key={index}>
						<a className="flex items-center gap-1" href={to}>
							<span className="text-xs">[0{index}]</span>
							<span className="font-semibold">{name}</span>
						</a>
					</li>
				))}
			</ul> */}
		</nav>
	);
}

export default Nav;