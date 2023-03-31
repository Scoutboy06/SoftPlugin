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

function loadEvents() {
	$("#menuicon").click(() => {
		let col = $(".col2");
		col.toggle();
		$(this).data('clicked', true);
	})

	$("#logoL").click(() => {
		let oldParts = window.location.href.split('/');
		oldParts = oldParts.slice(0, 6);
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
		if (!event.target.className.includes('menu_part') && event.target.id != 'menuimg') col2.hide();
		if (!col3.data('clicked') && event.target.id != 'pfp') col3.hide();
	})

	$("li").click(event => {
		const content = $(event.target).children().get(0);
		if ($(content).attr('href')) {
			window.location.href = $(content).attr('href')
		}
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

	console.log("Hi")

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

	if (window.location.href.includes('right_student_ability')) {
		$("span").each(i => {
			let item = $("span").eq(i);

			if (item.css('background-color') == 'rgb(255, 255, 255)') {
				item.css('background-color', 'transparent');
			}
		})
	}

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

$.fn.xpathEvaluate = function (xpathExpression) {
	// NOTE: vars not declared local for debug purposes
	$this = this.first(); // Don't make me deal with multiples before coffee

	// Evaluate xpath and retrieve matching nodes
	xpathResult = this[0].evaluate(xpathExpression, this[0], null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);

	result = [];
	while (elem = xpathResult.iterateNext()) {
		result.push(elem);
	}

	$result = jQuery([]).pushStack(result);
	return $result;
}

function setUI() {
	chrome.storage.local.get().then(items => {
		if (items['new-ui']) {

			main();
			setInterval(() => {
				var elems = document.body.getElementsByTagName("*");
				document.body.setAttribute('data-newui', 'true');
				for (const elem of elems) {
					elem.setAttribute('data-newui', 'true')
				}
			});
		}
		if (items['dark-mode']) {

			setInterval(() => {
				var elems = document.body.getElementsByTagName("*");
				document.body.setAttribute('data-darkmode', 'true');
				for (const elem of elems) {
					elem.setAttribute('data-darkmode', 'true')
				}
				if ($("#darkImg").length) {
					$("#darkImg").attr("src", "https://i.imgur.com/W5fIgtO.png")
				}
			});
		} else {
			/*var elems = document.body.getElementsByTagName("*");
				document.body.removeAttribute('data-darkmode');
				for (const elem of elems) {
					elem.removeAttribute('data-darkmode')
				}*/
		}
	})
}
var foodShown = false
function showFood() {
	foodShown = foodShown ? false : true;
	if (foodShown) {
		$(".skolmat_div").css("visibility", "visible")
	}
	else {
		$(".skolmat_div").css("visibility", "hidden")
	}
}

function darkMode() {
	console.warn("dark click!")
	chrome.storage.local.get('dark-mode', function (t) {
		console.log("dark mode old", t['dark-mode'])
		console.log("dark mode new", !t['dark-mode'])
		if (t['dark-mode'] == null || t['dark-mode'] == false) {
			$("#darkImg").attr("src", "https://i.imgur.com/W5fIgtO.png")
			chrome.storage.local.set({ 'dark-mode': true }, function () { location.reload() });
		}
		else {
			$("#darkImg").attr("src", "https://i.imgur.com/awVbvCE.png")
			chrome.storage.local.set({ 'dark-mode': false }, function () { location.reload() });
		}
	})
}
$(document).ready(function () {
	var appended = false
	var muiStack = setInterval(function () {
		if ($(".MuiStack-root").length && !appended) {
			$(document).xpathEvaluate('//*[@id="student-header-root"]/div[1]/header/div/div[2]/div').append(`
			<a id="darkIco" class="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium css-1n2jcxe" tabindex="0" target="_blank">
			<img id="darkImg" src="https://i.imgur.com/awVbvCE.png" style="height: 18px;">
			</a>
			<hr class="MuiDivider-root MuiDivider-fullWidth MuiDivider-vertical MuiDivider-flexItem css-1x6z4ed"><a id="foodIco" class="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium css-1n2jcxe" tabindex="0" target="_blank">
			<img src="https://i.imgur.com/lfbcIy2.png" style="
				height: 18px;
			">
			</a>
			`)
			$(document).xpathEvaluate('//*[@id="foodIco"]').click(function () {
				showFood()
			})
			$(document).xpathEvaluate('//*[@id="darkIco"]').click(function () {
				darkMode()
			})

			appended = true
			clearInterval(muiStack)
		}
	}, 1000)
	$.get("https://skolmaten.se/api/3/menu/?school=4806606910914560&limit=2&offset=0&client=j44i0zuqo8izmlwg5blh").then(function (data) {
		//var jObj = JSON.parse(data);
		console.log(data["weeks"][0]["days"])
		$(".pushmenu-push").append(`
				<div class="skolmat_div" style="visibility: hidden">
					<img style="height: 50px; position: relative; left: 10px; top: 10px;" src="` + data["school"]["imageURL"] + `"></img>
					<h1 style="color: white; position: relative; top: -56px; left: 70px;">Skolmaten</h1>
					<h3 style="
						color: rgb(179 179 179);
						position: relative;
						top: -70px;
						left: 71px;
					">` + data["school"]["name"] + `</h3>

					<h3 style="
			position: relative;
			top: -65px;
			color: white;
			font-weight: bold;
			left: 10px;
		">` + data["weeks"][0]["days"][new Date().getDay() - 1]["meals"][0]["value"] + `</h3>
				<h3 style="
			position: relative;
			top: -77px;
			color: white;
			font-weight: 100;
			left: 10px;
		">` + data["weeks"][0]["days"][new Date().getDay() - 1]["meals"][1]["value"] + `</h3>
				</div>
			`);
	});
})
jQuery(setUI)