import React, { useEffect, useRef } from 'react';
import "./VersatilityPage.scss";
import vid2 from "../../../public/gif/vid2.mp4"

export default function VersatilityPage() {
	return (
		<div className='main'>
			<div className='wrapper'>
				<div className='description-title gray'>
					<h1 className='title'>Универсальность</h1>
				</div>
				<div className='description-wrapper '>
					<p className='description'>Универсальная конфигурация позволяет легко настраивать внешний вид и функциональность приложения. Открытый исходный код дает возможность добавлять собственные стили, расширять функциональность и удалять ненужные компоненты. Удобное хранение данных в CMS Strapi обеспечивает простой доступ и управление контентом, включая создание и настройку собственных типов данных и взаимосвязей.</p>
					<video src={vid2} width="100%" height="100%" autoPlay loop muted />
					<p className='description'>Помимо этого, вы можете легко интегрировать дополнительные модули и плагины, давая приложению еще больше возможностей в соответствии с вашими уникальными потребностями. Кроме того, система управления контентом Strapi обеспечивает высокий уровень безопасности и эффективного взаимодействия с данными.</p>
				</div>
			</div>
		</div>
	);
};
