const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Deadpool",
    "Black Cat",
    "Evil Strange",
    "Thor",
    "She Hulk",
    "Vader",
    "Thanos"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = '';
    // Instead of forloop use Map method
    // Code here
    detailedPlayers = players.map(function(item,index){
        return item = {
            name:players[index],
            strength:getRandomStrength(),
            image:`./images/super-${index + 1}.png`,
            type:index % 2 === 0 ? 'hero' : 'villain',
        }
    })

    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
}

// Build player template
const buildPlayers = (players, type) => {
    let fragment = '';

    // Instead of using for loop
    // Use chaining of Array methods - filter, map and join
    // Type your code here
    var hero = players.filter(function(item) {
        return item.type=='hero';
    })
    var villain = players.filter(function(item) {
        return item.type=='villain';
    })

    if(type == 'hero'){
        fragment = hero.map(function(item){
            return `<div class="player">
            <img src="${item.image}" alt=" ">
            <div class="name">${item.name}</div>
            <div class="strength">${item.strength}</div>
            </div>`
        }).join("");
    }else{
        fragment =villain.map(function(item){
            return `<div class="player">
            <img src="${item.image}" alt=" ">
            <div class="name">${item.name}</div>
            <div class="strength">${item.strength}</div>
            </div>`
        }).join("");
    console.log(fragment)
   
}
return fragment;
}

// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
}


window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}