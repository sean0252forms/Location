var localeOut=document.getElementById("locale")
setInterval(function(){
  var location=navigator.geolocation
  location=location.getCurrentPosition.caller.toString()
  localeOut.innerText=location
},1)