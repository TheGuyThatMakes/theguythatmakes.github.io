let projects=["TrixxatiNum.js [SCRAPPED]"]
let empty=[]
ul = document.querySelector("#ul")
if (projects!==empty){
    ul.innerHTML=""
    projects.forEach(element => {
        let node = document.createElement("li");
        let subnode = document.createElement("a");
        subnode.href = "https://theguythatmakes.github.io/"+element
        let textnode = document.createTextNode(element)
        subnode.appendChild(textnode)
        node.appendChild(subnode)
        ul.appendChild(node)
        console.log("hibba".endsWith("bba"))
        

    });
}