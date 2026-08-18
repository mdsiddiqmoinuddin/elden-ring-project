const totalClass = 10;
let currentclass = 0;

function updatetrack(){
  let updateclass = -currentclass * 21.34
  document.querySelector(".track").style.transform = `translateX(${updateclass}rem)`
}

function left(){
  if(currentclass<6){
  currentclass++
  updatetrack()
  }
}
function right(){
  if(currentclass>0){
  currentclass--
  updatetrack()
  }
}