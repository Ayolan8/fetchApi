const root = document.getElementById('root');
const loader = document.querySelector('.loader');

fetch('https://v2.jokeapi.dev/joke/Any?type=single&amount=10')
.then(res => res.json()
)
.then(data => {
    
    const {jokes} = data; 
    loader.style.display = "none";
    jokes.forEach(({id, category, lang, joke}) => {
        const hr = document.createElement('div');
        hr.classList.add("hr");
        // create container for the jokes
        const jokeDiv = document.createElement('div');
        jokeDiv.textContent = joke;
        // add a class to joke div
        jokeDiv.classList.add("joke-div");

        // create container for both the joke category and language
        const jokeDetails = document.createElement('div');
        // add a class to joke details
        jokeDetails.classList.add('joke-detail');

        // create an element to hold the joke category
        const jokeCategory = document.createElement('p');
        // add the joke category to the category element
        jokeCategory.textContent = 'Category: ' + category;

        // create an element to hold the joke language
        const jokeLang = document.createElement('p');
        jokeLang.textContent = 'Language: ' + lang;

        // append the joke category to its parent container
        jokeDetails.appendChild(jokeCategory);
        // append the joke language to its parent container
        jokeDetails.appendChild(jokeLang);
        
        root.appendChild(jokeDiv)
        // append joke details the root
        root.appendChild(jokeDetails);
        root.appendChild(hr);
        
    })
})
.catch(err => root.textContent = "There is a problem loading this page. Check your network connection and try again!");

