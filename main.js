const scriptSelect = document.getElementById('script-select')
const numPlayersSelect = document.getElementById('num-players-select')
const playerList = document.getElementById('player-list')
const roleCountDisplay = document.getElementById('role-count-display')

const initialPlayerCount = 8

const roleCountMapping = {
    'Players': Array.from({length: 15-5+1}, (_, i) => i+5),
    'Townsfolk': [3, 3, 5, 5, 5, 7, 7, 7, 9, 9, 9],
    'Outsiders': [0,1,0,1,2,0,1,2,0,1,2],
    'Minions': [1,1,1,1,1,2,2,2,3,3,3],
    'Demons': [1,1,1,1,1,1,1,1,1,1,1]
}
console.log(roleCountMapping)

//scripts/data/trouble_brewing.json
const scriptFiles = [
    'data/scripts/trouble_brewing.json',
    'data/scripts/bad_moon_rising.json',
    'data/scripts/sects_and_violets.json',
]

async function loadScripts() {
    const scripts = await Promise.all(
        scriptFiles.map(async (path) => {
            const res = await fetch(path)
            const data = await res.json()
            return {path, data}
        })
    )

    scripts.forEach(({path, data}) => {
        const option = document.createElement('option')
        option.value = data.name
        option.textContent = data.name
        scriptSelect.appendChild(option)
    })
}

async function getScriptRoles(scriptName) {
    // load script data
    // check if scriptName in any of the jsons name property
    // if it is, return the roles list
    const scripts = await Promise.all(
        scriptFiles.map(async (path) => {
            const res = await fetch(path)
            const data = await res.json()
            return {path, data}
        })
    )

    const match = scripts.find(item => item.data.name === scriptName)
    return match ? match.data.roles : []
}

async function handleScriptChange(event) {
    const roles = await getScriptRoles(event.target.value)
    const options = '<option value=""></option>' + roles.map((role) => {
        return `<option value="${role}">${role}</option>`
    }).join('')
    const selects = document.querySelectorAll('.role-select');
    selects.forEach(el => {
        el.innerHTML = options
    })
}


async function handleNumPlayerCountChange(event) {
    // this should reset the player list with the correct amount of li
    const numPlayers = event.target.value
    console.log(`New Player Count: ${numPlayers}`)
    playerList.innerHTML = '';

    for (let i = 1; i <= numPlayers; i++) {
        // populate options with roles from the selected script
        // const options = 
        const li = document.createElement('li')
        // li.textContent = `Player ${i}`
        // grab the selected value of scriptSelect (scriptSelect.value)
        // 
        li.innerHTML = '<select class="role-select"></select>'
        playerList.appendChild(li)
    }

    const roles = await getScriptRoles(scriptSelect.value)
    const options = '<option value=""></option>' + roles.map((role) => {
        return `<option value="${role}">${role}</option>`
    }).join('')
    const selects = document.querySelectorAll('.role-select');
    selects.forEach(el => {
        el.innerHTML = options
    })
}

function initNumPlayerCount(playerCount) {
    console.log("initializing numPlayerCount dropdown")
    numPlayersSelect.addEventListener('change', handleNumPlayerCountChange)
    numPlayersSelect.innerHTML = ''
    for (let i = 5; i <= 15; i++) {
        const option = document.createElement('option')
        option.value = i
        if (i === playerCount) {
            option.selected = true
        }
        option.textContent = i
        numPlayersSelect.appendChild(option)
    }

    handleNumPlayerCountChange({target: numPlayersSelect})
}

function initRoleCountDisplay(playerCount) {
    console.log("initializing roleCountDisplay table")
    
    const rows = ['Players', 'Townsfolk', 
        'Outsiders', 'Minions', 'Demons'].map((role) => {
            const data = Array.from({length: 11}, (_, i) =>
                `
                    <td id="${role}-${i}">
                        ${roleCountMapping[role][i]}
                    </td>
                `).join('')

            return `
                <tr>
                    <th scope="row">${role}</th>
                    ${data}
                </tr>
            `
        }).join('')
    
    roleCountDisplay.innerHTML = rows
}

console.log("hello world!")
loadScripts()
scriptSelect.addEventListener('change', handleScriptChange);

initNumPlayerCount(initialPlayerCount)
initRoleCountDisplay(initialPlayerCount)

