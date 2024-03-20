import { useEffect } from "react";
import headshot from "./assets/images/headshot.png"
import TopBar from "./sections/TopBar.tsx";
import Nav from "./sections/Nav.tsx";
import { EmphasisedText } from './components/EmphasisedText';
import { headline } from "./data.ts";
import peace from "./assets/svgs/peace.svg";
import About from "./sections/About.tsx";
import Experiences from './sections/Experiences';
import Projects from "./sections/Projects.tsx";

function App() {
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
	}, [])

  return (
		<div className="h-[100vh] flex flex-col">
			<TopBar />

			<main className="max-w-[120ch] mx-auto">
				<Nav />
				<div className="flex items-center justify-between w-full my-[5rem]">
					<div className="flex">
						<img
							src={peace}
							alt="peace"
							className="w-[5rem] mt-[-2.75rem] animate-wiggle"
						/>
						<div>
							<h1 className="text-[2.75rem] font-semibold">
								Hey, I am Pushkar.
							</h1>
							<EmphasisedText className="text-xl " text={headline} />
						</div>
					</div>
					<img
						className="w-4/12 rounded-[3rem] border-[0.35rem] border-dark shadow-xl rotate-6"
						src={headshot}
						alt="me"
					/>
				</div>
				{/* Intro / Summary */}
				<About />
				{/* Work */}
				<Experiences/>
				{/* Projects */}
				<Projects/>
				{/* Skills */}
				{/* Links and Contact */}
			</main>
		</div>
	);
}

export default App;
