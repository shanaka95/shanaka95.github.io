function set_portfolio(name)
{
document.getElementById("me").innerHTML = '<center><div class="loader"></div></center>';
var response = '';
$.ajax({ type: "GET",   
         url: "http://zchool.lk/me/ajax.php?div="+name,   
         async: false,
         success : function(text)
         {
             response = text;
         }
});
document.getElementById("me").innerHTML =response;
}

