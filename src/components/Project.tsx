import { Project as ProjType } from "../types";
import { PrimaryBtn } from "./PrimaryBtn";

export const Project = (props: ProjType) => { 
const {title, displayImageSrc, description, timePeriod, skills, urls} = props;
  return (
    <div className="relative group/img flex items-start gap-3 border-b border-dark/50 border-dashed px-10">
      <div className="w-7/12 py-6">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm font-thin">{timePeriod}</p>
        <p className="my-3">{description}</p>
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
      <div className="absolute flex items-end flex-col top-5 right-5 z-10">
        {urls.map((url: { name: string; to: string }, index: number) => (
          <PrimaryBtn key={index} to={url.to} label={url.name} />
        ))}
      </div>
      <img
        src={displayImageSrc}
        alt={title}
        className="absolute h-full top-0 right-[16%] z-0 opacity-0 group-hover/img:opacity-80 group-hover/img:right-[12%] transition-all ease-in-out duration-200"
      />
    </div>
	);}