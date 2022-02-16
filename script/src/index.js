const dropbox = document.querySelector(".dropbox");
const input = document.querySelector(".dropboxOpen");
const inputOne = document.querySelector(".inputOne");
const title = document.getElementById("title");
const saveasinput = document.getElementById("saveasinput");
var file, reader, type, titlename, typefile;
var newpage, val, contentvalue, allvalue, next, nextvalue, lines, el;
allvalue = "";
reader = new FileReader();
type =".txt";
typefile = "text/plain";
titlename = "untitled" + type;
saveasinput.addEventListener("change", ()=>{
    type = saveasinput.value;
    if(title.value == ''){
        titlename = "untitled" + type;
    } else {
        titlename = title.value + type;
    }
})
title.addEventListener("change", ()=>{
    titlename = title.value + type[1];
})
function saveFile(){
    val.forEach(element => {
        allvalue = allvalue + element.value + "\n";
    });
    console.log(allvalue)
    var files = new File([allvalue], titlename, {type: "text/plain;charset=utf-8"});
    saveAs(files);
}


// input
input.addEventListener("change", (e)=>{
    file = input.files[0];
    reader.onload= ()=>{
        val[0].value = reader.result;
        document.querySelector(".continue").classList.remove("d-none")
        document.querySelector(".continue").classList.add("animate__backInRight")
    }
    reader.readAsText(input.files[0]);    
})
inputOne.addEventListener("change", (e)=>{
    file = input.files[0];

    reader.onload= ()=>{
        val[0].value = reader.result;
    }
    reader.readAsText(inputOne.files[0]);    
})
// drag and drop
var background = [
    document.getElementById("thisone"),
    document.getElementById("thissecond"),
]
dropbox.addEventListener("dragover", (e)=>{
    // add a :hover class here
    dropbox.classList.add("animate__animated")
    dropbox.classList.add("animate__shakeY")
    e.preventDefault();
})
dropbox.addEventListener("dragleave", ()=>{
    // add a :hover-remove class here
    dropbox.classList.remove("animate__animated")
    dropbox.classList.remove("animate__shakeY")
})
dropbox.addEventListener("drop", (e)=>{
    e.preventDefault();
    file = e.dataTransfer.files[0]
    // read files when dropped
    reader = new FileReader();
    reader.onload= ()=>{
        val[0].value = reader.result;
    }
    reader.readAsText(file);
})
function minimize(){
    background[0].classList.toggle("filter-background-blur");
    background[0].classList.toggle("fullone")
    background[0].classList.toggle("fixed-bottom");
    background[1].classList.toggle("w-100");
    background[1].classList.toggle("w-50");
    background[1].classList.toggle("float-start");
    input.classList.toggle("w-100");
    input.classList.toggle("border", "border-1")
    if(document.body.classList.toggle('overflow-hidden')){
        document.body.classList.toggle('overflow-hidden')
    }
}
function exit(){
    background[0].classList.toggle("d-none")
    if(document.body.classList.toggle('overflow-hidden')){
        document.body.classList.toggle('overflow-hidden')
    }
}