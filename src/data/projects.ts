import { Project } from '../types/project';
import bytegisCode from '../assets/imgs/bytegis-code.png';
import marsmelloCode from "../assets/imgs/marsmello-code.png";
import marsmello from "../assets/imgs/marsmello-display.png";
import shatranjCode from "../assets/imgs/shatranj-code.png";
import shatranj from "../assets/imgs/shatranj-display.png";
import pandaCode from "../assets/imgs/panda-code.png";
import panda from "../assets/imgs/panda-display.png";

export const experiences: Project[] = [
	{
		title: "Geospatial Data Management WebApp",
		codeImg: bytegisCode,
		displayImg: "", // Get from Rakshit
		date: "December 2021",
		tags: ["React", "NodeJS", "OpenGIS", "Azure"],
		description:
			"Transformative platform streamlines geospatial workflows, fostering collaboration and simplifying data management for producers and consumers.",
		codeLink: "https://github.com/Pushkar1809/RapidGIS",
		infoLink:
			"https://imaginecup.microsoft.com/en-us/team/5f40199c-c65f-4e49-8f16-317edabc3af5",
	},
	{
		title: "Marsmello",
		codeImg: marsmelloCode,
		displayImg: marsmello,
		date: "August 2021",
		tags: ["React", "web3.js", "NFT", "Polygon", "React Spring"],
		description:
			"Decentralized Mars colonization game blending idle, open-world, strategy, economy, and simulation, offering a unique Web3 experience.",
		codeLink: "https://github.com/jayeshbhole/MarsMello",
		liveLink: "https://marsmello.netlify.app/",
		infoLink: "https://devfolio.co/projects/marsmello-a90e",
	},
	{
		title: "Shatranj",
		codeImg: shatranjCode,
		displayImg: shatranj,
		date: "Navember 2021",
		tags: ["React", "chess.js", "moralis", "infura"],
		description:
			"Chess dapp merging chess legacy with Web3, rewarding winners with unique, artsy chess NFTs for customization.",
		codeLink: "https://github.com/GHODA-crypto/shatranj",
		infoLink: "https://devfolio.co/projects/panda-wallet-698f",
	},
	{
		title: "Geospatial Data Management WebApp",
		codeImg: pandaCode,
		displayImg: panda,
		date: "December 2022",
		tags: ["React", "ethers.js", "chakraUI", "EIP 4337"],
		description:
			"User-friendly Web3 wallet, abstracting private keys with smart contracts, and offering guardian wallets for easy recovery.",
		codeLink: "https://github.com/dark-circles-2022/panda-wallet",
		infoLink: "https://devfolio.co/projects/panda-wallet-698f",
	},
	{
		title: "LightHouse - Project Management App",
		codeImg: pandaCode,
		displayImg: panda,
		date: "May 2021",
		tags: ["React", "Firebase"],
		description:
			"A Progressive Web Application to manage and decide the flow of your projects, tasks and deadlines.",
		codeLink: "https://github.com/jayeshbhole/LightHouse",
	},
];
