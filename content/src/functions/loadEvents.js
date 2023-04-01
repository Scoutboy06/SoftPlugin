import $ from 'jquery';

export default function loadEvents() {
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