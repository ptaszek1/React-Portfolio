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
	const [submitStatus, setSubmitStatus] = useState<string | null>(null);

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

		if (/[^a-zA-Z0-9 ]/.test(formData.name)) {
			newErrors.name = "Imię zawiera niedozwolone znaki.";
		}

		if (/[^a-zA-Z0-9 ]/.test(formData.subject)) {
			newErrors.subject = "Tytuł zawiera niedozwolone znaki.";
		}

		if (
			formData.message.includes("http://") ||
			formData.message.includes("https://")
		) {
			newErrors.message = "Treść nie może zawierać linków.";
		}

		setErrors(newErrors);

		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!validateForm()) {
			return;
		}

		try {
			const formDataEntries = Object.entries(formData);
			const response = await fetch(
				"http://mariuszptaszek.pl/contactForm/contact.php",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/x-www-form-urlencoded",
					},
					body: new URLSearchParams(formDataEntries).toString(),
				}
			);

			if (!response.ok) {
				throw new Error(`Błąd serwera: ${response.statusText}`);
			}

			const text = await response.text();
			const data = JSON.parse(text.trim());

			if (!data.success) {
				throw new Error(`Błąd serwera: ${data.message}`);
			}

			onSubmit(formData);
			setSubmitStatus("Wiadomość została wysłana. Dziękuje!");
		} catch (error) {
			if (error instanceof Error) {
				setSubmitStatus(`Error: ${error.message}`);
			} else {
				setSubmitStatus("Błąd serwera. Spróbuj ponownie później.");
			}
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
					placeholder="Imię i nazwisko"
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
					placeholder="Adres E-mail"
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
					placeholder="Tytuł wiadomości"
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
					placeholder="Treść wiadomości"
					name="message"
					value={formData.message}
					onChange={handleChange}
				/>
				{errors.message && <div className={styles.invalid}>{errors.message}</div>}
			</div>
			<Button className="blue-btn">Wyślij wiadomość</Button>
			{submitStatus && (
				<div
					className={`${styles["submit-status"]} ${
						submitStatus.includes("Error") ? styles.error : styles.success
					}`}
				>
					{submitStatus}
				</div>
			)}
		</form>
	);
};

export default ContactForm;
