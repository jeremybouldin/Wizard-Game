import { characterData } from './data.js'
import Character from './Character.js'
const attackBtn = document.getElementById('attack-button')

let monstersArray = ['orc', 'demon', 'goblin']

document.getElementById('attack-button').addEventListener('click', attack)

function render() {
    document.getElementById('hero').innerHTML = wizard.getCharacterHtml()
    document.getElementById('monster').innerHTML = monster.getCharacterHtml()
}

function attack() {
    wizard.setDiceHtml()
    monster.setDiceHtml()
    wizard.takeDamage(monster.currentDiceScore)
    monster.takeDamage(wizard.currentDiceScore)
    render()
    if (wizard.dead) {
        endGame()
    }
    if (monster.dead) {
        if (monstersArray.length > 0) {
            attackBtn.disabled = true
            setTimeout(() => {
                attackBtn.disabled = false
                monster = getNewMonster()
                render()
            }, 1500)
        } else {
            endGame()
        }
    }
}

function getNewMonster() {
    const nextMonsterData = characterData[monstersArray.shift()]
    return nextMonsterData ? new Character(nextMonsterData) : {}
}

function endGame() {
    attackBtn.disabled = true
    const endMessage =
        wizard.dead && monster.dead
            ? 'No victor - all creatures are dead'
            : wizard.dead
            ? `The ${monster.name} is victorious`
            : 'The wizard is victorious'

    const endEmoji = wizard.dead ? '☠️' : '🔮'
    setTimeout(() => {
        document.body.innerHTML = `
            <div class="end-game">
                <h2>Game Over</h2>
                <h3>${endMessage}</h3>
                <p class="end-emoji">${endEmoji}</p>
            </div>`
    })
}

const wizard = new Character(characterData.hero)
let monster = getNewMonster()

render()
