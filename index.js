const a=1;
const b="Hello"
const c=true
console.log(a+1)
const trigger = document.getElementById("trigger")
const counter = document.getElementById("counter")
let count = 0
trigger.addEventListener(
    "click",
    (event) => {
        console.log("Da click vao nut trigger");
        count = count + 1 ;
        counter.innerHTML = count ;
    }
)