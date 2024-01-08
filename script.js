jQuery(document).ready(function($){
    $('.slider_img').on('click', function(){
        $('.slider_img').removeClass('active');
        $(this).addClass('active');
    })
});
const navItems = document.querySelector('.nav_links');
const openNavBtn = document.querySelector('#open__nav-btn');
const closeNavBtn = document.querySelector('#close__nav-btn');
//opens nav dropdown
const openNav = () => {
    navItems.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block';
}

//close nav dropdown
const closeNav = () => {
    navItems.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none';
}


openNavBtn.addEventListener('click', openNav );
closeNavBtn.addEventListener('click', closeNav );


var expoContain = document.querySelector(".autoexpo_container");
var cursor = document.querySelector("#cursor");
expoContain.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y 
    })
})


expoContain.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        scale:1,
        opacity:1
    })
})

expoContain.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        scale:0,
        opacity:0
    })
})


var tl = gsap.timeline();
tl.from("#loader h5",{
    x:40,
    opacity:0,
    duration:1,
    stagger:0.1
})

tl.to("#loader h5",{
    opacity:0,
    x:-40,
    duration:1,
    stagger:0.1
})

tl.to("#loader",{
    opacity:0
})

tl.to("#loader",{
    display:"none"
})

tl.from(".main_content #moving_text span",{
    y:100,
    opacity:0,
    stagger:0.1,
    duration:0.5,
    delay:-0.5
})
