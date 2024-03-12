import { Project } from '../types/project';
import bytegisCode from '../assets/imgs/bytegis-code.png';
import marsmelloCode from "../assets/imgs/marsmello-code.png";
import marsmello from "../assets/imgs/marsmello-display.png";
import shatranjCode from "../assets/imgs/shatranj-code.png";
import shatranj from "../assets/imgs/shatranj-display.png";
import pandaCode from "../assets/imgs/panda-code.png";
import panda from "../assets/imgs/panda-display.png";
import lighthouseCode from "../assets/imgs/lighthouse-code.png";
import lighthouse from "../assets/imgs/lighthouse-display.png";
import lsd from "../assets/imgs/lsd-display.png";
import lsdCode from "../assets/imgs/lsd-code.png";

export const projects: Project[] = [
	{
		title: "Liquid Staking Dapp",
		codeImg: lsdCode,
		displayImg: lsd,
		date: "November 2023",
		tags: ["React", "Ethers.js", "Solidity", "Styled-components"],
		description:
			"Dapp that will enable you to stake your ETH to Lido and Stader from an unified UI",
		codeLink: "https://github.com/jayeshbhole/LightHouse",
		liveLink: "https://liquid-staking-lido-stader.vercel.app/",
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
		title: "Geo-Data Management App",
		codeImg: bytegisCode,
		displayImg:
			"https://images.unsplash.com/photo-1642953702322-a5da05d2e36b?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Get from Rakshit
		date: "December 2021",
		tags: ["React", "NodeJS", "OpenGIS", "Azure"],
		description:
			"Transformative platform streamlines geospatial workflows, fostering collaboration and simplifying data management for producers and consumers.",
		codeLink: "https://github.com/Pushkar1809/RapidGIS",
		infoLink:
			"https://imaginecup.microsoft.com/en-us/team/5f40199c-c65f-4e49-8f16-317edabc3af5",
	},
	{
		title: "Shatranj",
		codeImg: shatranjCode,
		displayImg: shatranj,
		date: "November 2021",
		tags: ["React", "chess.js", "moralis", "infura"],
		description:
			"Chess dapp merging chess legacy with Web3, rewarding winners with unique, artsy chess NFTs for customization.",
		codeLink: "https://github.com/GHODA-crypto/shatranj",
		infoLink: "https://devfolio.co/projects/panda-wallet-698f",
	},
	{
		title: "Panda Wallet",
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
		title: "LightHouse",
		codeImg: lighthouseCode,
		displayImg: lighthouse,
		date: "May 2021",
		tags: ["React", "Firebase"],
		description:
			"A Progressive Web Application to manage and decide the flow of your projects, tasks and deadlines.",
		codeLink: "https://github.com/jayeshbhole/LightHouse",
	},
];
