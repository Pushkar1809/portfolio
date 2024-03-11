import climb from './assets/stickers/climb-sticker.svg';
import phone from './assets/stickers/phone-sticker.svg';
import ui from './assets/stickers/ui-sticker.svg';
import puzzle from "./assets/stickers/puzzle-sticker.svg";

const Menu = () => {
  return (
		<div className="flex justify-center items-center w-full mt-10">
			<div className={"flex flex-col justify-center items-center animate-breathe"}>
					<img
						className="h-[12rem] drop-shadow-xl"
						src={climb}
						alt="work"
					/>
					<span className="text-2xl font-bold bg-black text-white px-4 rounded-full pb-1 mt-[-0.5rem]">
						Work
					</span>
				</div>
				<div className={"flex flex-col justify-center items-center animate-breathee"}>
					<img
						className="h-[12rem] drop-shadow-xl"
						src={ui}
						alt="projects"
					/>
					<span className="text-2xl font-bold bg-black text-white px-4 rounded-full pb-1 mt-[-0.5rem]">
						Projects
					</span>
				</div>
				<div className={"flex flex-col justify-center items-center animate-breathe"}>
					<img
						className="h-[12rem] drop-shadow-xl"
						src={puzzle}
						alt="skills"
					/>
					<span className="text-2xl font-bold bg-black text-white px-4 rounded-full pb-1 mt-[-0.5rem]">
						Skills
					</span>
				</div>
				<div className={"flex flex-col justify-center items-center animate-breathee"}>
					<img
						className="h-[12rem] drop-shadow-xl"
						src={phone}
						alt="contact"
					/>
					<span className="text-2xl font-bold bg-black text-white px-4 rounded-full pb-1 mt-[-0.5rem]">
						Contact
					</span>
				</div>
		</div>
	);
}

export default Menu