import $ from 'jquery';

import { getMenu } from '../functions/foodMenu.js';

export default (async () => {
	const { meals, imgURL, schoolName } = await getMenu();

	return $(`
		<div id="skolmat" style="visibility: hidden">
			<img src=${imgURL} />
			<h1>Skolmaten</h1>
			<h3>${schoolName}</h3>
			${meals.map(meal => `<h3>${meal}</h3>`).join('')}
		</div>
	`)
});