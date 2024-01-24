import React, { useState } from "react";
import styles from "./ContactForm.module.scss";
import Button from "../Button/Button";

interface FormData {
	name: string;
	email: string;
	subject: string;
	message: string;
}

interface ContactFormProps {
	onSubmit: (formData: FormData) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
	const [formData, setFormData] = useState<FormData>({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const [errors, setErrors] = useState<Partial<FormData>>({});

	const validateForm = () => {
		const newErrors: Partial<FormData> = {};

		if (!formData.name.trim()) {
			newErrors.name = "Name is required";
		}

		if (!formData.email.trim()) {
			newErrors.email = "Email is required";
		} else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
			newErrors.email = "Invalid email format";
		}

		if (!formData.subject.trim()) {
			newErrors.subject = "Subject is required";
		}

		if (!formData.message.trim()) {
			newErrors.message = "Message is required";
		}

		setErrors(newErrors);

		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (validateForm()) {
			onSubmit(formData);
		}
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});

		setErrors({
			...errors,
			[e.target.name]: undefined,
		});
	};

	return (
		<form onSubmit={handleSubmit} className={styles["contact-form"]}>
			<div className="form-group">
				<input
					type="text"
					className={`form-control ${errors.name ? "is-invalid" : ""}`}
					placeholder="Imię"
					name="name"
					value={formData.name}
					onChange={handleChange}
				/>
				{errors.name && <div className="invalid-feedback">{errors.name}</div>}
			</div>
			<div className="form-group">
				<input
					type="email"
					className={`form-control ${errors.email ? "is-invalid" : ""}`}
					placeholder="Email"
					name="email"
					value={formData.email}
					onChange={handleChange}
				/>
				{errors.email && <div className="invalid-feedback">{errors.email}</div>}
			</div>
			<div className="form-group">
				<input
					type="text"
					className={`form-control ${errors.subject ? "is-invalid" : ""}`}
					placeholder="Tytuł"
					name="subject"
					value={formData.subject}
					onChange={handleChange}
				/>
				{errors.subject && (
					<div className="invalid-feedback">{errors.subject}</div>
				)}
			</div>
			<div className="form-group">
				<textarea
					className={`form-control ${errors.message ? "is-invalid" : ""}`}
					placeholder="Treść"
					name="message"
					value={formData.message}
					onChange={handleChange}
				/>
				{errors.message && (
					<div className="invalid-feedback">{errors.message}</div>
				)}
			</div>
			<Button className="blue-btn">Wyślij wiadomość</Button>
		</form>
	);
};

export default ContactForm;
