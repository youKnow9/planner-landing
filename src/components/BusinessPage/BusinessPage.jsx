import React, { useState } from 'react';
import "./BusinessPage.scss";
import axios from "axios";


export default function BusinessPage() {

	const [phoneNumber, setPhoneNumber] = useState('');
	const [name, setName] = useState('');
	const [phoneNumberError, setPhoneNumberError] = useState('');
	const [nameError, setNameError] = useState('');

	const validatePhoneNumber = (value) => {
		const phoneNumberRegex = /^\+7\d{10}$/;
		return phoneNumberRegex.test(value);
	};

	const validateName = (value) => {
		return value.trim() !== '';
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const isPhoneNumberValid = validatePhoneNumber(phoneNumber);
		const isNameValid = validateName(name);

		if (!isPhoneNumberValid) {
			setPhoneNumberError('Пожалуйста, введите номер в формате (+7).');
		} else {
			setPhoneNumberError('');
		}

		if (!isNameValid) {
			setNameError('Пожалуйста, введите ваше имя');
		} else {
			setNameError('');
		}

		if (isPhoneNumberValid && isNameValid) {
			console.log({ phoneNumber, name });
			const url = "http://localhost/leads.php";

			let fData = new FormData();
			fData.append("number", phoneNumber);
			fData.append("name", name);

			axios.post(url, fData)
			.then(response => console.log(response,'форма отправлена типа'))
			.catch(error => console.log(error))
		}

		
	};

	return (
		<div id='businessPage' className=''>
			<div className='wrapper-form'>
				<h1>Хотите получить персональный дизайн и функциональность?</h1>
				<form onSubmit={handleSubmit}>
					<div>
						<label htmlFor="phoneNumber">Номер телефона (+7)</label>
						<input
							type="text"
							id="phoneNumber"
							value={phoneNumber}
							onChange={(e) => setPhoneNumber(e.target.value)}
						/>
						{phoneNumberError && <p className="error">{phoneNumberError}</p>}
					</div>
					<div>
						<label htmlFor="name">Имя</label>
						<input
							type="text"
							id="name"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
						{nameError && <p className="error">{nameError}</p>}
					</div>
					<div>
						<button type="submit" onClick={handleSubmit}>Получить предложение</button>
					</div>
				</form>
			</div>
		</div>
	);
};