// main.js APOD API

$('iframe').hide();
$(document).on('change', function() {
// var date = document.getElementById('date');

var apiKeyValue = "XLcBjZVZ7XyY6mSRIt1bcDSQRBjr5CDg5GGgX2aw";
var dateEntered = $('#date').val()
var apiurl = "https://api.nasa.gov/planetary/apod?api_key=" + apiKeyValue+ "&date=" + dateEntered ;


$.ajax({
 url: apiurl,
 success: function(responseFromTheMfingApi) {
   // $('img').addClass("hidden");
   // $('iframe').addClass("hidden");
   console.log(typeof responseFromTheMfingApi.url);
   if (responseFromTheMfingApi.url.includes(".jpeg")  || responseFromTheMfingApi.url.includes(".png") || responseFromTheMfingApi.url.includes(".jpg") ){
     $('img').attr('src', responseFromTheMfingApi.url);
     // $('p').attr('src', responseFromTheMfingApi.explanation);
     $('p').html(responseFromTheMfingApi.explanation);
     // $('img').removeClass();
     $('img').show();
     $('iframe').hide();
   } else {
     $('iframe').attr('src', responseFromTheMfingApi.url);
     // $('iframe').removeClass();
     $('iframe').show();
     $('img').hide();

   }
 },
 error: function(ohShit){
   console.log("There was an error:" + ohShit)
 }
})



})
