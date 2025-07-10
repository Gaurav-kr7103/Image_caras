import { mergeWithCustomize } from "webpack-merge";
import "./styles.css";

const imageContainer = document.querySelector(".image-carousel");
const images = document.querySelectorAll(".image-carousel > .pic");
const circles = document.querySelectorAll(".circle > .circles");

function showCircle (index) {
    circles.forEach((circle, idx) => {
        circle.style.backgroundColor = index === idx ? "red" : "white";
    })
}
function showImage (index) {
    images.forEach((img, i) => {
        img.style.display = index === i ? "block" : "none";
    })
};

let j = 0;
showCircle(j);
const fwd = document.querySelector(".forward");
fwd.addEventListener("click", ()=> {
    const n = images.length;
    j = (j+1) % n;
    showImage(j);
    showCircle(j);
});
const back = document.querySelector(".backward");
back.addEventListener("click", ()=> {
    const n = images.length;
    j = j === 0? n-1 : j-1;
    showImage(j); 
    showCircle(j);
});

//adding functionality to circles
circles.forEach((circle,idx)=> {
    circle.addEventListener("click", ()=> {
        j=idx;
        showCircle(j);
        showImage(j);
    });
})

//adding auto transition
setInterval(
    () => {
        const n = images.length;
        j = (j+1) % n;
        showImage(j);
        showCircle(j)
    }
, 5000);