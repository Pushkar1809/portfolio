import { Layout } from "../components/Layout";
import home from "../assets/svgs/home.svg";
import { aboutMe } from "../data";
import { EmphasisedText } from "../components/EmphasisedText";

const About = () => (
	<Layout icon={home} title="about me.">
    <EmphasisedText className="text-xl mt-3 pr-[12rem] max-w-[85ch]" text={aboutMe} />
	</Layout>
);

export default About;