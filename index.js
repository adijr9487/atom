var electron = document.querySelectorAll(".len");
document.querySelector("button").addEventListener("click", function(){
    
    for(var i=0; i<electron.length; i++)
    {
        electron[i].classList.toggle("le");
    }
});