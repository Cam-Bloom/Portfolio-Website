import PortfolioCard from "./PortfolioCard";

const portfolioItems = [
	{
		title: "News Website",
		desc: "A fully responsive mobile-first web app that uses the 'News Article API' to display articles which users can sort, read, add comments and like.",
		technoUsed: ["Javascript", "React", "CSS3"],
		githubLink: "https://github.com/Cam-Bloom/FE-News-Site",
		liveLink: "https://bloom-news.netlify.app/",
	},
	{
		title: "News Article API",
		desc: "A RESTful API that has a various end points. Implementing CRUD operations for effective developer use. ",
		technoUsed: ["Node", "Express", "PostgresSQL"],
		githubLink: "https://github.com/Cam-Bloom/BE-News-API",
		liveLink: "https://cb-news-api.onrender.com/api",
	},
	{
		title: "Portfolio Website",
		desc: "This current page! A fully responsive static website to display my work and information.",
		technoUsed: ["React", "Javascript", "CSS3"],
		githubLink: "https://github.com/Cam-Bloom/Portfolio-Website",
		liveLink: "https://cam-bloom.netlify.app/",
	},
	{
		title: "Depth Filtration Modeling",
		desc: "A 3D graph model of filtration of a lauter tun in a brewing process using MATLAB.",
		technoUsed: ["MATLAB"],
		githubLink: "https://github.com/Cam-Bloom/Multilayer-Modeling-Lauter-Tun"
	},
	{
		title: "Music Near Me",
		desc: "A web app that uses the TicketMaster API along with user inputed data to display music events nearby with a map view.",
		technoUsed: ["JavaScript", "React", 'CSS3', 'map-gl'],
		githubLink: "https://github.com/Cam-Bloom/music-near-me",
		liveLink: "https://cam-bloom.netlify.app/",
	},
	{
		title: "Northcoders Final Project Coming Soon",
		desc: "My final project at Northcoders, as part of a group we are developing a full-stack application with brand new technology.",
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
