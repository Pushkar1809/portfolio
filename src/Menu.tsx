import climb from './assets/stickers/climb-sticker.svg';
import phone from './assets/stickers/phone-sticker.svg';
import ui from './assets/stickers/ui-sticker.svg';
import puzzle from "./assets/stickers/puzzle-sticker.svg";

const Menu = () => {
  const items = [
		{
			sticker: climb,
			title: "Work",
			to: "#work",
		},
		{
			sticker: ui,
			title: "Projects",
			to: "#projects",
		},
		{
			sticker: puzzle,
			title: "Skills",
			to: "#skills",
		},
		{
			sticker: phone,
			title: "Contact",
			to: "#contact",
		},
	];

  return (
		<div className="flex justify-center items-center w-full mt-10">
			{items.map((item) => (
				<div className="flex flex-col justify-center items-center">
					<img className="h-[12rem] drop-shadow-xl" src={item.sticker} alt="work" />
					<span className="text-2xl font-bold bg-black text-white px-4 rounded-full pb-1 mt-[-0.5rem]">{item.title}</span>
				</div>
			))}
		</div>
	);
}

export default Menu