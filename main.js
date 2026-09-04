// const allScripts = [
//     troubleBrewingData, 
//     badMoonRisingData, 
//     sectsAndVioletsData,
//     last_game
// ]
const scriptSelect = document.getElementById('script-select')
const numPlayersSelect = document.getElementById('num-players-select')
const playerList = document.getElementById('player-list')
const roleCountDisplay = document.getElementById('role-count-display')

const initialPlayerCount = 8
const initialScript = "Trouble Brewing"

const roleCountMapping = {
    'Players': Array.from({length: 15-5+1}, (_, i) => i+5),
    'Townsfolk': [3, 3, 5, 5, 5, 7, 7, 7, 9, 9, 9],
    'Outsiders': [0,1,0,1,2,0,1,2,0,1,2],
    'Minions': [1,1,1,1,1,2,2,2,3,3,3],
    'Demons': [1,1,1,1,1,1,1,1,1,1,1]
}

// async function loadScripts() {
//     const scripts = await Promise.all(
//         scriptFiles.map(async (path) => {
//             const res = await fetch(path)
//             const data = await res.json()
//             return {path, data}
//         })
//     )
// 
//     scripts.forEach(({path, data}) => {
//         const option = document.createElement('option')
//         option.value = data.name
//         option.textContent = data.name
//         if (initialScript === data.name) {
//             option.selected = true
//         }
//         scriptSelect.appendChild(option)
//     })
// }

function getScriptRoles(scriptName) {
    // load script data
    // check if scriptName in any of the jsons name property
    // if it is, return the roles list
//    const scripts = await Promise.all(
//        scriptFiles.map(async (path) => {
//            const res = await fetch(path)
//            const data = await res.json()
//            return {path, data}
//        })
//    )

    const match = allScripts.find(item => item.name === scriptName)
    return match ? match.roles : []
}

function handleScriptChange(event) {
    const newScriptName = event.target.value

    const roles = getScriptRoles(newScriptName)
    const options = '<option value=""></option>' + roles.map((role) => {
        return `<option value="${role.name}">${role.name}</option>`
    }).join('')
    const selects = document.querySelectorAll('.role-select');
    selects.forEach(el => {
        el.innerHTML = options
    })
    
    // Populate the role descriptions details pane
    const roleDescriptions = document.getElementById("role-descriptions-details")
    roleDescriptions.innerHTML = allScripts.find(s => s.name === newScriptName).roles.map(role => {
        return `
            <li>
                <b>${role.name}</b>
                ${role.ability}
                ${role.team}
            </li>
        `
    }).join('')

    // Populate the first-order-details list
    document.getElementById("first-order-details").innerHTML = 
        allScripts.find(s => s.name === newScriptName).firstNight.map(
            role => {
                if (typeof role === 'string') {
                    return `<li><b>${role}</b></li>`
                }

                return `
                    <li>
                        <b>${role.name}</b>
                        ${role.ability}
                        ${role.team}
                    </li>
                `
            }).join('')

    // Populate the other-order-details list
    document.getElementById("other-order-details").innerHTML = 
        allScripts.find(s => s.name === newScriptName).otherNight.map(
            role => {
                if (typeof role === 'string') {
                    return `<li><b>${role}</b></li>`
                }

                return `
                    <li>
                        <b>${role.name}</b>
                        ${role.ability}
                        ${role.team}
                    </li>
                `
            }).join('')
}


function handleNumPlayerCountChange(event) {
    // this should reset the player list with the correct amount of li
    const numPlayers = event.target.value
    playerList.innerHTML = '';

    for (let i = 1; i <= numPlayers; i++) {
        const li = document.createElement('li')
        li.innerHTML = `
            <div>
                <select class="role-select"></select>
                <input type="text">
            </div>
        `
        playerList.appendChild(li)
    }

    const roles = getScriptRoles(scriptSelect.value)
    const options = '<option value=""></option>' + roles.map((role) => {
        return `<option value="${role.name}">${role.name}</option>`
    }).join('')
    const selects = document.querySelectorAll('.role-select');
    selects.forEach(el => {
        el.innerHTML = options
    })
}

function initNumPlayerCount(playerCount) {
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

function initScriptSelect(initialScriptName) {
    scriptSelect.addEventListener('change', handleScriptChange)
    allScripts.forEach(script => {
        const option = document.createElement('option')
        option.value = script.name
        option.textContent = script.name
        if (initialScriptName === script.name) {
            option.selected = true
        }
        scriptSelect.appendChild(option)
    })
    handleScriptChange({target: scriptSelect})
}

function populateRoleDescriptions(scriptName) {
    // fill up the role description details view
    // with data from allScripts.scriptName.roles
    const roleDescriptions = document.getElementById("role-descriptions-details")
    roleDescriptions.innerHTML = allScripts.scriptName.roles.map(role => {
        return `
            <li>
                <b>${role.name}</b>
                ${role.ability}
                ${role.team}
            </li>
        `
    }).join('')
}   

function initPage() {
    initScriptSelect(initialScript)
    initNumPlayerCount(initialPlayerCount)
    initRoleCountDisplay(initialPlayerCount)
}

initPage()
