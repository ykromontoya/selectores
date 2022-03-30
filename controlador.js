let boton=document.getElementById("boton")

boton.addEventListener("click",function(event){
alert("hiciste click")
let selector=document.getElementById("selector").value 
alert("usted eligió el:"+selector) 
switch(selector){
    case "1":
    alert("elegiste el #1")
    break
    case "2":
    alert("elegiste el #2")
    break
    case "3":
    alert("elegiste el #3")
    break
    case "4":
    alert("elegiste el #4")
    break
    case "5":
    alert("elegiste el #5")
    break
    case "6":
    alert("elegiste el #6")
    break
    case "7":
    alert("elegiste el #7")
    break
    case "8":
    alert("elegiste el #8")
    break
    case "9":
    alert("elegiste el #9")
    break
    case "10":
    alert("elegiste el #10")
    break
    default
}                                 

})