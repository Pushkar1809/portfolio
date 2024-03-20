import { PrimaryBtn } from "../components/PrimaryBtn";
import resume from "../assets/pushkar-borkar-resume.pdf";

const TopBar = () => (
	<div className="border-b border-dark py-2">
		<div className="flex items-center justify-between max-w-[120ch] mx-auto text-sm font-light">
			<p>
				Pune, <span className="font-medium">India</span>
			</p>
			<p>
				<span className="font-medium">10:23</span> | 23 March, 2024
			</p>
			<div className="flex items-center gap-2">
				<PrimaryBtn label="email" to="mailto:pushkarborkar1809@gmail.com" />
				<PrimaryBtn label="resume" to={resume} />
			</div>
		</div>
	</div>
);

export default TopBar;