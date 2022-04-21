let h1 = document.querySelector(".cl1")
let n1 = document.querySelector("#b1")

b1.addEventListener("click",()=>{
    h1.innerHTML = "Змінений заголовок"
})

b2.addEventListener("click", ()=>{
    let h = document.createElement("h1")
    h.innerText = "Створений заголовок"
    b1.before(h)
})
