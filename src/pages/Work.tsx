import ExperienceCard from "../components/ExperienceCard";
import { experiences } from "../data/experiences";
import { Experience } from "../types/experience";

const Work = () => {
	return (
		<div className="flex-1 border-b border-black">
			{experiences.map((project: Experience, index: number) => (
				<ExperienceCard key={index} {...project} />
			))}
		</div>
	);
};

export default Work;
