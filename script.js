let education= document.getElementById("Edu")
let details=document.getElementById("edudetails")
education.addEventListener("click",()=>{
    details.classList.toggle("display")
})
let experience= document.getElementById("Experience")
let data=document.getElementById("expdetails")
experience.addEventListener("click",()=>{
    data.classList.toggle("done")
})

document.getElementById("resume").addEventListener("click",function(){
    window.open("DHARANYA V Resume.pdf","_blank");
})
document.getElementById("download").addEventListener("click",function(){
    let link =document.createElement("a")
    link.href="DHARANYA V Resume.pdf";
    link.download="Dharanya resume"
    link.click()
})