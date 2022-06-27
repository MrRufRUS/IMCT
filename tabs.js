function selectTab(index){
    let contents = document.getElementsByClassName("item")
    let tabs = document.querySelectorAll(".usefull-tabs h3")
    for(let i = 0; i < contents.length; i+=1){
        contents[i].classList.remove("visible")
    }
    for(let i = 0; i < tabs.length; i+=1){
        tabs[i].classList.remove("active")
    }
    contents[index].classList.add("visible")
    tabs[index].classList.add("active")
}