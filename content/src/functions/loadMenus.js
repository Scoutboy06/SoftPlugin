import $ from 'jquery';

const profileData = `<div class="col3" ><div id="leftContainer2" >
<div id="leftMenu2" >
	<div id="menu_left2" ><ul  class="second-navigation"></ul></div>
</div>
</div>
</div>
`

export default function loadMenus() {

	const items = [];
	$("#menu_left").children().each(i => {
		let item = $('#menu_left').children().eq(i);
		if (item.attr('class') != undefined && item.attr('class').includes('menu_header')) {
			items.push([{ name: item.text(), href: null, id: item.get(0).id }])
		} else {
			items[items.length - 1].push(
				{ name: item.text(), href: item.attr('href'), id: item.get(0).id }
			)
		}
		if (item.get(0).id == 'subject_menu') {
			item.children().each(j => {
				let a = $('#subject_menu').children().eq(j);
				items[items.length - 1].push(
					{ name: a.text(), href: a.attr('href'), id: item.get(0).id }
				)
			})
		}
	})

	$("#menu_left").children().remove();

	$("#menu_left").append('<ul  class="main-navigation menu_part">')

	for (const header of items) {
		if (header.length == 1) continue;
		if (!header[0].name) continue
		$(".main-navigation").append(`<li  class="menu_part menu_header nav-header nav-header-${header[0].name}">${header[0].name}<ul ></ul></li>`)
		for (const item of header) {
			if (header.indexOf(item) == 0) continue;
			if (item.name.length > 50) continue;
			const li = document.createElement('li');
			li.className = 'menu_part'
			li.innerHTML = `<a  href="${item.href}">${item.name}</a>`
			try {
				$(`.nav-header-${header[0].name}`).children().get(0).append(li)
			} catch (e) {
				$(`.nav-header-Filer`).children().get(0).append(li)
			}
		}
	}

	$(".colright").append(profileData)
	const profileItems = [{
		name: 'Min Profil',
		href: 'student/right_student_pwdadmin.jsp'
	}, {
		name: 'Skolinfo',
		href: 'student/right_student_school.jsp'
	}, {
		name: 'Logga ut',
		href: 'https://nologout.academedia.se',
		overwrite: true
	}]

	for (const item of profileItems) {
		let url = window.location.href.split('/').slice(0, 5).join('/') + '/'

		$(".second-navigation").append(`<li  class="menu_part menu_header nav-header nav-header-${item.name}"><a  href="${item.overwrite ? item.href : url + item.href}">${item.name}</a></li>`)
	}

	$(".col2").hide();
	$(".col3").hide()
}