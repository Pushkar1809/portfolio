import { useEffect } from "react";
import Menu from "../components/Menu.tsx";
import peace from "../assets/icons/peace-scribble.svg";
import headshot from "../assets/imgs/head.png";

const Home = () => {
  function preloadImage(src: string) {
		return new Promise((resolve, reject) => {
			const img = new Image();
			img.onload = function () {
				resolve(img);
			};
			img.onerror = img.onabort = function () {
				reject(src);
			};
			img.src = src;
		});
	}

	useEffect(() => {
		preloadImage(headshot);
	}, []);
	return (
		<div className="flex-1">
			<section className="flex flex-row-reverse items-center justify-between mt-[5rem] gap-10">
				<img
					className="w-4/12 rounded-lg drop-shadow-xl mb-3"
					src={headshot}
					alt="me"
				/>
				<div className="flex flex-col justify-start items-start gap-2">
					<span className="text-[4rem] animate-wiggle ml-[-1rem]">
						<img src={peace} alt="peace" />
					</span>
					<h2 className="text-3xl font-bold mb-2">Hey there, I'm Pushkar</h2>
					<p className="text-2xl leading-7">
						A web developer with a passion for creating sleek and functional
						digital experiences. Armed with a Bachelor's degree in Computer
						Science and Engineering, I've honed my skills through hackathons,
						internships, and startup ventures. From crafting intuitive
						interfaces to tackling complex backend challenges, I thrive on
						turning ideas into reality. Dive into my portfolio and let's build
						something amazing together!
					</p>
				</div>
			</section>
			<Menu />
		</div>
	);
};

export default Home;
