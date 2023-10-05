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
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = '';
    var i = 0;
    // Instead of forloop use Map method
    // Code here
    detailedPlayers = players.map((item,index) => {
        if(index%2==0){
            role = 'hero'
        }else{
            role = 'villan'
        }

        i++
        return item = {
            name:players[i-1],
            strength:getRandomStrength(),
            image:`./images/super-${i}.png`,
            type:role
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
    var hero = players.filter((item) => {
        return item['type'] === 'hero';
    })
    var villain = players.filter((item) => {
        return item['type']==='villan';
    })

    if(type === 'hero'){
        fragment = hero.map((item)=>{
            return `<div class="player">
            <img src="${players[i].image}" alt=" ">
            <div class="name">${players[i].name}</div>
            <div class="strength">${players[i].strength}</div>
            </div>`
        });
    }else{
        fragment =villain.map((item)=>{
            return `<div class="player">
            <img src="${players[i].image}" alt=" ">
            <div class="name">${players[i].name}</div>
            <div class="strength">${players[i].strength}</div>
            </div>`
        });
    return fragment;
}
}

// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
}


window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}