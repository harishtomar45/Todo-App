let ul = document.querySelector("ul");
let form = document.querySelector("form");
let input = document.querySelector("input");


const saveTodoApp = (e)=> {
   
    e.preventDefault();

    let li = document.createElement("li");
    li.innerText = input.value;

    li.className = "list-group-item";

    let deltbtn = document.createElement('button');
    deltbtn.innerText = "Delete";
    deltbtn.className = "btn btn-danger float-end btn-sm";
    li.appendChild(deltbtn);
    ul.appendChild(li);


    form.reset();

};

form.addEventListener("submit", saveTodoApp);



const deleteElement = (e)=> {
    if(e.target.className.includes("btn-danger")){
        if(window.confirm("Are You Sure!!")){
            ul.removeChild(e.target.parentElement);
        }
    }
}

ul.addEventListener("click", deleteElement);
