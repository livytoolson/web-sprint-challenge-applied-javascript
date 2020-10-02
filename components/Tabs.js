// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

const entryPoint = document.querySelector('.title');
// console.log(entryPoint);

function result(){
    axios.get('https://lambda-times-api.herokuapp.com/topics')
        .then(res => {
            const tabTopic = res.data
            console.log(tabTopic)
            tabTopic.forEach(topic => {
                const tabCard = tabMaker(topic)
                entryPoint.appendChild(tabCard)
            })
        })
        .catch(err => {
            console.log(err)
        })
}
result();

// axios.get('https://lambda-times-api.herokuapp.com/topics')
//     .then(res => {
//         const tabTopic = res.data;
//         // console.log(res.data)
//         tabTopic.forEach(topic => {
//             const tabCard = tabMaker(topic)
//             // make tabs
//             entryPoint.appendChild(tabCard)
//             // append to the DOM
//         })
//     })
//     .catch(err => {
//         console.log(err)
//     })

function tabMaker(topic) {
    
    // Instantiate element
    const tab = document.createElement('div');

    // Set class name
    tab.classList.add('tab');

    // Add text
    tab.textContent = topic;

    // Return
    return tab;

}