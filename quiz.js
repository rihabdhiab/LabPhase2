var correctBtn = document.getElementsByClassName("correct") ;
var bravo= document.getElementsByClassName('bravo-gif');
var score=document.getElementById("score1");

function correctAnswer(){
for(var i=0; i<correctBtn.length;i++){
     let correctAnswer=correctBtn[i];
     let bravoGif=bravo[i];
    correctAnswer.addEventListener ("click", function (){
        correctAnswer.style.background="rgb(84, 223, 169)";
        correctAnswer.style.borderColor="rgb(84, 223, 169)";
        bravoGif.style.display="block";
        score.innerHTML=(+score.innerHTML) +10;
        });
     }
    }
   correctAnswer();
  
  var wrongBtn= document.getElementsByClassName('wrong');
  function wrongAnswer(){
   for(var i=0; i<wrongBtn.length;i++){
     let wrongAnswer= wrongBtn[i];
       wrongAnswer.addEventListener ("click", function (){
       wrongAnswer.style.background="red";
       wrongAnswer.style.borderColor= "red";
       });
   }
  }
  wrongAnswer();