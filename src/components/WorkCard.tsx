import code from '../assets/icons/code.svg';
import info from "../assets/icons/info.svg";
import link from "../assets/icons/link.svg";

interface Props {
  title: string;
  codeImg?: string;
  displayImg: string;
  date: string;
  tags: string[];
  description: string;
  codeLink?: string;
  liveLink?: string;
  infoLink?: string;
}

const WorkCard = (props: Props) => {
  const { title, displayImg, date, tags, description, codeLink, liveLink, infoLink } = props;
  return (
		<div className="w-6/12 rounded-lg p-3 text-center">
			<img src={displayImg} alt={title} className="rounded-lg drop-shadow-lg" />
			<div className="flex flex-col justify-center items-center">
				<h2 className="text-3xl font-bold">{title}</h2>
				<p className="mt-[-0.5rem]">{date}</p>
			</div>
			<p className="leading-4">{description}</p>
			<div className="flex flex-wrap gap-1 mt-3 mx-auto w-fit">
				{tags.map((tag) => (
					<div
						key={tag}
						className="border border-black rounded-full px-2 uppercase text-sm font-bold leading-4 pb-[0.1rem]">
						{tag}
					</div>
				))}
			</div>
			<div className="flex gap-3 mt-2 mx-auto w-fit">
				{codeLink && (
					<a href={codeLink} className="flex items-center group">
						<img
							src={code}
							alt="code"
							className="h-5 group-hover:animate-wiggle"
						/>
						<span className="text-xl mb-1 font-semibold group-hover:font-bold group-hover:text-instagram transition-all ease-in-out duration-300">
							Code
						</span>
					</a>
				)}
				{liveLink && (
					<a href={liveLink} className="flex items-center group">
						<img
							src={link}
							alt="link"
							className="h-5 group-hover:animate-wiggle"
						/>
						<span className="text-xl mb-1 font-semibold group-hover:font-bold group-hover:text-instagram transition-all ease-in-out duration-300">
							Live
						</span>
					</a>
				)}
				{infoLink && (
					<a href={infoLink} className="flex items-center group">
						<img
							src={info}
							alt="info"
							className="h-5 group-hover:animate-wiggle"
						/>
						<span className="text-xl mb-1 font-semibold group-hover:font-bold group-hover:text-instagram transition-all ease-in-out duration-300 ml-[-0.15rem]">
							Info
						</span>
					</a>
				)}
			</div>
		</div>
	);
}

export default WorkCard;