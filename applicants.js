let head = document.querySelectorAll(".head");
for(let i=0;i<head.length;i++) {
	head[i].addEventListener("click", e =>{
        console.log(e)
        let program = head[i].nextElementSibling
        if (program.classList.contains("program-body--active")){
            program.classList.remove("program-body--active")
        } else {
            program.classList.add("program-body--active")
        }
    });
}
// function accordion(event) {
//   if (!event.target.open) return;
// 	let programs = document.getElementsByClassName("program-body")
// 	for(i=0;i<programs.length;i++) {
// 		if (prorams[i].className != "head" || programs[i].classList[0] != "program-body--active" || event.target == progrmas[i]) continue;
// 		programs[i].classList.remove("program-body--active");
// 	}
// }