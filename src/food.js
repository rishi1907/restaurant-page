export {displayFood}

function displayFood() {
    let cards = document.querySelector('.cards');
    cards.style.display = "none";
    cards.style.position = "absolute"
    let content = document.querySelector('#content');
    let footer = document.querySelector(".footer");

    let foodtab = document.createElement('div');
    foodtab.classList.add("foodtab");
    let foodhead = document.createElement('div');
    foodhead.classList.add("foodhead");
    foodhead.textContent = "Menu";

    foodtab.appendChild(foodhead);
    for(let i=0;i<10;i=i+1){
        let item = document.createElement('div');
        item.classList.add(`item${i}`);
        item.textContent=`Item ${i}`;
        
        foodtab.appendChild(item);
    } 

    let foodclose = document.createElement('button');
    foodclose.classList.add("foodclose")
    foodclose.textContent = "close";
    foodclose.addEventListener("click", close);

    foodtab.appendChild(foodclose);


    content.insertBefore(foodtab,footer);



    function close(){
        cards.style.display = "grid";
        cards.style.position = "relative";
        content.removeChild(foodtab);
    }
}