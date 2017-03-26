console.log('makereq is avail');
function makeRequest(){
	req = new XMLHttpRequest();
	req.onreadystatechange = function(){
		if(req.readyState === 4 && req.status === 200){
			data = JSON.parse(this.responseText);
		}
	};
	req.open('GET',app,true);
	req.send();
	setTimeout(function(){

		/*
		Rain
		Clear
		*/
		degrees = toFarenheit(data.list[0].main.temp);
		forecast.innerText = 'In ' + data.city.name + ' it is ' + degrees + ' degrees';
		//date.innerHTML = data.list[0].dt;
		//console.log(moment().format(data.list[0].dt));
	},550);
	
	
}

function toFarenheit(kelv){
	farenheit = Math.round((9/5) * (kelv - 273) + 32);
	return farenheit;
}