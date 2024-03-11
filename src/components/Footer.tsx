import resume from '../assets/pdfs/resume.pdf';

const Footer = () => {
  const socialLinks = [
		{
			id: "LinkedIn",
			to: "https://www.linkedin.com/in/pushkar-borkar/",
			color: "linkedin",
		},
		{
			id: "GitHub",
			to: "https://github.com/Pushkar1809",
			color: "github",
		},
		{
			id: "Twitter/X",
			to: "https://twitter.com/0xPushkr",
			color: "twitter",
		},
		{
			id: "Instagram",
			to: "https://www.instagram.com/champagnebappi/",
			color: "instagram",
		},
		{
			id: "Twitch",
			to: "https://www.twitch.tv/pushkarborkar",
			color: "twitch",
		},
		{
			id: "Resume",
			to: resume,
			color: "default",
		},
		{
			id: "Mail",
			to: "mailto:pushkarborkar1809@gmail.com",
			color: "default",
		},
	];

  return (
		<footer className="flex flex-col justify-center items-center w-full py-2">
			<ul className="flex justify-between items-center w-full mb-2">
				{socialLinks.map((link, index) => (
					<li className="font-bold text-xl" key={index}>
						<a
							href={link.to}
							target="_blank"
							rel="noopener noreferrer"
							className={`hover:text-instagram transition-all duration-200 ease-in-out`}>			
								{link.id}
						</a>
					</li>
				))}
			</ul>
			<span className="font-medium">© Pushkar. 2024</span>
		</footer>
	);
}

export default Footer;