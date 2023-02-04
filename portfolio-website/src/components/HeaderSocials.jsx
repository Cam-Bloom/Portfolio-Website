import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";

const HeaderSocials = () => {
	return (
		<div className="header__socials">
			<a href="" target="_blank">
				<FiLinkedin />
			</a>
			<a href="" target="_blank">
				<FiGithub />
			</a>
			<a href="" target="_blank">
				<FiPhone />
			</a>
		</div>
	);
};

export default HeaderSocials;
