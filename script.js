const logo = '<img id="logoL" src="https://www.schoolsoft.se/5b0c9e828c5b637b38953b3ea41e5e86.svg" height="30px" />'
const profileIcon = '<span id="profileicon" class="text top-gray-bar-info"><img id="pfp" src="https://img.icons8.com/material-rounded/30/user-male-circle.png"/></span>'
const menuIcon = '<span id="menuicon" tabindex="1" class="top-gray-bar-info text"><img src="https://img.icons8.com/ios-glyphs/30/menu-rounded.png" /></span>'
$("#header").children().remove();
$("#header").append('<div id="top"></div>')

const profileData = `<div class="col3"><div id="leftContainer2">
<div id="leftMenu2">
	<div id="menu_left2"><ul class="second-navigation"></ul></div>
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
				items.push([{ name: item.text(), href: null }])
			}
		} else {
			items[items.length-1].push(
				{ name: item.text(), href: item.attr('href') }
			)
		}
	})
	
	$("#menu_left").children().remove();

	$("#menu_left").append('<ul class="main-navigation">')

	for (const header of items) {
		if (items.indexOf(header) > 0) {
			let i = items.indexOf(header)
			if (items[i-1][0].name == header[0].name) continue
		}
		if (!header[0].name) continue
		$(".main-navigation").append(`<li class="menu_header nav-header nav-header-${header[0].name}">${header[0].name}<ul></ul></li>`)
		for (const item of header) {
			if (header.indexOf(item) == 0) continue;
			const li = document.createElement('li');
			li.innerHTML = `<a href="${item.href}">${item.name}</a>`
			$(`.nav-header-${header[0].name}`).children().get(0).append(li)
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
	
		$(".second-navigation").append(`<li class="menu_header nav-header nav-header-${item.name}"><a href="${item.overwrite ? item.href : url + item.href}">${item.name}</a></li>`)
	}
	
	$(".col2").hide();
	$(".col3").hide()
}

function loadEvents() {
	$("#menuicon").click(() => {
		let col = $(".col2");
		col.toggle()
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
		}
	})
	
	$("#profileicon").click(() => {
		$(".col3").toggle()
	})

	$("li").click(event => {
		const content = $(event.target).children().get(0);
		if ($(content).attr('href')) {
			window.location.href = $(content).attr('href')
		}
		console.log($(event.target).children().get(0))
	})
}


$("#top").append(menuIcon)
$("#top").append(profileIcon)
$("#top").append(logo);



const items = [];
$("#menu_left").children().each(i => {
	let item = $('#menu_left').children().eq(i);
	if (item.attr('class') != undefined) {
		if (item.attr('class').split(' ').includes('menu_header')) {
			items.push([{ name: item.text(), href: null }])
		}
	} else {
		items[items.length-1].push({ name: item.text(), href: item.attr('href') })
	}
})

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



function url_content(url){
    return $.get(url);
}

url_content("https://sms.schoolsoft.se/nti/jsp/student/right_student_pwdadmin.jsp").success(function(data){
  console.log(data.split('<img')[2].split('"')[1])
  $("#pfp").get(0).src = data.split('<img')[2].split('"')[1]
  
  $("#pfp").css("height", "120%")
  $("#pfp").css("width", "100%")
  
});

$(document).ready(function() {
	$(".cal-lesson").css("border-radius", "0px");
	$(".cal-lesson").css("background-image", "-webkit-linear-gradient(top, #2b518f, #2b518f)")
	$(".cal-lesson").css("border", "1px solid #000")
	
	$(".cal-test").css("border-radius", "0px");
	$(".cal-test").css("background-image", "-webkit-linear-gradient(top, #660000, #660000)")
	$("#content").css("width", "98.8%")
	$("#main").css("width", "114%")
	$(".pushmenu-push").css("overflow-x", "hidden")
    var span = $(".span6right").clone()
    span.attr("id", "betyg")
    $(".img-rounded").attr("src", "https://i.imgur.com/fw5vBqp.png")
    $(".img-rounded").css("width", "9%")
    $("#top_content_wrapper").css("width", "96%")
    /*$(".ng-scope").append(`<div class="span6right" id="betyg">
<div class="h2_container" id="news_con">
  <div class="h2_box">
    <div class="h2_box_icon" style="margin-left:-10px; padding-top:2px;">
      <img src="https://icons.veryicon.com/png/o/business/vscode-program-item-icon/changelog.png" alt="" title="">
    </div>
    <div class=" h3 " style="margin-top:6px; padding-left:6px;">Changelog</div>
  </div>
  <div id="news_con_content" class="h2_innerno_pad">
    <div class="h3_bold">Här ser du senaste ändringar på vårat plugin.</div>
    <table class="table table-striped news-private" style="width: 370px; word-break: break-word; border-right: rgb(204, 204, 204);">
      <tbody>
        <tr class="news-private">
          <td class="news-private-td">
            <a class="toplist-item" href="">
              <div class="list-top"></div>
              <div class="heading_bold">Introducerar dark-theme</div>
              <div>Använd SchoolSoft med dark-theme redan idag.</div>
            </a>
          </td>
          <td class="news-private-td-right" align="center"></td>
        </tr>
        <tr class="news-private">
          <td class="news-private-td">
            <a class="toplist-item" href="">
              <div class="list-top"></div>
              <div class="heading_bold">NTIP byggs fortfarande!</div>
              <div>Utvecklingen av NTIP påbörjades 2023-01-24!</div>
            </a>
          </td>
          <td class="news-private-td-right" align="center"></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</div>`)*/
	loadMenus();
	loadEvents();
})
