/*
 *Parse script files using the parsedRoles.json
 for all the script files in scripts/
 replace the roles with the roles object from parsedRoles.json
 */
import fs from 'fs'
import {readdir} from 'node:fs/promises'
const parsedRoles = JSON.parse(fs.readFileSync('parsedRoles.json', 'utf-8'))

const DEST_PATH = "../data/scripts"

try {
    // const files = await readdir('./scripts/')
    const names = []
    
    for (const file of await readdir('./scripts/')) {
        const script = JSON.parse(fs.readFileSync(`./scripts/${file}`, 'utf-8'))
        const newScript = {
            ...script,
            roles: script.roles.map( r => parsedRoles.find(e => e.name?.toLowerCase() === r) ?? r),
            firstNight: script.roles.map( r => parsedRoles.find(e => e.name?.toLowerCase() === r) ?? r),
            otherNight: script.roles.map( r => parsedRoles.find(e => e.name?.toLowerCase() === r) ?? r)
        }
        const js_str = JSON.stringify(newScript)
        const name = file.replace(".json", "")
        names.push(name)
        const js_file_data = `const ${name} = ${js_str}`
        fs.writeFileSync(`${DEST_PATH}/fmt_${name}.js`, js_file_data)
    }

    fs.writeFileSync(`${DEST_PATH}/all.js`, `const allScripts = [${names.toString()}]`)
} catch (err) {
    console.error(err)
}

