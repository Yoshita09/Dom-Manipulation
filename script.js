function createCustomElement(){
    let elementType = document.getElementById('elementType').value;
    let content = document.getElementById ('elementContent').value;
    document.getElementById('elementContent').value="";
    let newElement = document.createElement(elementType);
    switch(elementType){
        case 'img':
            newElement.src = content;
            newElement.style.width = "100px";
        default:
            newElement.textContent = content;
    }

    let playground = document.getElementById("element-playground");
    let playgroundP =document.getElementById("playgroundP");
    playgroundP.innerHTML="";
    playground.appendChild(newElement);

}

function clearPlayground(){
    let playground = document.getElementById("element-playground");
    playground.innerHTML="";
    playground.innerHTML="<p>Element will be created here dynamically!</p>";
}

function addState(){
    let stateList = document.getElementById("state-list");
    let state = document.getElementById("newState").value.trim();
    let newState = document.createElement("li")
    if(state === ""){
        alert("Enter a State name")
    }else{
        newState.textContent=state;
        stateList.appendChild(newState);
    }
    document.getElementById("newState").value="";
}

function removeLastState(){
    let stateList = document.getElementById("state-list");
    let lastItem = stateList.lastElementChild;
    if (lastItem){
        lastItem.style.background="white";
        lastItem.style.color="black";
        setTimeout(function(){
            lastItem.remove();
        },250);

    }else{
        alert("State List is empty")
    }
}

function sortState(){
    let stateList = document.getElementById("state-list");
    let items = Array.from(stateList.children);
    items.sort(function(item1, item2){
        return item1.textContent.localeCompare(item2.textContent);   
    })
    console.log(items)
    stateList.innerHTML="";
    for(let i = 0; i<items.length;i++){
        items[i].classList.add("fade-in");
        stateList.appendChild(items[i]);
    }
}

let flag= true;
function highlightStates(){
    let lists = document.querySelectorAll("li");
    console.log(lists);
     if (flag){
        for (let i=0; i<lists.length;i++){
            lists[i].style.background="white";
            lists[i].style.color="black";
            lists[i].style.margin="2px 0";
        }
     }else{
        for (let i=0; i<lists.length;i++){
            lists[i].style.background="";
            lists[i].style.color="white";
            lists[i].style.margin="2px 0";
        }
     }
     flag=!flag;
}