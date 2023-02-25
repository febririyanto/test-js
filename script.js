let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let flighting;
let monterHeight;
let inventory = ["stick"];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterNameText = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

const weapons = [{
    name: "stick",
    power: 5
}, {
    name: "dagger",
    power: 30
}, {
    name: "claw hammer",
    power: 50
}, {
    name: "sword",
    power: 100
}];

const monsters = [{
    name: "slime",
    level: 2,
    health: 15
}, {
    name: "fanged beast",
    level: 8,
    health: 60
}, {
    name: "dragon",
    level: 20,
    health: 300
}];

const locations = [{
    name: "town square",
    "button text": ["Go to store", "Go to cave", "flight dragon"],
    "button functions": [goStore, goCave, flightDragon],
    text: "You are in the town square. You see a sign that says \"store.\""
}, {
    name: "store",
    "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
    "button functions": [buyHealth, buyWeapon, goTown],
    text: "You enter the store."
}, {
    name: "cave",
    "button text": ["Flight slime", "Flight fanged beast", "Go to town square"],
    "button functions": [flightSlime, flightBeast, goTown],
    text: "You enter the cave. You see some monsters."
}, {
    name: "fight",
    "button text": ["Attack", "Dodge", "Run"],
    "button functions": [attack, dodge, goTown],
    text: "You are fight a monster."
}]

// initial buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = flightDragon;

function update(location) {
    button1.innerText = location["button text"][0];
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];
    button1.onclick = location["button functions"][0];
    button2.onclick = location["button functions"][1];
    button3.onclick = location["button functions"][2];
    text.innerText = location.text;
}

function goTown() {
    update(locations[0]);
}

function goStore() {
    update(locations[1]);
}

function goCave() {
    update(locations[2]);
}

function buyHealth() {
    if (gold >= 10) {
        gold -= 10
        health += 10
        goldText.innerText = gold;
        healthText.innerText = health;
    } else {
        text.innerText = "You do not have enough gold to buy health.";
    }
}

function buyWeapon() {
    if (currentWeapon < weapons.length - 1) {
        if (gold >= 30) {
            gold -= 30;
            currentWeapon++;
            goldText.innerText = gold;
            let newWeapon = weapons[currentWeapon].name;
            text.innerText = "You now have a " + newWeapon + ".";
            inventory.push(newWeapon);
            text.innerText += "In your inventory you have: " + inventory;
        } else {
            text.innerText = "You do not have enough gold to buy a weapon.";
            button2.innerText = "Sell weapon for 115 gold";
            button2.onclick = sellWeapon;
        }
    }
}

function sellWeapon() {
    if (inventory.length > 1) {
        gold += 15;
        goldText.innerText = gold;
        let currentWeapon = inventory.shift();
        text.innerText = "You sold a " + currentWeapon + ".";
    } else {
        text.innerText = "Don't sell your only weapon!";
    }
}


function flightSlime() {
    flighting = 0;
    goFight();
}

function flightBeast() {
    flighting = 1;
    goFight();
}

function flightDragon() {
    flighting = 2;
    goFight();
}

function goFight() {
    update(locations[3]);
    monsterHealth = monsters[fighting].health;
    monsterStats.style.display = "block";
    monsterNameText.innerText = monsters[fighting].name;
    monsterHealthText.innerText = monsterHealth;
}

function attack() {

}

function dodge() {

}