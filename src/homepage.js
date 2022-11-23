function HomepageMaker(div) {
    let title = document.createElement('div');
    title.classList.add('title');
    title.textContent = 'REGULO';
    let tagline = document.createElement('div');
    tagline.classList.add('tagline');
    tagline.textContent = 'More than a restaurant, A safe haven';
    let cards = document.createElement('div');
    cards.classList.add('cards');

    let about = document.createElement('div');
    about.classList.add('about');
    about.textContent = 'About';
    let food = document.createElement('div');
    food.classList.add('food');
    food.textContent = 'Food';
    let drinks = document.createElement('div');
    drinks.classList.add('drinks');
    drinks.textContent = 'Drinks';

    cards.appendChild(about);
    cards.appendChild(food);
    cards.appendChild(drinks);

    let footer = document.createElement('div');
    footer.classList.add('footer');
    let twitter = document.createElement('div');
    twitter.classList.add('twitter');
    twitter.textContent = 'twitter';
    let insta = document.createElement('div');
    insta.classList.add('insta')
    insta.textContent = 'instagram';
    let number = document.createElement('div');
    number.classList.add('contact');
    number.textContent = '9999999999';

    footer.appendChild(twitter);
    footer.appendChild(insta);
    footer.appendChild(number);

    div.appendChild(title);
    div.appendChild(tagline);
    div.appendChild(cards);
    div.appendChild(footer)
    console.log('fuuuck');
}

export {HomepageMaker};