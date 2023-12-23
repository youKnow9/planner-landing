import React, { useEffect, useRef } from 'react';
import "./SimplicityPage.scss";
import vid1 from "../../../public/gif/vid1.mp4"

export default function SimplicityPage() {
	return (
		<div className='main versatility'>
			<div className='wrapper'>
				<div className='description-title'>
					<h1 className='title'>Простота использования</h1>
				</div>
				<div className='description-wrapper'>
					<p className='description'>Проект предлагает максимально интуитивно понятный интерфейс, который обеспечивает удобство при взаимодействии с приложением. Вы с легкостью сможете находить и просматривать разнообразные мероприятия, благодаря инновационному и удобному механизму просмотра.</p>
					<video src={vid1} width="100%" height="100%" autoPlay loop muted />
					<p className='description'>В базовом варианте уже внедрен функционал авторизации, регистрации, добавления и удаления событий, а также возможность для вашей аудитории присоединиться к мероприятию! Добавляйте фото, получайте уведомления на email! Помимо этого, вы можете приглашать других пользователей присоединяться к вашим событиям, создавая интерактивное и динамичное взаимодействие между участниками. Все эти элементы объединены в систему, обеспечивая вам плавный и приятный опыт использования.</p>
				</div>
			</div>
		</div>
	);
};

