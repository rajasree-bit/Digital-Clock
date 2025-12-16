
setInterval(()=>{
const date=new Date()
console.log(date)
const time=date.toLocaleTimeString()
console.log(time)
const clock=document.querySelector("span")
console.log(clock.textContent)
clock.textContent=time
},1000)
