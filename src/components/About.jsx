import { FiAward, FiUsers, FiFolder } from "react-icons/fi";
import profilePic from "../assets/profilePic.svg";

const About = () => {
	return (
		<section id="about">
			<h5>Get To Know</h5>
			<h2>About Me</h2>

			<div className="container about__container">
				<div className="about__me">
					<img className="about__me-image" src={profilePic} alt="Profile Picture" />
				</div>

				<div className="about__content">
					<div className="about__cards">
						<article className="about__card">
							<FiAward className="about__icon" />
							<h5>Bachelor's Degree</h5>
							<small>First Class Honours</small>
						</article>

						<article className="about__card">
							<FiUsers className="about__icon" />
							<h5>Northcoders Bootcamp</h5>
							<small>480 Coding hours</small>
						</article>

						<article className="about__card">
							<FiFolder className="about__icon" />
							<h5>Projects</h5>
							<small>10+ Projects Completed</small>
						</article>
					</div>
					<p>
						I am a recent graduate from Northcoders coding bootcamp, where I honed my skills in
						JavaScript, HTML, CSS, Node, and React. I hold a degree in Chemical Engineering which
						has helped me develop a strong analytical mindset, critical thinking, and
						problem-solving skills. I am eager to use my technical skills and knowledge to
						contribute to real-world projects and take on new challenges in software development.
						Through my coding bootcamp, I have worked on various individual and group projects,
						examples of which can be found below. I am constantly seeking to learn and grow my skills and I am excited to bring
						my passion, creativity and dedication to a team. I am confident that I will be a
						valuable asset to any project and I look forward to the opportunity to prove my
						abilities.
					</p>

					<a href="#contact" className=" btn btn-primary">
						{" "}
						Let's Talk
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
