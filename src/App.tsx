import Footer from "./Footer";
import Nav from "./Nav.tsx";

function App() {
  return (
		<div className="h-[100vh] flex flex-col">
			<Nav />
			{/* Intro / Summary */}
			<div className="flex-1">
				<section className="flex flex-col items-center justify-between mt-[5rem]">
					<img
						className="w-4/12 rounded-lg drop-shadow-xl mb-3"
						src="./assets/head.jpeg"
						alt="me"
					/>
					<span className="text-[4rem] animate-wiggle">👋</span>
					<h2 className="text-3xl font-bold mb-2">
						Hey there, I'm Pushkar
					</h2>
					<p className="text-2xl leading-7 text-center px-[5rem]">
						A web developer with a passion for creating sleek and functional
						digital experiences. Armed with a Bachelor's degree in Computer
						Science and Engineering, I've honed my skills through hackathons,
						internships, and startup ventures. From crafting intuitive
						interfaces to tackling complex backend challenges, I thrive on
						turning ideas into reality. Dive into my portfolio and let's build
						something amazing together!
					</p>
				</section>
				{/* Projects */}
				{/* Work */}
				{/* Skills */}
				{/* Links and Contact */}
			</div>
			{/* Copyright and footer */}
			<Footer />
		</div>
	);
}

export default App;
