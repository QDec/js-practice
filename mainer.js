"use strict";
var start = document.getElementById("start");
var pause = document.getElementById("pause");
var newGame = document.getElementById("newGame");
var timerCount = document.getElementsByClassName("bot_head_time_block_count_text")[0];
let mainBlock = document.getElementsByClassName("game_blocks")[0]; // наш блок *
var points = document.getElementsByClassName("bot_head_points_block_count_text")[0];
var pickBlock = document.getElementsByClassName("game_blocks")[0]; 
// Global :(
var objectPanel={
	timeCount: 60,
	points: 0,
	pauseGame: false
}
var objBlock={
	clicked: false,
	color: ""
}

//
var date = new Date(new Date().getTime() + 60 * 1000);
document.cookie = "name="+points+"; path=/; expires=" + date.toUTCString();
alert(document.cookie);
// button's
newGame.onclick = function(){ // or newGame
	status("start");
}; 

pause.onclick = function(){
	objectPanel.pauseGame = true;
};
start.onclick = function(){
	objectPanel.pauseGame = false;
	if(objectPanel.timeCount > 0)
	{
		status("start");
	}
}
pickBlock.onclick = function(){
	objBlock.clicked = true;
}


// function's
function status(status){
	if(status == "start"){
		var myInterval = setInterval(function(){
			// перемещение
			mainBlock.style.marginLeft = Math.floor(Math.random()*900) + "px";
			mainBlock.style.marginTop = Math.floor(Math.random()*360) + "px";
			timerCount.textContent = objectPanel.timeCount; // время
			if(objBlock.clicked == true){ // добавляем 1 балл
				points.textContent = objectPanel.points++;
			}
			objBlock.color = "rgb("+Math.floor(Math.random()*256)+","
									+Math.floor(Math.random()*256)+","
									 +Math.floor(Math.random()*256)+")";
			mainBlock.style.backgroundColor = objBlock.color; // пересылаем свойство объекта в html 
			objBlock.clicked = false; // обнуляем для блока статус нажатого
			// чтобы за 1 сек не было 2 клика.
			objectPanel.timeCount--;
			if(objectPanel.pauseGame == true){
				clearInterval(myInterval);
			}
			else if(objectPanel.timeCount < 0)
			{
				clearInterval(myInterval);
			}
		},1000);
	
	}
	else{
		return 0;
	}
}
