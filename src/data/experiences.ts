import { Experience } from "../types/experience";
import foliox from "../assets/logos/foliox-light.png";
import ngram from "../assets/logos/ngram.svg";
import nuance from "../assets/logos/nuance.jpeg";
import onboard from "../assets/logos/onboard.png";

export const experiences: Experience[] = [
	{
		role: "Frontend Developer and Integrations Engineer",
		company: "folioX",
		duration: "4 months",
		startDate: "December 2023",
		endDate: "Present",
		summary: "",
		techStack: ["React", "Nextjs", "Wagmi", "Ethers.js", "Tailwind", "Radix"],
		logo: foliox,
		link: "https://www.foliox.io/",
	},
	{
		role: "Full Stack Software Developer",
		company: "OnboardStudiosOÜ",
		duration: "8 months",
		startDate: "March 2022",
		endDate: "November 2022",
		summary: "",
		techStack: [
			"React",
			"Nodejs",
			"Express.js",
			"Ethers.js",
			"SCSS",
			"MongoDB",
      "Linux"
		],
		logo: onboard,
	},
	{
		role: "SDE Intern",
		company: "ngram",
		duration: "8 months",
		startDate: "January 2023",
		endDate: "August 2023",
		summary: "",
		techStack: ["React", "Nextjs", "Flask", "Python", "OpenAPI", "Apache Superset", "GCP", "OpenAI API"],
		logo: ngram,
	},
	{
		role: "SDE Intern",
		company: "Nuance Communications",
		duration: "3 months",
		startDate: "May 2022",
		endDate: "July 2022",
		summary: "",
		techStack: ["React", "Ruby on Rails", "MySQL", "Redis"],
		logo: nuance,
	},
];