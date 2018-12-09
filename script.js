var michelleObject = {
    firstName: "Michelle",
    lastName: "Tabor",
    favoriteFoods: ["Pizza", "Oranges"],
    firstJob: "Printer's Assistant",
    dreamJob: "Backcountry Ranger",
    greatestFear: "trypohpobia",
    homeTown: "Branchland, WV",
    secretTalents:  ["owning socks that could be biological warfare", "binging netflix for 3 days", "sings like a dying cat"],
    wouldSkyDive: true,
    petInfo: {
        type: "Dog",
        name: "Starbuck"
    }
}

var htmlString =
`
<h1>${michelleObject.firstName} ${michelleObject.lastName}</h1>
<ul class="list">Favorite Foods:
    <li>${michelleObject.favoriteFoods[0]}</li>
    <li>${michelleObject.favoriteFoods[1]}</li>
</ul>
<p>First Job: ${michelleObject.firstJob}</p>
<p>Dream Job: ${michelleObject.dreamJob}</p>
<p>Greatest Fear: ${michelleObject.greatestFear}</p>
<p>Hometown: ${michelleObject.homeTown}</p>
<p>Michelle's secret talents are ${michelleObject.secretTalents}</p>
<p>Michelle would skydive? ${michelleObject.wouldSkyDive}</p>
<p>Michelle has a ${michelleObject.petInfo.type} named ${michelleObject.petInfo.name}</p>

`
var michelleContainer = document.querySelector("#personal-website")
michelleContainer.innerHTML = htmlString