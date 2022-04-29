let scroller = document.getElementsByClassName("news-wrapper")[0];

let scrollCount = 0;

function ScrollRight() {
    scrollCount += 1;
    let scrollDist = document.getElementsByClassName("news-item")[0].scrollWidth;
    scroller.scroll({
        top: 0,
        left: scrollDist * scrollCount,
        behavior: 'smooth'
    });
}

function ScrollLeft() {
    scrollCount -= 1;
    let scrollDist = document.getElementsByClassName("news-item")[0].scrollWidth;
    scroller.scroll({
        top: 0,
        left: scrollDist * scrollCount,
        behavior: 'smooth'
    });
}