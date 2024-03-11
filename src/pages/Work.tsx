import WorkCard from "../components/WorkCard";

const Work = () => {
	return (
		<div className="flex-1">
			<WorkCard
				title="Title Work"
				description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, tempora? Quis et ab, impedit doloribus voluptatibus unde dolor nihil quod!"
				displayImg="https://devfolio-prod.s3.ap-south-1.amazonaws.com/hackathons/1753c2d8947344019fd07fd5259b9fd1/projects/770b33e692314a3693fd3c54d9a22a9f/ab584910-5adb-42b1-914f-c7f449f3fc0f.png"
				date="20 Feb, 2024"
				tags={["React", "Framer", "Typescript"]}
				infoLink="https://devfolio.co/projects/shatranj-d063"
				codeLink="https://github.com/Pushkar1809/shatranj-1"
			/>
		</div>
	);
};

export default Work;
