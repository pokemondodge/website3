// user events --> active,click,hover, double click

response=()=>{ console.log("hello") ;alert("you clicked")}  //alert("text")--> function use to display popup window
//don't use predefined function as custom one and keyword as identifiers name
let title=document.getElementById('clq')
let submit = ()=>{ title.innerText= "response After submit is clicked"; title.style.color="red";  } //  we no need to fetch for exxecuting function on tags also working with and without variable keyword


 increase=()=>{ let num=document.getElementById('num');num.innerText++ }
 decrease=()=>{let num=document.getElementById('num'); num.innerText-- }
 reset=()=>{ let num=document.getElementById('num');num.innerText="0" }

change=()=>{ document.getElementById('tattu').innerText="submitted"}

// wish=()=>{ document.getElementById('wishing').innerText=}

toggle=()=>{ if(document.getElementById('wishing').innerText=="Hi")
                document.getElementById('wishing').innerText="Bye"
                else document.getElementById('wishing').innerText="Hi"
             }