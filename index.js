let runButton,stopButton,intervalRef,resetButton,square,increment=100;


runButton=document.getElementById("runButton");
stopButton=document.getElementById("stopButton");
resetButton=document.getElementById("resetButton");
let redbox=document.querySelector(".square");


function color()
{redbox.style.backgroundColor='green';

}

redbox.onmouseover=color;


function resetcolor()
{redbox.style.backgroundColor='red';

}

redbox.onmouseleave=resetcolor;

runButton.addEventListener("click",()=>{
  intervalRef = setInterval(()=>{ square=document.getElementsByClassName("square");
    increment=increment+10;
    square[0].style.width=increment+'px';
    square[0].style.height=increment+'px';
},1000)
})


stopButton.addEventListener('click',()=>{
    clearInterval(intervalRef);
})


resetButton.addEventListener('click',()=>{

  clearInterval(intervalRef); 
  increment=100;
  square[0].style.width="100px";
  square[0].style.height='100px';


})

