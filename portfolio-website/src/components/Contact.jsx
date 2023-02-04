import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm("service_gmc33c7", "template_5ytncv8", form.current, "vZu02FFUw9kSiSzri").then(
			(result) => {
				console.log(result.text);
			},
			(error) => {
				console.log(error.text);
			}
		);

		e.target.reset();
	};

	return (
		<section id="contact" className="container">
			<h5>Get In Touch</h5>
			<h2>Contact Me</h2>

			<form
				ref={form}
				onSubmit={(e) => {
					sendEmail(e);
				}}
			>
				<input type="text" name="name" placeholder="Your Full Name" required />
				<input type="email" name="email" placeholder="Your Email" required />
				<textarea name="message" rows="7" placeholder="Your Message" required></textarea>
				<button type="submit" className="btn btn-primary">
					Send Message
				</button>
			</form>
		</section>
	);
};

export default Contact;
