let scroller = document.getElementsByClassName("news-wrapper")[0];

let scrollDist = 500;
let scrollCount = 1;

function ScrollRight() {
    scrollCount += 1;
    scroller.scroll({
        top: 0,
        left: scrollDist * scrollCount,
        behavior: 'smooth'
    });
}

function ScrollLeft() {
    scrollCount -= 1;
    scroller.scroll({
        top: 0,
        left: scrollDist * scrollCount,
        behavior: 'smooth'
    });
}