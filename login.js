function save(i, v)
{
    localStorage[i] = v
}
function get(i)
{
    return localStorage.getItem(i)
}
$(".my-button").click(function() {
    chrome.storage.local.get('auto-login', function(t) {
        if(!t['auto-login'])
        {
            chrome.storage.local.set( { 'auto-login': true }, function() {} );
            $(".my-button").css("background", "linear-gradient(to right,#33a24b ,#007e28)")
        }
        else
        {
            chrome.storage.local.set( { 'auto-login': false }, function() {} );
            $(".my-button").css("background", "linear-gradient(to right,#ca1933 ,#ff0000)")
        }
    })
})
$('.newui-button').click(function() {
    chrome.storage.local.get('new-ui', function(t) {
        if (!t['new-ui']) {
            chrome.storage.local.set( { 'new-ui': true }, function() {} );
            $('.newui-button').css("background", "linear-gradient(to right,#33a24b, #007e28");
        } else {
            chrome.storage.local.set( { 'new-ui': false }, function() {} );
            $(".newui-button").css("background", "linear-gradient(to right,#ca1933 ,#ff0000)")
        }
    })
})
$("#saveBtn").click(function() {
    chrome.storage.local.set(
        {
            'user': $("#user").val(),
            'credentials': btoa($("#pass").val())
        }, 
        function() {
            $("#Title").text("Saved!")
        }
    );


})
setInterval(function()
{
    try{
        chrome.storage.local.get('auto-login', function(t) {
            if(!t['auto-login'])
            {
                $(".my-button").css("background", "linear-gradient(to right,#ca1933 ,#ff0000)")
            }
            else
            {
                $(".my-button").css("background", "linear-gradient(to right,#33a24b ,#007e28)")
            }
        })
        chrome.storage.local.get('new-ui', function(t) {
            if(!t['new-ui'])
            {
                $(".newui-button").css("background", "linear-gradient(to right,#ca1933 ,#ff0000)")
            }
            else
            {
                $(".newui-button").css("background", "linear-gradient(to right,#33a24b ,#007e28)")
            }
        })
    }
    catch(e)
    {

    }
}, 100)

var i = setInterval(function(){ 
    console.log(`%cSoftPlugin`, "font-size: 35px; color: blue; font-weight: bold;")
    console.log("%cLoading jQuery..", "font-size: 18px; color: blue; font-weight: bold;")
    if(window.jQuery)
    {
        clearInterval(i)
        $(".logo").css("background", "url(https://i.imgur.com/RbrGwPx.png) no-repeat center center/contain")
        $(".logo").css("height", "50px")
        $(".logo").css("width", "400px")
        chrome.storage.local.get(['credentials', 'user'], function(result) {
            var $username = result.user
            var $password = result.credentials
            console.log("%cLoaded dependencies :)", "font-size: 18px; color: pink; font-weight: bold;")
            if($username == null || $password == null)
            {
                return
            }
            $("#user").val($username)
            $("#pass").val(atob($password))

            $("#username").val($username)
            $("#password").val(atob($password))
            
            setTimeout(function() {
                chrome.storage.local.get('auto-login', function(t) {
                    if(t['auto-login'] == "undefined")
                    {
                        chrome.storage.local.set( { 'auto-login': false }, function() {} );
                    }
                    console.log("%cAuto-Login: " + t['auto-login'].toString(), "font-size: 18px; color: " + ((t['auto-login'] == true) ? "green" : "red") + ";")
                    if(t['auto-login'] == true)
                    {
                        $(".form__button").click()
                    }
                })
                //
            }, 300);
        })
        
    }
}, 100)
