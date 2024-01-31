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
			newErrors.name = "Imię jest polem wymaganym.";
		}

		if (!formData.email.trim()) {
			newErrors.email = "Email jest polem wymaganym.";
		} else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
			newErrors.email = "Email jest niepoprawny.";
		}

		if (!formData.subject.trim()) {
			newErrors.subject = "Tytuł jest polem wymaganym.";
		}

		if (!formData.message.trim()) {
			newErrors.message = "Treść jest polem wymaganym.";
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
					className={`${styles["form-control"]} ${
						errors.name ? styles["is-invalid"] : ""
					}`}
					placeholder="Imię"
					name="name"
					value={formData.name}
					onChange={handleChange}
				/>
				{errors.name && <div className={styles.invalid}>{errors.name}</div>}
			</div>
			<div className="form-group">
				<input
					type="email"
					className={`${styles["form-control"]} ${
						errors.email ? styles["is-invalid"] : ""
					}`}
					placeholder="Email"
					name="email"
					value={formData.email}
					onChange={handleChange}
				/>
				{errors.email && <div className={styles.invalid}>{errors.email}</div>}
			</div>
			<div className="form-group">
				<input
					type="text"
					className={`${styles["form-control"]} ${
						errors.subject ? styles["is-invalid"] : ""
					}`}
					placeholder="Tytuł"
					name="subject"
					value={formData.subject}
					onChange={handleChange}
				/>
				{errors.subject && <div className={styles.invalid}>{errors.subject}</div>}
			</div>
			<div className="form-group">
				<textarea
					className={`${styles["form-control"]} ${
						errors.message ? styles["is-invalid"] : ""
					}`}
					placeholder="Treść"
					name="message"
					value={formData.message}
					onChange={handleChange}
				/>
				{errors.message && <div className={styles.invalid}>{errors.message}</div>}
			</div>
			<Button className="blue-btn">Wyślij wiadomość</Button>
		</form>
	);
};

export default ContactForm;
