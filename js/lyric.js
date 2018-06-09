$(document).ready(function(){
$(function() {
	$(window).scroll(function() {
		var mass = Math.max(28, 205-0.25*$(this).scrollTop()) + 'px';
		$('.expandable').css({'font-size': mass, 'line-height': mass});
	});
});

$(function() {
	$(window).scroll(function() {
		var mass2 = Math.max(15, 110-0.135*$(this).scrollTop()) + 'px';
		$('.artists').css({'font-size': mass2, 'line-height': mass2});
	});
});

var track = document.getElementById('track');
var playButton = document.getElementById('play');
// var duration = document.getElementById('fullDuration');
var currentTime = document.getElementById('currentTime');
// var barSize = 200;
var progressBar = document.getElementById('progressBar');

// duration.innerHTML = track.duration;

$("#wrapper").animate({ 
		// backgroundColor: "white"
		opacity: 1
	}, 4000
	);

});
var bar = document.getElementById('defaultBar');
bar.addEventListener('click', clickedBar, false);

function playOrPause(){
	if(!track.paused && !track.ended){
		track.pause();
		play.style.backgroundImage = 'url(../playsmall3.png)'
		window.clearInterval(updateTime);
	}else{
		track.play();
		play.style.backgroundImage = 'url(../pausesmall3.png)'
		updateTime = setInterval(update, 500);
	}
}

function update(){
	if(!track.ended){
		var playedMinutes = parseInt(track.currentTime/60);
		var playedSeconds = parseInt(track.currentTime%60);
		if(playedSeconds < 10){
			currentTime.innerHTML = playedMinutes + ':0' + playedSeconds;
		}else{
			currentTime.innerHTML = playedMinutes + ':' + playedSeconds;
		}
		var size = parseInt(track.currentTime*112/track.duration);
		progressBar.style.width = size + "px";
	}else{
		currentTime.innerHTML = "0:00";
		play.style.backgroundImage = 'url(../playsmall3.png)'

		progressBar.style.width = 0 + "px";
		window.clearInterval(updateTime);
	}
}

var wrapper = document.getElementById('wrapper');

function clickedBar(e){
	if(!track.ended){
		var mouseX = e.pageX - wrapper.offsetLeft - 187;
		var newTime = mouseX*track.duration/112;

		track.currentTime = newTime;
		progressBar.style.width = mouseX + 'px';
	}
}














