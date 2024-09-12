let score1 = 0;
let score2 = 0;


function Play() {

 let P1 = document.getElementById('P1');
 let randomP1 = Math.floor (Math.random ( ) *3) +1 ;

 
// 1= rock 2=paper 3=scissor 

 if (randomP1 === 1) {
    P1.src  = "./images/rocks-p1.png";

  } else if (randomP1 === 2) {
    P1.src  = "./images/papers-1.png";
  } else if (randomP1 === 3) {
    P1.src  = "./images/gunting-1.png";
  }
 
  let P2 = document.getElementById('P2');
  let randomP2 = Math.floor (Math.random ( ) *3) +1 ;
if (randomP2 === 1) {
    P2.src  = "./images/rocks-p2.png";
  } else if (randomP2 === 2) {
    P2.src  = "./images/papers-2.png";
  } else if (randomP2 === 3) {
    P2.src  = "./images/gunting-p2.png";
  }
  


  let resultText = "";
  if (randomP1 === randomP2) {
    document.getElementById('P1').style.backgroundColor = "white";
    document.getElementById('P2').style.backgroundColor = "white";
    P1win.style.visibility = "hidden";
    P2win.style.visibility = "hidden";
      resultText = "It's a Tie!";
      draw.style.visibility ="visible";
  } else if ((randomP1 === 1 && randomP2 === 3) || 
             (randomP1 === 2 && randomP2 === 1) || 
             (randomP1 === 3 && randomP2 === 2)) {
              document.getElementById('P1').style.backgroundColor = "#32CD32";
              document.getElementById('P2').style.backgroundColor = "red";
              P1win.style.visibility = "hidden";
              P2win.style.visibility = "hidden";
              resultText = "Player 1 Wins!";
      score1++;
  } else {
    resultText = "Player 2 Wins!";
    document.getElementById('P2').style.backgroundColor = "#32CD32";
    document.getElementById('P1').style.backgroundColor = "red";
    P2win.style.visibility = "hidden";
    P1win.style.visibility = "hidden";
      score2++;
  }

document.getElementById('draw').innerHTML = resultText;
document.getElementById('P1score').innerHTML = score1;
document.getElementById('P2score').innerHTML = score2;

checkWinner();
   
}

 


function checkWinner() {
  
  if (score1 === 3) {
    P1win.style.visibility = "visible";
    document.getElementById('P1win').innerHTML = "Player 1 is the Winner!" ;
    document.getElementById('play').style.display = "none";
      document.getElementById('nG').style.display = "block";
      
      
  } else if (score2 === 3) {
    P2win.style.visibility = "visible";
    document.getElementById('P2win').innerHTML = "Player 1 is the Winner!" ;
    document.getElementById('play').style.display = "none";
      document.getElementById('nG').style.display = "block";
  }
 
}



function resetGame() {
  P1win.style.visibility = "hidden";
   P2win.style.visibility = "hidden";
   document.getElementById('play').style.display = "block";
   document.getElementById('nG').style.display = "none";
  score1 = 0;
  score2 = 0;
  document.getElementById('P1score').innerHTML = score1;
  document.getElementById('P2score').innerHTML = score2;
  document.getElementById('draw').innerHTML = "";
  document.getElementById('P1').src = "./images/covers.jpg";
  document.getElementById('P2').src = "./images/covers.jpg";
}


 
































