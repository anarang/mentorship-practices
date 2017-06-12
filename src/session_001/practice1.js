function clock(){
	var d = new Date();
	var date = d.getDate();
	var month = d.getMonth();
	var year = d.getFullYear();

	var hour = d.getHours();
	var minute = d.getMinutes();
	var sec = d.getSeconds();

	current_date = year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + sec ;
	
	return current_date;
};
document.getElementById('practice_1_answer').innerHTML = clock();
