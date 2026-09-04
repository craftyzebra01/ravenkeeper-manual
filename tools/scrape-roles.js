import fs from 'fs'

// collect api data
// parse wikitext from step 1
// combine into final output

const categories = [
    {
        name: 'Demons',
        pattern: /Summary.*?"(.*?)"/s
    },
    {
        name: 'Minions',
        pattern: /Summary.*?"(.*?)"/s
    },
    {
        name: 'Outsiders',
        pattern: /Summary.*?"(.*?)"/s
    },
    {
        name: 'Townsfolk',
        pattern: /Summary.*?"(.*?)"/s
    }
]

async function getRoles(category) {
    const cachePath = `./.cache/roles-${category}.json`
    if (fs.existsSync(cachePath)) {
        console.log('Using cached response')
        return JSON.parse(fs.readFileSync(cachePath, 'utf-8'))
    }
    const params = new URLSearchParams({
        action: 'query',
        generator: 'categorymembers',
        gcmtitle: `Category:${category}`,
        format: 'json',
        gcmlimit: 'max',
        prop: 'revisions',
        rvprop: 'content',
        rvslots: 'main'
    })

    const res = await fetch(`https://wiki.bloodontheclocktower.com/api.php?${params}`)

    const data = await res.json()
    fs.writeFileSync(cachePath, JSON.stringify(data, null, 2))
    return data
}

// query.pages -> dict, each key is an entry. iterate over
// title -> role name
// revisions[0].slots.main.* -> wikitext
// data should come already in json form
function extractWikiText(data) {
    // Object.entries(obj).map( ([k,v]) => do stuff)
    // data.query.pages.
    return Object.entries(data.query.pages)
        .map( ([k, v]) => {
            return {
                title: v.title,
                content: v.revisions?.[0]?.slots?.main["*"]
            }
        })
}


const roleData = []
for (const category of categories) {
    const roles = await getRoles(category.name)
    const wiki = extractWikiText(roles)
    roleData.push(wiki.map( ({title, content}) => {
        return {
            title,
            ability: content?.match(category.pattern)?.[1],
            team: category.name
        }
    }))
}

const parsedRoles = roleData.flat()

console.log(parsedRoles)
fs.writeFileSync('./.cache/parsed_roles.json', JSON.stringify(parsedRoles, null, 2))
