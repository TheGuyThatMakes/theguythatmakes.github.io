let projects=["TrixxatiNum.js [SCRAPPED]"]
let empty=[]
ul = document.querySelector("#ul")
if (projects!==empty){
    ul.innerHTML=""
    projects.forEach(element => {
        let node = document.createElement("li");
        let subnode = document.createElement("a");
        if (!element.endsWith("[SCRAPPED]")){
            subnode.href = "https://theguythatmakes.github.io/"+element
        }else{
            subnode.style="font-style:italic;color: #00000080;"
        }
        let textnode = document.createTextNode(element)
        subnode.appendChild(textnode)
        node.appendChild(subnode)
        ul.appendChild(node)
        

    });
}