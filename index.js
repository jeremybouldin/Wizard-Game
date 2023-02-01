import { characterData } from "./data.js";
import Character from "./Character.js";

let monstersArray = ["orc", "demon", "goblin"]

document.getElementById('attack-button').addEventListener('click', attack)

function render(){
   document.getElementById('hero').innerHTML = wizard.getCharacterHtml()
   document.getElementById('monster').innerHTML = monster.getCharacterHtml()
}

function attack(){
   wizard.getDiceHtml()
   monster.getDiceHtml()
   wizard.takeDamage(monster.currentDiceScore)
   monster.takeDamage(wizard.currentDiceScore)
   render()
   if(wizard.dead){
      endGame()
   } else if (monster.dead){
      monster = getNewMonster()
      if(Object.keys(monster).length > 0){
         render()
      } else {
         endGame()
      }
   }
}

function getNewMonster(){
   const nextMonsterData = characterData[monstersArray.shift()]
   return nextMonsterData ? new Character(nextMonsterData) : {}
}

function endGame(){
   const endMessage = wizard.dead && monster.dead ? 'No victor, both are dead'
   : wizard.dead ? `The ${monster.name} is victorious`
   : 'The wizard is victorious'

   const endEmoji = wizard.dead ? '☠️' : '🔮'

   document.body.innerHTML = 
   `<div class="end-game">
        <h2>Game Over</h2>
        <h3>${endMessage}</h3>
        <p class="end-emoji">${endEmoji}</p>
    </div>` 
}

const wizard = new Character(characterData.hero)
let monster = getNewMonster()

render()

