let search = document.getElementById('submit_button');
let input = document.getElementById('city_entered');
let req;
let city;
let data;    
let degrees;
let forecast = document.getElementById('forecast');
let date = document.getElementsByClassName('date')[0];
let key = "b0088b86b4453b58674d9b728aee04ab";
let app;
let farenheit;

app = "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID="+key+"&q="+localStorage.city;
window.onload = function(){
makeRequest();

search.addEventListener('click',function(event){
	search.className += ' rotate-center';
	setTimeout(function(){
		search.className = 'pure-button';
		input.value = '';
	},500);
	event.preventDefault();
	city = input.value;
	localStorage.city = input.value;
	app = "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID="+key+"&q="+city;
	makeRequest();
});
};