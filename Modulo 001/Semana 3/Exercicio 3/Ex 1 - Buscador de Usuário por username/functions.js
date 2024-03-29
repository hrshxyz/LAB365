const data = [{
    "name": "Scenic Stream",
    "username": "Eladio66",
    "rating": 0.9,
    "favorites": 2,
    "visits": 10,
    "difficulty": 3,
    "terrain": 4,
    "size": "big",
    "created": "September 15, 2021",
    "updated": "November 25, 2022",
    "rg": '22.595.779-6',
    "coords": "30.0795 111.6412"
  },{
    "name": "Indigo Shady Stream",
    "username": "Marian_Volkman10",
    "rating": 2.8,
    "favorites": 42,
    "visits": 504,
    "difficulty": 3,
    "terrain": 4,
    "size": "mini",
    "created": "December 21, 2022",
    "updated": "February 7, 2023",
    "rg": '37.375.553-3',
    "coords": "40.4485 -76.4953"
  },{
    "name": "Historic Trail",
    "username": "Tabitha_Bosco",
    "rating": 3.5,
    "favorites": 21,
    "visits": 84,
    "difficulty": 3,
    "terrain": 3,
    "size": "mini",
    "created": "August 26, 2022",
    "updated": "November 2, 2022",
    "rg": '43.469.889-1',
    "coords": "44.4780 10.7721"
  },{
    "name": "Old Footpath",
    "username": "Ford50",
    "rating": 3.8,
    "favorites": 23,
    "visits": 322,
    "difficulty": 1,
    "terrain": 1,
    "size": "small",
    "created": "December 10, 2021",
    "updated": "July 27, 2022",
    "rg": '30.318.669-0',
    "coords": "15.3748 -25.0323"
  },
  {
    "name": "Viovar Historic Route",
    "username": "Soledad_Olson",
    "rating": 1.2,
    "favorites": 6,
    "visits": 6,
    "difficulty": 4,
    "terrain": 1,
    "size": "small",
    "created": "May 4, 2022",
    "updated": "June 13, 2022",
    "rg": '10.682.931-2',
    "coords": "81.8303 33.4350"
  },
  
  {
    "name": "Orange Shady Footpath",
    "username": "Jarvis_Hackett",
    "rating": 3.1,
    "favorites": 31,
    "visits": 93,
    "difficulty": 4,
    "terrain": 2,
    "size": "large",
    "created": "June 20, 2022",
    "updated": "November 19, 2022",
    "rg": '45.675.097-6',
    "coords": "-68.5221 -97.7478"
  },
  {
    "name": "Blue Stream",
    "username": "Jason.Kautzer80",
    "rating": 4.1,
    "favorites": 54,
    "visits": 432,
    "difficulty": 5,
    "terrain": 3,
    "size": "medium",
    "created": "August 27, 2022",
    "updated": "November 8, 2022",
    "rg": '34.119.462-1',
    "coords": "-74.4389 146.7820"
  }
];

const ul = document.getElementById("username");
data.forEach((user) => {
    const li = document.createElement("li");
    li.innerHTML = user.username;
    ul.appendChild(li);
});

function printUser(name) {
    const p = document.getElementById("user");
    p.innerHTML = name;
};

const msgUser = "Usuário não encontrado!";
function searchUsername() {
    const username = document.getElementById('search').value;
    const findUsername = data.find((user) => {
            return user.username === username
    });
    findUsername != undefined
        ? printUser(findUsername.name)
        : printUser(msgUser)
};