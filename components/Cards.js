// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

const entryPoint =  document.querySelector('.cards-container')
console.log(entryPoint)

axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then(res => {
        const articles = res.data.articles
        for (let obj in articles) {
            // console.log(obj)
            articles[obj].forEach( item => {
                let card = articleMaker(item)
                // console.log(card)
                entryPoint.appendChild(card)
            })
        }
    })
    .catch(err => {
        console.log(err)
    })

function articleMaker(obj){

    // Instantiate elements
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const image = document.createElement('div');
    const imageURL = document.createElement('img');
    const authorName = document.createElement('span');

    // Set class names
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    image.classList.add('img-container');

    // Set attributes & text
    headline.textContent = obj.headline;
    imageURL.src = obj.authorPhoto;
    authorName.textContent = `By ${obj.authorName}`;

    // Create hierarchy
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(image);
    image.appendChild(imageURL);
    author.appendChild(authorName);

    // Event listener
    card.addEventListener('click', () => {
        console.log(headline);
    });

    // Return
    return card;
}