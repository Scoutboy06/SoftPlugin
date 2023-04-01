import $ from 'jquery';

import { toggleDarkMode } from './darkMode.js';
import { toggleFood } from './foodMenu.js';

import darkModeBtn from '../components/darkModeBtn.js';
import foodBtn from '../components/foodBtn.js';


export async function initNewUI() {
	const styleEl = $('<link>', {
		id: 'newUICSS',
		rel: 'stylesheet',
		type: 'text/css',
	});

	$(document.head).append(styleEl);

	const new_ui = await chrome.storage.local.get('new_ui');
	if (new_ui) enableNewUI();

	let interval = setInterval(() => {
		const topNavBtns = $('#student-header-root > div:first-child > header > div > div:nth-child(2) > div');
		if (!topNavBtns.length) return;

		topNavBtns.append(darkModeBtn);
		topNavBtns.append(foodBtn);

		darkModeBtn.on('click', toggleDarkMode);
		foodBtn.on('click', toggleFood);

		clearInterval(interval);
	}, 100);
}


export async function toggleNewUI() {
	const { new_ui = true } = await chrome.storage.local.get('new_ui');

	if (new_ui) disableNewUI();
	else enableNewUI();

	chrome.storage.local.set({ new_ui: !new_ui });
}


export async function enableNewUI() {
	const href = chrome.runtime.getURL('content/src/styles/newui.css');
	$('#newUICSS').attr({ href });

	if (window.location.href.includes('startpage')) {
		const span = $(".span6right").clone();
		span.attr('id', 'betyg');
	}
}


export function disableNewUI() {
	$('#newUICSS').attr({ href: '' });
	$('#betyg').remove();
}
