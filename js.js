/**
 * Created by jordi on 02-Feb-18.
 */


var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
var animation1 = document.getElementById("animation1");
var animation2 = document.getElementById("animation2");
var animation3 = document.getElementById("animation3");


const scroll = () => {


    let ifScroll = window.pageYOffset;

        if (ifScroll >= 500){
            animation1.classList.add("slide");
            console.log("reached1");
            // window.alert("reached1");
        }


    if (ifScroll >= 1300){
        animation2.classList.add("slide");
        console.log("reached2");
    }
    if (ifScroll >= 1350){
        animation3.classList.add("slide");
        console.log("reached3");
    }

    // if (pageOffset > 789 && pageOffset < 1283){
    //     img3.style.backgroundPositionY = scroll*1.2 + "px";
    // }


    img1.style.backgroundPositionY = -ifScroll * 0.3 + 'px';
    img2.style.backgroundPositionY = -ifScroll * 0.3 + 'px';
    img3.style.backgroundPositionY = -ifScroll * 0.3 + 'px';
    console.log(' We Are Scrolling!' + ifScroll);
}

window.addEventListener('scroll', scroll);