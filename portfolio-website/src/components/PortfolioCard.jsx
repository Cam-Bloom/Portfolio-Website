import { FiGithub, FiFolder, FiLink } from "react-icons/fi";

const PortfolioCard = ({ item }) => {
	const { title, desc, technoUsed, githubLink, liveLink } = item;
	return (
		<li className="portfolio__item">
			<div className="item__inner">
				<div>
					<div className="project-top">
						<div>
							<FiFolder className="folderIcon" />
						</div>
						<div className="project-links">
							{githubLink && (
								<a href={githubLink} target="_blank">
									<FiGithub />
								</a>
							)}
							{liveLink && (
								<a href={liveLink}>
									<FiLink />
								</a>
							)}
						</div>
					</div>
					<h3>{title}</h3>
					<p>{desc}</p>
				</div>
				<footer>
					<ul className="technoUsed">
						{technoUsed.map((item) => (
							<li key={item}>{item}</li>
						))}
					</ul>
				</footer>
			</div>
		</li>
	);
};

export default PortfolioCard;

{
	/* <h3>{title}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sit architecto laboriosam aliquid? Quasi vol</p>
        <div className="portfolio__item-cta">
            <a href="" className="btn" target='_blank'>Github</a>
            <a href="" className="btn btn-primary" target='_blank'>Demo</a>
        </div> */
}
