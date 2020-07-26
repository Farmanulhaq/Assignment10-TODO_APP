var mylist = document.getElementById("mylist");

function add()
{
    var input = document.getElementById("item");
    var li = document.createElement("li");
    var litext = document.createTextNode(input.value);
    li.appendChild(litext);
    if(input.value==""){
        alert("please write something to add")
    }
    else{
        mylist.appendChild(li);
        
        }

    var delbtn = document.createElement("span");
    var btntext = document.createTextNode("x");
    delbtn.setAttribute("class","dell");
    delbtn.setAttribute("onclick","deleteItem(this)");
    delbtn.appendChild(btntext);
    
    li.appendChild(delbtn);

    
    input.value=""
}

function deleteItem(x)
{
    x.parentNode.remove()

}

function dellall()
{
    mylist.innerHTML = ""
}