import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";

const HeaderSocials = () => {
	return (
		<div className="header__socials">
			<a href="https://www.linkedin.com/in/cam-bloom/" target="_blank">
				<FiLinkedin />
			</a>
			<a href="https://github.com/Cam-Bloom" target="_blank">
				<FiGithub />
			</a>
			<a href="tel:+447975716698">
				<FiPhone />
			</a>
		</div>
	);
};

export default HeaderSocials;
