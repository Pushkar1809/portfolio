import { Experience } from '../types/experience';
import out from "../assets/icons/link.svg";

const ExperienceCard = (props: Experience) => {
	const {
		role,
		company,
		duration,
		startDate,
		endDate,
		summary,
		techStack,
		logo,
		link,
	} = props;
	return (
		<div className="flex justify-center">
			<div className="flex justify-end items-start w-3/12 mt-[1.75rem]">
				{startDate} - {endDate}
			</div>
			<div className="flex justify-center flex-1 gap-3">
				<img className="w-10 h-10 rounded-full mt-6" src={logo} alt={company} />
				<div className="w-7/12 my-3">
					<div className="flex justify-start gap-2 items-end">
						<h2 className="text-3xl font-bold">{role}</h2>
					</div>
					<div className="flex items-center justify-start mt-[-0.25rem] gap-2">
						<p className="text-lg font-semibold ">{company}</p>
						<p className="text-lg font-bold">•</p>
						<p>{duration}</p>
					</div>

					<p className="leading-5 text-lg mt-2 font-medium opacity-70">{summary}</p>
					<div className="flex flex-wrap gap-1 mt-5 w-fit">
						{techStack.map((tag) => (
							<div
								key={tag}
								className="border border-black rounded-full px-2 uppercase text-sm font-bold leading-4 pb-[0.1rem]">
								{tag}
							</div>
						))}
					</div>
					<div className="flex gap-3 mt-2 w-fit">
						{link && (
							<a href={link} className="flex items-center group">
								<img
									src={out}
									alt="link"
									className="h-5 group-hover:animate-wiggle mr-1"
								/>
								<span className="text-xl mb-1 font-semibold group-hover:font-bold group-hover:text-instagram transition-all ease-in-out duration-300">
									{company}
								</span>
							</a>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ExperienceCard;
