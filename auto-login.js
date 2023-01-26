// URL: https://login.grandid.com/

var $password = "abc123456def" // BASE64 encoded password
var $username = "namn.efternamn"

$(document).ready(function() {
	console.log("Loaded")
	$("#username").val($username)
	$("#password").val(atob($password))
	setTimeout(function() {
		$(".form__button").click()
	}, 300);
})
