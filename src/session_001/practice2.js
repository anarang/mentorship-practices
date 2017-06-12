
var num = 0
function callme() {
	document.getElementById('practice_2_answer').innerHTML = clock();
	setTimeout(callme, 1000);
}

callme();

// console.log(clk.cloak());

// document.getElementById('practice_2_answer').innerHTML = setInterval('clk.clock()',1000);