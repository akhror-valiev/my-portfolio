import "./contact.scss";
import { useState, useRef } from "react";
import emailjs from "emailjs-com";
export const Contact = () => {
	const [message, setMessage] = useState(false);
	const formRef = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();
		setMessage(true);
		emailjs.sendForm(
			"service_5taafio",
			"template_6vd8qsi",
			formRef.current,
			"user_8xEu73RMLclaDqMSBFOMG"
		);
	};
	return (
		<div className="contact" id="contact">
			<div className="left">
				<img src="assets/shake.svg" alt="" />
			</div>
			<div className="right">
				<h2>Contact.</h2>
				<form ref={formRef} onSubmit={handleSubmit}>
					<input type="text" placeholder="Subject" name="user_subject" />
					<input type="text" placeholder="Email" name="user_email" />
					<textarea placeholder="Message" name="message" />
					<button type="submit">Send</button>
					{message && <span>Thanks, I will reply ASAP :)</span>}
				</form>
			</div>
		</div>
	);
};

export default Contact;
