export {displayAbout}

function displayAbout(){
    let cards = document.querySelector('.cards');
    cards.style.display = "none";
    cards.style.position = "absolute"
    let content = document.querySelector('#content');
    let footer = document.querySelector(".footer");

    let abouttab = document.createElement('div');
    abouttab.classList.add("aboutTab");

    let subhead = document.createElement('div');
    subhead.textContent = "History Of the restaurant";
    subhead.classList.add("abouthead");

    let info = document.createElement('div');
    info.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel nulla vulputate, auctor magna eu, commodo sem. Mauris sollicitudin ipsum sit amet dolor facilisis maximus. Aliquam at tristique felis, vitae tincidunt ipsum. Nulla leo justo, malesuada sed rutrum et, accumsan eu sem. Vestibulum at iaculis velit. Curabitur id justo neque. Mauris tincidunt bibendum pulvinar. Suspendisse nisi magna, mollis at turpis vitae, rhoncus commodo dolor. Duis at pulvinar ligula. Donec faucibus elit vitae libero sagittis consectetur.";
    info.classList.add("aboutinfo");

    let aboutclose = document.createElement('button')
    aboutclose.textContent = "close";
    aboutclose.classList.add("aboutclose");
    aboutclose.addEventListener("click", close)

    abouttab.appendChild(subhead);
    abouttab.appendChild(info);
    abouttab.appendChild(aboutclose);
    content.insertBefore(abouttab, footer);


    function close(){
        cards.style.display = "grid";
        cards.style.position = "relative";
        content.removeChild(abouttab);
    }

}