import climb from '../assets/stickers/climb-sticker.svg';
import phone from '../assets/stickers/phone-sticker.svg';
import ui from '../assets/stickers/ui-sticker.svg';
import puzzle from "../assets/stickers/puzzle-sticker.svg";
import { useNavigate } from 'react-router-dom';

const Menu = () => {
	const navigate = useNavigate();
  return (
		<div className="flex justify-center items-center w-full mt-10">
			<div
				onClick={() => navigate("/career")}
				className={
					"group flex flex-col justify-center items-center animate-breathe cursor-pointer"
				}>
				<img
					className="h-[12rem] drop-shadow-xl group-hover:drop-shadow-2xl group-hover:scale-105 transition-all ease-in-out duration-300"
					src={climb}
					alt="work"
				/>
				<span className="text-2xl font-bold bg-black text-white px-4 rounded-full pb-1 mt-[-0.5rem] group-hover:text-instagram transition-all ease-in-out duration-300">
					Work
				</span>
			</div>
			<div
				onClick={() => navigate("/projects")}
				className={
					"group flex flex-col justify-center items-center animate-breathee cursor-pointer"
				}>
				<img
					className="h-[12rem] drop-shadow-xl group-hover:drop-shadow-2xl group-hover:scale-105 transition-all ease-in-out duration-300"
					src={ui}
					alt="projects"
				/>
				<span className="text-2xl font-bold bg-black text-white px-4 rounded-full pb-1 mt-[-0.5rem] group-hover:text-instagram transition-all ease-in-out duration-300">
					Projects
				</span>
			</div>
			<div
				onClick={() => navigate("/skills")}
				className={
					"group flex flex-col justify-center items-center animate-breathe cursor-pointer"
				}>
				<img
					className="h-[12rem] drop-shadow-xl group-hover:drop-shadow-2xl group-hover:scale-105 transition-all ease-in-out duration-300"
					src={puzzle}
					alt="skills"
				/>
				<span className="text-2xl font-bold bg-black text-white px-4 rounded-full pb-1 mt-[-0.5rem] group-hover:text-instagram transition-all ease-in-out duration-300">
					Skills
				</span>
			</div>
			<div
				onClick={() => navigate("/contact")}
				className={
					"group flex flex-col justify-center items-center animate-breathee cursor-pointer"
				}>
				<img
					className="h-[12rem] drop-shadow-xl group-hover:drop-shadow-2xl group-hover:scale-105 transition-all ease-in-out duration-300"
					src={phone}
					alt="contact"
				/>
				<span className="text-2xl font-bold bg-black text-white px-4 rounded-full pb-1 mt-[-0.5rem] group-hover:text-instagram transition-all ease-in-out duration-300">
					Contact
				</span>
			</div>
		</div>
	);
}

export default Menu