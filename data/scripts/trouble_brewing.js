const troubleBrewingData = {
  "name": "Trouble Brewing",
  "roles": [
    {
      "name": "Washerwoman",
      "ability": "You start knowing that 1 of 2 players is a particular Townsfolk.",
      "night": "Show the townsfolk character token. Point to both the TOWNSFOLK and WRONG players.",
      "team": "townsfolk"
    },
    {
      "name": "Librarian",
      "ability": "You start knowing that 1 of 2 players is a particular Outsider.(Or that zero are in play.)",
      "night": "Show the Outsider character token. Point to both the OUTSIDER and WRONG players.",
      "team": "townsfolk"
    },
    {
      "name": "Investigator",
      "ability": "You start knowing that 1 of 2 players is a particular Minion.",
      "night": "Show the Minion character token. Point to both the TOWNSFOLK and WRONG players.",
      "team": "townsfolk"
    },
    {
      "name": "Chef",
      "ability": "You start knowing how many pairs of evil players there are.",
      "night": "Give a finger signal.",
      "team": "townsfolk"
    },
    {
      "name": "Empath",
      "ability": "Each night, you learn how many of your 2 alive neighbors are evil.",
      "night": "Give a finger signal.",
      "team": "townsfolk"
    },
    {
      "name": "Fortune Teller",
      "ability": "Each night, choose 2 players: you learn if either is a Demon. There is a good player that registers as a Demon to you",
      "night": "The Fortune Teller chooses 2 players. Nod if either is the Demon (or the RED HERRING).",
      "team": "townsfolk"
    },
    {
      "name": "Undertaker",
      "ability": "Each night*, you learn which character died by execution today.",
      "night": "If a player was executed today, show their character token.",
      "team": "townsfolk"
    },
    {
      "name": "Monk",
      "ability": "Each night*, choose a player(not yourself): they are safe from the Demon tonight.",
      "night": "The Monk chooses a player.",
      "team": "townsfolk"
    },
    {
      "name": "Ravenkeeper",
      "ability": "If you die at night, you are woken to choose a player: you learn their character.",
      "night": "If the Ravenkeeper died tonight, the Ravenkeeper chooses a player. Show that player's character token.",
      "team": "townsfolk"
    },
    {
      "name": "Virgin",
      "ability": "The 1st time you are nominated, if the nominator is a Townsflk, they are executed immediately.",
      "night": "",
      "team": "townsfolk"
    },
    {
      "name": "Slayer",
      "ability": "Once per game, during the day, publicly choose a player: if they are the Demon, they die.",
      "night": "",
      "team": "townsfolk"
    },
    {
      "name": "Soldier",
      "ability": "You are safe from the Demon.",
      "night": "",
      "team": "townsfolk"
    },
    {
      "name": "Mayor",
      "ability": "If only 3 players live & no execution occurs, your team wins. If you die at night, another player might die instead.",
      "night": "",
      "team": "townsfolk"
    },
    {
      "name": "Butler",
      "ability": "Each night, choose a player (not yourself): tomorrow, you may only vote if they are voting too.",
      "night": "The Butler chooses a player.",
      "team": "outsider"
    },
    {
      "name": "Drunk",
      "ability": "You do not know you are the Drunk. You think you are a Townfolk character, but you are not.",
      "night": "",
      "team": "outsider"
    },
    {
      "name": "Recluse",
      "ability": "You might register as evil & as a Minion or Demon, even if dead,",
      "night": "",
      "team": "outsider"
    },
    {
      "name": "Saint",
      "ability": "If you die by execution, your team loses.",
      "night": "",
      "team": "outsider"
    },
    {
      "name": "Poisoner",
      "ability": "Each night, choose a player: they are poisoned tonight and tomorrow day.",
      "night": "The Poisoner chooses a player.",
      "team": "minion"
    },
    {
      "name": "Spy",
      "ability": "Each night, you see the Grimoire. You might register as good & as a Townsfolk or Outsider, even if dead.",
      "night": "Show the Grimoire for as long as the Spy needs.",
      "team": "minion"
    },
    {
      "name": "Baron",
      "ability": "There are extra Outsiders in play. [+2 Outsiders]",
      "night": "",
      "team": "minion"
    },
    {
      "name": "Scarlet Woman",
      "ability": "If there are 5 or more players alive & the Demon dies, you become the Demon. (Travellers don't count.)",
      "night": "If the Scarlet Woman became the Impo today, show them the YOU ARE token, then the Imp token.",
      "team": "minion"
    },
    {
      "name": "Imp",
      "ability": "Each night*, choose a player: they die. If you kill yourself this way, a Minion becomes the Imp.",
      "night": "The Imp chooses a player. If the Imp chose themselves: Replace 1 alive Minion token with a spare Imp token. Put the old Imp to sleep. Wake the new Imp. Show the YOU ARE token, then show the Imp token.",
      "team": "demon"
    }
  ],
  "firstNight": [
    "Dusk",
    "Minion Info",
    "Demon Info",
    {
      "name": "Poisoner",
      "ability": "Each night, choose a player: they are poisoned tonight and tomorrow day.",
      "night": "The Poisoner chooses a player.",
      "team": "minion"
    },
    {
      "name": "Spy",
      "ability": "Each night, you see the Grimoire. You might register as good & as a Townsfolk or Outsider, even if dead.",
      "night": "Show the Grimoire for as long as the Spy needs.",
      "team": "minion"
    },
    {
      "name": "Washerwoman",
      "ability": "You start knowing that 1 of 2 players is a particular Townsfolk.",
      "night": "Show the townsfolk character token. Point to both the TOWNSFOLK and WRONG players.",
      "team": "townsfolk"
    },
    {
      "name": "Librarian",
      "ability": "You start knowing that 1 of 2 players is a particular Outsider.(Or that zero are in play.)",
      "night": "Show the Outsider character token. Point to both the OUTSIDER and WRONG players.",
      "team": "townsfolk"
    },
    {
      "name": "Investigator",
      "ability": "You start knowing that 1 of 2 players is a particular Minion.",
      "night": "Show the Minion character token. Point to both the TOWNSFOLK and WRONG players.",
      "team": "townsfolk"
    },
    {
      "name": "Chef",
      "ability": "You start knowing how many pairs of evil players there are.",
      "night": "Give a finger signal.",
      "team": "townsfolk"
    },
    {
      "name": "Empath",
      "ability": "Each night, you learn how many of your 2 alive neighbors are evil.",
      "night": "Give a finger signal.",
      "team": "townsfolk"
    },
    {
      "name": "Fortune Teller",
      "ability": "Each night, choose 2 players: you learn if either is a Demon. There is a good player that registers as a Demon to you",
      "night": "The Fortune Teller chooses 2 players. Nod if either is the Demon (or the RED HERRING).",
      "team": "townsfolk"
    },
    {
      "name": "Butler",
      "ability": "Each night, choose a player (not yourself): tomorrow, you may only vote if they are voting too.",
      "night": "The Butler chooses a player.",
      "team": "outsider"
    },
    "Dawn"
  ],
  "otherNight": [
    "Dusk",
    {
      "name": "Poisoner",
      "ability": "Each night, choose a player: they are poisoned tonight and tomorrow day.",
      "night": "The Poisoner chooses a player.",
      "team": "minion"
    },
    {
      "name": "Monk",
      "ability": "Each night*, choose a player(not yourself): they are safe from the Demon tonight.",
      "night": "The Monk chooses a player.",
      "team": "townsfolk"
    },
    {
      "name": "Spy",
      "ability": "Each night, you see the Grimoire. You might register as good & as a Townsfolk or Outsider, even if dead.",
      "night": "Show the Grimoire for as long as the Spy needs.",
      "team": "minion"
    },
    {
      "name": "Scarlet Woman",
      "ability": "If there are 5 or more players alive & the Demon dies, you become the Demon. (Travellers don't count.)",
      "night": "If the Scarlet Woman became the Impo today, show them the YOU ARE token, then the Imp token.",
      "team": "minion"
    },
    {
      "name": "Imp",
      "ability": "Each night*, choose a player: they die. If you kill yourself this way, a Minion becomes the Imp.",
      "night": "The Imp chooses a player. If the Imp chose themselves: Replace 1 alive Minion token with a spare Imp token. Put the old Imp to sleep. Wake the new Imp. Show the YOU ARE token, then show the Imp token.",
      "team": "demon"
    },
    {
      "name": "Ravenkeeper",
      "ability": "If you die at night, you are woken to choose a player: you learn their character.",
      "night": "If the Ravenkeeper died tonight, the Ravenkeeper chooses a player. Show that player's character token.",
      "team": "townsfolk"
    },
    {
      "name": "Undertaker",
      "ability": "Each night*, you learn which character died by execution today.",
      "night": "If a player was executed today, show their character token.",
      "team": "townsfolk"
    },
    {
      "name": "Empath",
      "ability": "Each night, you learn how many of your 2 alive neighbors are evil.",
      "night": "Give a finger signal.",
      "team": "townsfolk"
    },
    {
      "name": "Fortune Teller",
      "ability": "Each night, choose 2 players: you learn if either is a Demon. There is a good player that registers as a Demon to you",
      "night": "The Fortune Teller chooses 2 players. Nod if either is the Demon (or the RED HERRING).",
      "team": "townsfolk"
    },
    {
      "name": "Butler",
      "ability": "Each night, choose a player (not yourself): tomorrow, you may only vote if they are voting too.",
      "night": "The Butler chooses a player.",
      "team": "outsider"
    },
    "Dawn"
  ]
}
