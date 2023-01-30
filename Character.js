import { getDiceRollArray, getDicePlaceholderHtml } from "./utils.js";
export default Character

function Character(data){
   Object.assign(this, data)
      
   this.getDiceHtml = function(diceCount){
      this.currentDiceScore = getDiceRollArray(this.diceCount)
      this.diceArray = this.currentDiceScore.map(function(num){
         return `<div class="dice">${num}</div>`
      }).join('')
   }
   
   this.diceArray = getDicePlaceholderHtml(this.diceCount)
   
   this.takeDamage = function(attackScoreArray){
      const totalAttackScore = attackScoreArray.reduce(function(total, currentScore){
         return total + currentScore
      })
      console.log(`${this.name} is reduced by ${totalAttackScore}`)
      this.health = this.health - totalAttackScore
   }

   this.getCharacterHtml = function(){
      const {name, avatar, health, diceCount, diceArray} = this

      return `
         <div class="character-card">
            <h4 class="name"> ${name} </h4>
            <img class="avatar" src="${avatar}"/>
            <p class="health">health: <b> ${health} </b></p>
            <div class="dice-container">
               ${diceArray}
            </div>
         </div>
      `
   }
}

