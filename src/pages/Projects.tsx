import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import { Project } from "../types/project";

const Projects = () => {
	return <div className="flex-1 border-b border-black">{
		projects.map((project: Project, index: number) => <ProjectCard key={index} {...project}/>)
	}</div>;
};

export default Projects;
