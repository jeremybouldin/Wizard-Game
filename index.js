import { characterData } from "./data.js";
import Character from "./Character.js";

document.getElementById('attack-button').addEventListener('click', attack)

function render(){
   document.getElementById('hero').innerHTML = wizard.getCharacterHtml()
   document.getElementById('monster').innerHTML = orc.getCharacterHtml()
}

function attack(){
   wizard.getDiceHtml()
   orc.getDiceHtml()
   wizard.takeDamage(orc.currentDiceScore)
   orc.takeDamage(wizard.currentDiceScore)
   if(wizard.dead || orc.dead){
      // endGame()
   }
   render()
}

function endGame(){
   const endMessage = wizard.dead && orc.dead ? 'No victor, both are dead'
   : wizard.dead ? 'The Orc is victorious'
   : 'The wizard is victorious'

   const endEmoji = orc.dead ? '🔮' : '☠️' 
   document.getElementById('main').innerHTML = 
   `<div class="end-game">
        <h2>Game Over</h2>
        <h3>${endMessage}</h3>
        <p class="end-emoji">${endEmoji}</p>
    </div>` 
}

const wizard = new Character(characterData.hero)
const orc = new Character(characterData.monster)
render()
