const fs = require("fs")
const path = require("path")

const ROLES_FILE = process.argv[2] || "data/roles.json"
const SCRIPT_FILE = process.argv[3] || "data/trouble_brewing.js"
const OUT_FILE = process.argv[4] || "data/scripts/test.json"

const roles = JSON.parse(fs.readFileSync(ROLES_FILE, "utf8"))
const script = JSON.parse(fs.readFileSync(SCRIPT_FILE, "utf8"))

const roles_by_name = Object.fromEntries(
    roles.map(role => [role.name.toLowerCase(), role])
)

//load files
//create dict of roles by name for easy searching
// in script.roles, replace with roles object

updated_script = {
    ...script,
    roles: script.roles.map(rn => roles_by_name[rn.toLowerCase()]),
    firstNight: script.firstNight.map(a => roles_by_name[a.toLowerCase()] ?? a),
    otherNight: script.otherNight.map(a => roles_by_name[a.toLowerCase()] ?? a)
}


fs.writeFileSync(OUT_FILE, JSON.stringify(updated_script, null, 2))

