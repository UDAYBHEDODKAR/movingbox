// let rect=document.querySelector(".rect");

window.addEventListener("mousemove",function(details){
    let xval=gsap.utils.mapRange(0,
        window.innerWidth,
        200,
        window.innerWidth-200,
        details.clientX
    );
    gsap.to(".rect",{
        left:xval,
        ease:Power3,
    });
});

















