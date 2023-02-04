import { FiLinkedin, FiGithub, FiPhone } from "react-icons/fi";

const Footer = () => {
	return (
		<footer className="footer">
			<a href="#" className="footer_name_logo">
				CAMERON BLOOMFIELD
			</a>

			<ul className="permalinks">
				<li>
					<a href="#">Home</a>
				</li>
				<li>
					<a href="#about">About</a>
				</li>
				<li>
					<a href="#portfolio">Portfolio</a>
				</li>
				<li>
					<a href="#contact">Contact</a>
				</li>
			</ul>

			<div className="footer_socials">
				<a href="">
					<FiLinkedin />
				</a>
				<a href="">
					<FiGithub />
				</a>
				<a href="">
					<FiPhone />
				</a>
			</div>
		</footer>
	);
};

export default Footer;
