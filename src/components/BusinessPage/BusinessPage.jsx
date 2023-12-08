import React, { useState } from 'react';
import "./BusinessPage.scss";

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
			setPhoneNumberError('Please enter a valid Russian phone number (+7 and 10 digits).');
		} else {
			setPhoneNumberError('');
		}

		if (!isNameValid) {
			setNameError('Please enter your name.');
		} else {
			setNameError('');
		}

		if (isPhoneNumberValid && isNameValid) {
			console.log('Form submitted:', { phoneNumber, name });
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
						<button type="submit">Submit</button>
					</div>
				</form>
			</div>
		</div>
	);
};