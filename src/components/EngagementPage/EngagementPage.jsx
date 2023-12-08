import React, { useEffect, useRef } from 'react';
import "./EngagementPage.scss";
import vid2 from "../../../public/gif/vid2.mp4"

export default function EngagementPage() {
	return (
		<div id='engagementPage' className='main'>
			<div className='wrapper'>
				<h1 className='title'>Вовлеченность аудитории</h1>
				<div>
					<p className='description'>
						Хотите держать свою аудиторию в курсе последних событий в вашей компании?<br></br><br></br>Желаете оповещать о планах и активно вовлекать аудиторию в ваши процессы?<br></br><br></br>
						С нашим приложением вы сможете информировать свою аудиторию о предстоящих мероприятиях и значимых планах. Не упустите шанс привлечь новых участников к вашим событиям и проектам. Вовлекайте аудиторию в ваши процессы, увеличивайте узнаваемость бренда!</p>
					<video src={vid2} width="790" height="380" autoPlay loop muted />
					<p className='description'>Наше решение поможет вам держать вашу аудитрию в курсе последних событий в вашей компании, оповещать о планах и вовлекать аудиторию в ваши процессы! </p>
				</div>
			</div>
		</div>
	);
};