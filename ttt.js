let currentPlayer = 'X'
let xarr = []
let oarr = []
let winplyr = ''
const showcurrentPlayer = document.getElementById('crntplyr')
const showwinPlayer = document.getElementById('winplyr')
const disclick = document.querySelectorAll(".col");

// let hshmap = new Map()

function crntplyrshow(){
	if (currentPlayer === 'X'){
		showcurrentPlayer.innerText = 'Player 1 i.e X'
	} else {
		showcurrentPlayer.innerText = 'Player 2 i.e O'
	}
}

function boxclick(clickedid){
	if (currentPlayer === 'X'){
		document.getElementById(clickedid).innerText = 'X'
	} else {
		document.getElementById(clickedid).innerText = 'O'
	}
	if(currentPlayer == 'X'){
		xarr.push(clickedid)
	} else {
		oarr.push(clickedid)
	}
	document.getElementById(clickedid).setAttribute('onclick', '')
	if(chkwinner()){
		if (winplyr == 'X'){
			showwinPlayer.innerText = 'Player 1 Has Won'
		} else if (winplyr == 'O') {
			showwinPlayer.innerText = 'Player 2 Has Won'
		} else {
			showwinPlayer.innerText = "No One Wins It's a tie"
		}
		let i = disclick.length
		while (i--) {
			disclick[i].setAttribute('onclick','')
		}
	}
	changecurentplayer()
	crntplyrshow()
}

function changecurentplayer(){
	if (currentPlayer === 'X'){
		currentPlayer = 'O'
	} else {
		currentPlayer = 'X'
	}
}


function reset(){
	location.reload()
}



function chkwinner(){
	//checking winning conditions for X
	for (let i= 0; i<3; i++){
		if( xarr.includes(`row${i}col0`) && xarr.includes(`row${i}col1`) && xarr.includes(`row${i}col2`) ){
			winplyr = 'X'
			return true
		}
		if( xarr.includes(`row0col${i}`) && xarr.includes(`row1col${i}`) && xarr.includes(`row2col${i}`) ){
			winplyr = 'X'
			return true
		}
	}
	if( xarr.includes(`row0col0`) && xarr.includes(`row1col1`) && xarr.includes(`row2col2`) ){
			winplyr = 'X'
			return true
		}
	if( xarr.includes(`row0col2`) && xarr.includes(`row1col1`) && xarr.includes(`row2col0`) ){
			winplyr = 'X'
			return true
		}
	

	//checking winning conditions for O
	for (let i= 0; i<3; i++){
		if( oarr.includes(`row${i}col0`) && oarr.includes(`row${i}col1`) && oarr.includes(`row${i}col2`) ){
			winplyr = 'O'
			return true
		}
		if( oarr.includes(`row0col${i}`) && oarr.includes(`row1col${i}`) && oarr.includes(`row2col${i}`) ){
			winplyr = 'O'
			return true
		}
	}
	if( oarr.includes(`row0col0`) && oarr.includes(`row1col1`) && oarr.includes(`row2col2`) ){
			winplyr = 'O'
			return true
		}
	if( oarr.includes(`row0col2`) && oarr.includes(`row1col1`) && oarr.includes(`row2col0`) ){
			winplyr = 'O'
			return true
		}
	if(xarr.length == 5){
		winplyr = 'D'
		return true
	}
}