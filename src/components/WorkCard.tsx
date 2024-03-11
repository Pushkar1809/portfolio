import code from '../assets/icons/code.svg';
import info from "../assets/icons/info.svg";
import link from "../assets/icons/link.svg";

interface Props {
  title: string;
  codeImg: string;
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
		<div>
			<img src={displayImg} alt={title} />
			<div>
				<h2>{title}</h2>
				<p>{date}</p>
			</div>
			<p>{description}</p>
			<div>
				{codeLink && (
					<a href={codeLink}>
						<img src={code} alt="code" />
						Code
					</a>
				)}
				{liveLink && (
					<a href={liveLink}>
						<img src={link} alt="link" />
						Live
					</a>
				)}
				{infoLink && (
					<a href={infoLink}>
						<img src={info} alt="info" />
						Info
					</a>
				)}
			</div>
      <div>
        {tags.map(tag => <div key={tag}>
          {tag}
        </div>)}
      </div>
		</div>
	);
}

export default WorkCard;