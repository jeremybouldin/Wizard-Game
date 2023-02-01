import {
    getDiceRollArray,
    getDicePlaceholderHtml,
    getPercentage,
} from './utils.js'
export default Character

function Character(data) {
    Object.assign(this, data)
    this.diceHtml = getDicePlaceholderHtml(this.diceCount)
    this.maxHealth = this.health

    this.getHealthBarHtml = function () {
        const percent = getPercentage(this.health, this.maxHealth)
        return `
         <div class="health-bar-outer">
            <div class="health-bar-inner ${
                percent <= 25 ? 'danger' : ''
            }" style="width: ${percent}%">
            </div>
         </div>
      `
    }

    this.setDiceHtml = function (diceCount) {
        this.currentDiceScore = getDiceRollArray(this.diceCount)

        //Arrow function
        this.diceHtml = this.currentDiceScore
            .map((num) => `<div class="dice">${num}</div>`)
            .join('')

        //Inline function
        // this.diceArray = this.currentDiceScore.map(function(num){
        //    return `<div class="dice">${num}</div>`
        // }).join('')
    }

    this.takeDamage = function (attackScoreArray) {
        //Arrow function
        const totalAttackScore = attackScoreArray.reduce(
            (total, currentScore) => total + currentScore
        )

        //Inline function
        // const totalAttackScore = attackScoreArray.reduce(function(total, currentScore){
        //    return total + currentScore
        // })

        this.health -= totalAttackScore
        if (this.health <= 0) {
            this.dead = true
            this.health = 0
        }
    }

    this.getCharacterHtml = function () {
        const { name, avatar, health, diceHtml } = this
        const healthBar = this.getHealthBarHtml()

        return `
         <div class="character-card">
            <h4 class="name"> ${name} </h4>
            <img class="avatar" src="${avatar}"/>
            <p class="health">health: <b> ${health} </b></p>
            ${healthBar}
            <div class="dice-container">
               ${diceHtml}
            </div>
         </div>
      `
    }
}
