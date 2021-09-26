

gsap.to(".aptCnt", {
    x :-450,
    scrollTrigger : {
    trigger : ".aptCnt",
    start : "right right+=0",
    scrub:1.5,
    end :200
    }
});

window.addEventListener("scroll",reveal);
function reveal(){
  var reveals = document.querySelectorAll(".reveal");

  for(var i =0;i<reveals.length;i++){
    var windowHeight = window.innerHeight;
    var revealTop= reveals[i].getBoundingClientRect().top;
    var revealPoint = 100;

    if(revealTop<windowHeight-revealPoint){
      reveals[i].classList.add("active")
    }
    else{
      reveals[i].classList.remove("active")
    }
  }
}

var myVideo = document.getElementById("video")
function play(){
  if(myVideo.onplay)
    myVideo.onpause();
  
  else
    myVideo.onplay
  
}