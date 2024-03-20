import { Experience as ExpType } from "../types";
import { PrimaryBtn } from './PrimaryBtn';

export const Experience = (props: ExpType) => {
  const { role, company, companyLogoSrc, companyUrl, start, end, summary, skills  } = props;
  return (
		<div className="flex items-start gap-3 border-b border-dark/50 border-dashed px-10 py-7">
			<img
				src={companyLogoSrc}
				alt={company}
				className="rounded-xl w-[3rem] border-2 border-dark shadow-lg"
			/>
			<div className="flex-1 flex justify-between items-start">
				<div>
					<h3 className="text-xl font-semibold">{role}</h3>
					<span className="flex gap-1 opacity-75">
						at{" "}
						{companyUrl ? (
							<PrimaryBtn to={companyUrl} label={company} />
						) : (
							<span className="font-medium">{company}</span>
						)}
					</span>
					<ul className="list-disc ml-4 my-3">
						{summary.map((pt: string, index: number) => (
							<li key={index}>{pt}</li>
						))}
					</ul>
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
				<p className="text-sm opacity-70">
					{start} - {end ? end : "Present"}
				</p>
			</div>
		</div>
	);
}