import $ from 'jquery';

export async function initDarkMode() {
	const { dark_mode = true } = await chrome.storage.local.get('dark_mode');

	$('#darkImg').attr('src',
		dark_mode
			? 'https://i.imgur.com/W5fIgtO.png'
			: 'https://i.imgur.com/awVbvCE.png'
	);

	const href = chrome.runtime.getURL('content/src/styles/darkmode.css');

	const styleEl = $('<link>', {
		id: 'darkModeCSS',
		rel: 'stylesheet',
		type: 'text/css',
		href: dark_mode ? href : ''
	});

	$(document.head).append(styleEl);
}


export async function toggleDarkMode() {
	const { dark_mode = true } = await chrome.storage.local.get('dark_mode');

	// Disable dark mode
	if (dark_mode) {
		$('#darkBtn > img').attr('src', 'https://i.imgur.com/awVbvCE.png');
		$('#darkModeCSS').attr({ href: '' });
	}

	// Enable dark mode
	else {
		$('#darkBtn > img').attr('src', 'https://i.imgur.com/W5fIgtO.png');
		const href = chrome.runtime.getURL('content/src/styles/darkmode.css');
		$('#darkModeCSS').attr({ href });
	}

	chrome.storage.local.set({ dark_mode: !dark_mode });
}
