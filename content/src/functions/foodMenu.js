import $ from 'jquery';

import foodMenu from '../components/foodMenu.js';

export async function initFoodMenu() {
	const menuEl = await foodMenu();
	$('.pushmenu-push').append(menuEl);
}

export async function toggleFood() {
	$('#skolmat').toggleClass('visible');
}

export async function getMenu() {
	const data = await $.get('https://skolmaten.se/api/3/menu/?school=4806606910914560&limit=2&offset=0&client=j44i0zuqo8izmlwg5blh');
	// const todayIndex = new Date().getDay() - 1;
	const todayIndex = 0;
	const meals = data.weeks[0].days[todayIndex].meals.map(meal => meal.value);
	const imgURL = data.school.imageURL;
	const schoolName = data.school.name;

	return { meals, imgURL, schoolName };
}
