export {displayDrinks}

function displayDrinks(){

    let cards = document.querySelector('.cards');
    cards.style.display = "none";
    cards.style.position = "absolute"
    let content = document.querySelector('#content');
    let footer = document.querySelector(".footer");

    let drinksTab = document.createElement('div');
    drinksTab.classList.add("drinkstab");
    let drinkshead = document.createElement('div');
    drinkshead.classList.add("drinkshead");
    drinkshead.textContent = "Drinks";

    drinksTab.appendChild(drinkshead);
    for(let i=0;i<8;i=i+1){
        let item = document.createElement('div');
        item.classList.add(`item${i}`);
        item.textContent=`Item ${i}`;
        
        drinksTab.appendChild(item);
    } 

    let drinksclose = document.createElement('button');
    drinksclose.classList.add("drinksclose");
    drinksclose.textContent="close";
    drinksclose.addEventListener("click", close);

   drinksTab.appendChild(drinksclose);

   content.insertBefore(drinksTab, footer);

    function close(){
        cards.style.display = "grid";
        cards.style.position = "relative";
        content.removeChild(drinksTab);
    }
}

