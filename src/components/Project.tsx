import { Project as ProjType } from "../types";
import { PrimaryBtn } from "./PrimaryBtn";

export const Project = (props: ProjType) => {
	const { title, displayImageSrc, description, timePeriod, skills, urls } =
		props;
	return (
		<div className="relative group/img flex items-start gap-3 border-b border-dark/50 border-dashed px-10">
			<div className="flex items-center gap-3 py-6">
				<img
					src={displayImageSrc}
					alt={title}
					className="opacity-0 w-3/12 ml-[-28ch] group-hover/img:opacity-100 group-hover/img:ml-[-5ch] transition-all ease-in-out duration-300 rounded-lg border-[0.25rem] border-dark shadow-xl"
				/>
				<div>
					<h3 className="text-xl font-semibold">{title}</h3>
					<p className="text-sm font-thin">{timePeriod}</p>
					<p className="my-3 max-w-[60ch]">{description}</p>
					<div className="flex flex-wrap items-center gap-1">
						{skills.map((skill: string, index: number) => (
							<div
								key={index}
								className="px-2 text-sm font-medium rounded-full w-fit border-[1.5px] border-dark">
								{skill}
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="absolute flex items-end flex-col top-5 right-5 z-10 group-hover/img:text-xl">
				{urls.map((url: { name: string; to: string }, index: number) => (
					<PrimaryBtn key={index} to={url.to} label={url.name} />
				))}
			</div>
		</div>
	);
};
