import PortfolioCard from "./PortfolioCard";

const portfolioItems = [
	{
		title: "News Website",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptatum quos, aliquam nisi quis eius voluptatibus similique? Tempor,",
		technoUsed: ["Javascript", "React", "CSS3"],
		githubLink: "https://github.com/Cam-Bloom/FE-News-Site",
		liveLink: "https://bloom-news.netlify.app/",
	},
	{
		title: "News Article API",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptatum quos, aliquam nisi quis eius voluptatibus similique? Tempor,",
		technoUsed: ["Node", "Express", "PostgresSQL"],
		githubLink: "https://github.com/Cam-Bloom/BE-News-API",
		liveLink: "https://cb-news-api.onrender.com/api",
	},
	{
		title: "Portfolio Website",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptatum quos, aliquam nisi quis eius voluptatibus similique? Tempor,",
		technoUsed: ["React", "Javascript", "CSS3"],
		githubLink: "https://github.com/Cam-Bloom/Portfolio-Website",
		liveLink: "https://cam-bloom.netlify.app/",
	},
	{
		title: "Depth Filtration Modeling MATLAB",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptatum quos, aliquam nisi quis eius voluptatibus similique? Tempor,",
		technoUsed: ["MATLAB"],
		githubLink: "https://github.com/Cam-Bloom/Multilayer-Modeling-Lauter-Tun"
	},
	{
		title: "Project 5",
		desc: "Loreonsectetur voluptatum quos, aliquam nisi quis eius voluptatibus similique? Tempor,",
		technoUsed: ["node", "express"],
	},
	{
		title: "Northcoders Final Project Coming Soon !!",
		desc: "Loreicing elit. Temporibus voluptatum quos, aliquam nisi quis eius voluptatibus similique? Tempor,",
		technoUsed: ["?", "?", "?"],
	},
];

const Portfolio = () => {
	return (
		<section id="portfolio">
			<h5>My Recent Work</h5>
			<h2>Portfolio</h2>

			<div className="container portfolio__container">
				{portfolioItems.map((item) => (
					<PortfolioCard key={item.title} item={item} />
				))}
			</div>
		</section>
	);
};

export default Portfolio;
