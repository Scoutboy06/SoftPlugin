const logo = '<img  id="logoL" src="https://www.schoolsoft.se/5b0c9e828c5b637b38953b3ea41e5e86.svg" height="30px" />'
const profileIcon = '<span  id="profileicon" class="text top-gray-bar-info"><img id="pfp" src="https://img.icons8.com/material-rounded/30/user-male-circle.png"/></span>'
const menuIcon = '<span  id="menuicon" tabindex="1" class="top-gray-bar-info text"><img id="menuimg" src="https://img.icons8.com/ios-glyphs/30/menu-rounded.png" /></span>'


const profileData = `<div class="col3" ><div id="leftContainer2" >
<div id="leftMenu2" >
	<div id="menu_left2" ><ul  class="second-navigation"></ul></div>
</div>
</div>
</div>
`
function loadMenus() {

	const items = [];
	$("#menu_left").children().each(i => {
		let item = $('#menu_left').children().eq(i);
		if (item.attr('class') != undefined) {
			if (item.attr('class').split(' ').includes('menu_header')) {
				items.push([{ name: item.text(), href: null, id: item.get(0).id }])
			}
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

	$("#menu_left").append('<ul  class="main-navigation">')

	for (const header of items) {
		if (items.indexOf(header) < items.length - 1) {
			let i = items.indexOf(header)
			if (items[i + 1][0].name == header[0].name) continue
		}
		if (!header[0].name) continue
		$(".main-navigation").append(`<li  class="menu_header nav-header nav-header-${header[0].name}">${header[0].name}<ul ></ul></li>`)
		for (const item of header) {
			if (header.indexOf(item) == 0) continue;
			if (item.name.length > 20) continue;
			const li = document.createElement('li');
			li.innerHTML = `<a  href="${item.href}">${item.name}</a>`
			try {
				$(`.nav-header-${header[0].name}`).children().get(0).append(li)
			} catch (e) {
				console.log(header[0].name)
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

		$(".second-navigation").append(`<li  class="menu_header nav-header nav-header-${item.name}"><a  href="${item.overwrite ? item.href : url + item.href}">${item.name}</a></li>`)
	}

	$(".col2").hide();
	$(".col3").hide()
}

function loadEvents() {
	$("#menuicon").click(() => {
		let col = $(".col2");
		col.toggle();
		$(this).data('clicked', true);
	})

	$("#logoL").click(() => {
		let oldParts = window.location.href.split('/');
		oldParts = oldParts.slice(0, 6);
		console.log(oldParts)
		oldParts.push('right_student_startpage.jsp')
		window.location.href = oldParts.join('/')
	})

	$(".pushmenu-push").keydown(event => {
		if (event.keyCode == 27) {
			$(".col2").hide();
			$(".col3").hide();
		}
	})

	$(".col2").on("click", event => { $(this).data('clicked', true) })
	$(".col3").on("click", event => { $(this).data('clicked', true) })
	

	

	$("#profileicon").click(() => {
		$(".col3").toggle()
		$(this).data('clicked', true)
	})

	$(".pushmenu-push").on("click", event => {
		const col2 = $(".col2"), col3 = $(".col3");
		const menuicon = $("#menuicon"), profileicon = $("#profileicon");
		console.log(event.target.id)
		if (!col2.data('clicked') && event.target.id != 'menuimg') col2.hide();
		if (!col3.data('clicked') && event.target.id != 'pfp') col3.hide(); 
	})

	$("li").click(event => {
		const content = $(event.target).children().get(0);
		if ($(content).attr('href')) {
			window.location.href = $(content).attr('href')
		}
		console.log($(event.target).children().get(0))
	})
}

function hasAdblocker() {
	let fakeAd;
	if (document.getElementsByClassName('textads').length == 0) {

		fakeAd = document.createElement("div");
		fakeAd.className =
			"textads banner-ads banner_ads ad-unit ad-zone ad-space adsbox"

		fakeAd.style.height = "1px"

		document.body.appendChild(fakeAd)

	} else {
		fakeAd = document.getElementsByClassName('textads')[0];
	}

	let x_width = fakeAd.offsetHeight;
	if (x_width) return false;
	return true;
}



// const items = [];
// $("#menu_left").children().each(i => {
// 	let item = $('#menu_left').children().eq(i);
// 	if (item.attr('class') != undefined) {
// 		if (item.attr('class').split(' ').includes('menu_header')) {
// 			items.push([{ name: item.text(), href: null }])
// 		}
// 	} else {
// 		items[items.length-1].push({ name: item.text(), href: item.attr('href') })
// 	}
// })

// $("#menu_left").children().each(i => {
// 	let item = $('#menu_left').children().eq(i);


// 	item.hover(() => {
// 		console.log()
// 		console.log(item.get(0).innerHTML.includes('menu_item'))
// 		if (item.get(0).innerHTML.includes('menu_item')) return
// 		expand(item.attr('id').replaceAll('on', "").replaceAll("off", ""))
// 	}, () => {
// 		if (item.get(0).innerHTML.includes('menu_item')) return
// 		contract(item.attr('id').replaceAll('on', "").replaceAll("off", ""))
// 	})
// })



function url_content(url) {
	return $.get(url);
}



function main() {
	$(".cal-lesson").css("border-radius", "0px");
	$(".cal-lesson").css("background-image", "-webkit-linear-gradient(top, #2b518f, #2b518f)")
	$(".cal-lesson").css("border", "1px solid #000")

	$(".cal-test").css("border-radius", "0px");
	$(".cal-test").css("background-image", "-webkit-linear-gradient(top, #660000, #660000)")
	$("#content").css("width", "98.8%")
	$("#main").css("width", "108%")
	$(".pushmenu-push").css("overflow-x", "hidden")
	if (window.location.href.includes('startpage')) {
		var span = $(".span6right").clone()
		span.attr("id", "betyg")
		$(".img-rounded").attr("src", "https://i.imgur.com/fw5vBqp.png")
		$(".img-rounded").css("width", "9%")
		$("#top_content_wrapper").css("width", "96%")
		$(".ng-scope").append(`<div class="span6right" id="betyg" >
<div class="h2_container" id="news_con" >
  <div class="h2_box" >
    <div class="h2_box_icon" style="margin-left:-10px; padding-top:2px;" >
      <img src="https://icons.veryicon.com/png/o/business/vscode-program-item-icon/changelog.png" alt="" title="" >
    </div>
    <div class=" h3 " style="margin-top:6px; padding-left:6px;" >Changelog</div>
  </div>
  <div id="news_con_content" class="h2_innerno_pad" >
    <div class="h3_bold" >Här ser du senaste ändringar på vårat plugin.</div>
    <table class="table table-striped news-private" style="width: 370px; word-break: break-word; border-right: rgb(204, 204, 204);" >
      <tbody >
        <tr class="news-private" >
          <td class="news-private-td" >
            <a class="toplist-item" href="" >
              <div class="list-top" ></div>
              <div class="heading_bold" >Introducerar dark-theme</div>
              <div >Använd SchoolSoft med dark-theme redan idag.</div>
            </a>
          </td>
          <td class="news-private-td-right" align="center" ></td>
        </tr>
        <tr class="news-private" >
          <td class="news-private-td" >
            <a class="toplist-item" href="" >
              <div class="list-top" ></div>
              <div class="heading_bold" >NTIP byggs fortfarande!</div>
              <div >Utvecklingen av NTIP påbörjades 2023-01-24!</div>
            </a>
          </td>
          <td class="news-private-td-right" align="center" ></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</div>`)
	}

	$("#header").children().remove();
	$("#header").append('<div id="top" ></div>')
	$("#top").append(menuIcon)
	$("#top").append(profileIcon)
	$("#top").append(logo);

	$.get("https://sms.schoolsoft.se/nti/jsp/student/right_student_pwdadmin.jsp").then(function (data) {
		try {
			$("#pfp").get(0).src = data.split('<img')[2].split('"')[1]

			$("#pfp").css("height", "120%")
			$("#pfp").css("width", "100%")
		} catch (e) { }

	});

	loadMenus();
	loadEvents();

	if (hasAdblocker()) {
		$('.pushmenu-push').children().remove();
		$('.pushmenu-push').append(`<img  width="${window.innerWidth}" height="${window.innerHeight}"
		src="https://media1.giphy.com/media/Vuw9m5wXviFIQ/giphy.gif"/>`)
	}

	setInterval(() => {
		if (hasAdblocker()) alert('Disable your adblocker!')
		else clearInterval(this);
	}, 10)

	setInterval(() => {
		$('#content_wrapper').show();
		$('#top-box').hide();
	}, 30 * 60000);
}

jQuery(function () {
	chrome.storage.local.get().then(items => {
		console.log(items)
		if (items['new-ui']) {
			
			main();
			var elems = document.body.getElementsByTagName("*");
			document.body.setAttribute('data-newui', 'true');
			for (const elem of elems) {
				elem.setAttribute('data-newui', 'true')
			}
		}
		if (items['dark-mode']) {
			var elems = document.body.getElementsByTagName("*");
			document.body.setAttribute('data-darkmode', 'true');
			for (const elem of elems) {
				elem.setAttribute('data-darkmode', 'true')
			}
		}
	})
})
