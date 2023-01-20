const hero = 'hero'
const heroName = 'Wizard'
const heroAvatar = 'images/wizard.png'
const heroHealth = 60
const heroDiceContainer = 6

const monster = 'monster'
const monsterName = 'Orc'
const monsterAvatar = "images/orc.png"
const monsterHealth = 10
const monsterDiceContainer = 4

function renderCharacter(character, name, avatar, health, dice) {
   document.getElementById(character).innerHTML = `
   <div class="character-card">
      <h4 class="name"> ${name} </h4>
      <img class="avatar" src="${avatar}"/>
      <p class="health">health: <b> ${health} </b></p>
      <div class="dice-container"><div class="dice"> ${dice} </div>
   </div>
   `
}


renderCharacter(hero, heroName, heroAvatar, heroHealth, heroDiceContainer)
renderCharacter(monster, monsterName, monsterAvatar, monsterHealth, monsterDiceContainer)
// document.getElementById('hero').innerHTML = `
// <div class="character-card">
// <h4 class="name"> Wizard </h4>
// <img class="avatar" src="images/wizard.png"/>
// <p class="health">health: <b> 60 </b></p>
// <div class="dice-container"><div class="dice"> 6 </div></div>
// </div>
// `

// document.getElementById('monster').innerHTML = `
//    <div class="character-card">
//       <h4 class="name">Orc</h4>
//       <img class="avatar" src="images/orc.png" />
//       <p class="health">health: <b> 10 </b></p>
//       <div class="dice-container"><div class="dice">4</div></div>
//    </div>
// `