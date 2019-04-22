window.onload = function(){
    const first = document.getElementById('first');
    const header = document.getElementById('header');
window.addEventListener('scroll',function(){
    let offset = window.pageYOffset;
    console.log('offset: '+offset);

    first.style.backgroundPositionY = offset*0.75+"px";

    header.style.opacity = offset/937;
    header.style.position = offset*0.75+"px";
    //first.style.backgroundPositionX = offset*.95+"px";
})
}

