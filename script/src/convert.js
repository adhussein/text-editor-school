const thedocument = document.querySelector(".document");
 
function update(){
    val = thedocument.childNodes;
        val.forEach((theElement, index) => {
            if(!theElement.id){
                theElement.id ="page"+(index+1);
            }
            // console.log(theElement)
            contentvalue = theElement.value.split("\n");
            next = theElement.nextElementSibling;
            if(next){
                nextvalue = next.value.split("\n");
            }
            // console.log(contentvalue.length > lines && next && next != theElement)
            lines = 3;// && next != theElement
            if(contentvalue.length > lines && next && next != theElement){
                next.value = nextvalue.unshift(contentvalue.splice(lines, contentvalue.length));
                nextvalue.unshift(contentvalue.splice(lines, contentvalue.length));
                theElement.value = contentvalue.join("\n");
                console.log("movedown")
            } else if(contentvalue.length > lines){
                console.log("overflow new")
                newpage = document.createElement("textarea");
                newpage.onclick =()=>{
                    console.log(newpage)
                }
                newpage.dispatchEvent(new CustomEvent('click'));
                newpage.click();
                newpage.focus();
                newpage.classList = "importanthide4 paper-document my-2 p-3 textarea";
                newpage.value += contentvalue.splice(lines, contentvalue.length).join("\n");
                theElement.value = contentvalue.join("\n");
                thedocument.appendChild(newpage);
            }
        });
    requestAnimationFrame(update)
} update()
