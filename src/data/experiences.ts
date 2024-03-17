import { Experience } from "../types/experience";
import foliox from "../assets/logos/foliox-light.png";
import ngram from "../assets/logos/ngram.svg";
import nuance from "../assets/logos/nuance.jpeg";
import onboard from "../assets/logos/onboard.png";

export const experiences: Experience[] = [
	{
		role: "Full Stack Software Developer",
		company: "folioX",
		duration: "4 months",
		startDate: "December 2023",
		endDate: "Present",
		summary:
			"Developed web3 portfolio management software with liquid staking, liquidity pools, and restaking aggregators. Created three landing page versions, designed motion graphics, and set up code infrastructure. Converts natural language into actionable crypto investment intents.",
		techStack: ["React", "Nextjs", "Wagmi", "Ethers.js", "Tailwind", "Radix"],
		logo: foliox,
		link: "https://www.foliox.io/",
	},
	{
		role: "Full Stack Software Developer",
		company: "OnboardStudiosOÜ",
		duration: "8 months",
		startDate: "March 2022",
		endDate: "October 2022",
		summary:
			"Led development of a member management hub for DAOs, using React, ChakraUI, and Node.js. Organized GitHub workflow, managed deployment, and mentored intern, fostering global teamwork and project success.",
		techStack: [
			"React",
			"Nodejs",
			"Express.js",
			"Ethers.js",
			"ChakraUI",
			"MongoDB",
			"Linux",
		],
		logo: onboard,
	},
	{
		role: "SDE Intern",
		company: "ngram",
		duration: "8 months",
		startDate: "January 2023",
		endDate: "August 2023",
		summary:
			"Boosted product visibility with nested sitemaps, managed call frequencies with a rate limiter, and introduced role-based subscriptions. Ensured system stability with CRON jobs and utilized LLMs for data extraction.",
		techStack: [
			"React",
			"Nextjs",
			"Flask",
			"Python",
			"OpenAPI",
			"Apache Superset",
			"GCP",
			"OpenAI API",
		],
		logo: ngram,
		link: "https://www.ngram.com/",
	},
	{
		role: "SDE Intern",
		company: "Nuance Communications",
		duration: "3 months",
		startDate: "May 2022",
		endDate: "July 2022",
		summary:
			"Implemented industry best practices for Git and coding, emphasized Test Driven Development, and actively participated in Agile methodologies, ensuring high-quality code and successful project delivery through collaborative teamwork.",
		techStack: ["React", "Ruby on Rails", "MySQL", "Redis"],
		logo: nuance,
		link: "https://www.nuance.com/index.html",
	},
];