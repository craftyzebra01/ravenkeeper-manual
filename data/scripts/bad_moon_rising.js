const badMoonRisingData = {
  "name": "Bad Moon Rising",
  "roles": [
    {
      "name": "Grandmother",
      "ability": "You start knowing a good player & their character. If the Demon kills them, you die too.",
      "firstNight": "Point to the grandchild player & show their character token.",
      "otherNight": "If the grandchild was killed by the Demon, the Grandmother dies too.",
      "team": "townsfolk"
    },
    {
      "name": "Sailor",
      "ability": "Each night, choose an alive player: either you or they are drunk until dusk. You can't die.",
      "night": "The Sailor chooses a living palyer.",
      "team": "townsfolk"
    },
    {
      "name": "Chambermaid",
      "ability": "Each night, choose 2 alive players (not yourself): you learn how many woke tonight due to their ability.",
      "night": "The Chambermaid chooses 2 living players. Give a finger signal.",
      "team": "townsfolk"
    },
    {
      "name": "Exorcist",
      "ability": "Each night*, choose a player (different to last night): the Demon, if chosen, learns who you are then doesn't wake tonight.",
      "night": "The Exorcist chooses a player. Put the Exorcist to sleep. If the Exorcist chose the Demon: Wake the Demon. Show the THIS CHARACTER SELECTED YOU & Exorcist tokens. Point to the Exorcist.",
      "team": "townsfolk"
    },
    {
      "name": "Innkeeper",
      "ability": "Each night*, choose 2 players: they can't die tonight, but 1 is drunk until dusk.",
      "night": "The Innkeeper chooses 2 players.",
      "team": "townsfolk"
    },
    {
      "name": "Gambler",
      "ability": "Each night*, choose a player & guess their character: if you guess wrong, you die.",
      "night": "The Gambler chooses a player & a character.",
      "team": "townsfolk"
    },
    {
      "name": "Gossip",
      "ability": "Each day, you may make a public statement. Tonight, if it was true, a player dies.",
      "night": "If the Gossip is due to kill a player, they die.",
      "team": "townsfolk"
    },
    {
      "name": "Courtier",
      "ability": "Once per game, at night, choose a character: they are drunk for 3 nights & 3 days.",
      "night": "The Courtier might choose a character.",
      "team": "townsfolk"
    },
    {
      "name": "Professor",
      "ability": "Once per game, at night*, choose a dead player: if they are a Townsfolk, they are resurrected.",
      "night": "The Professor might choose a dead player.",
      "team": "townsfolk"
    },
    {
      "name": "Minstrel",
      "ability": "When a Minion dies by execution, all other players (except Travellers) are drunk until dusk tomorrow.",
      "night": "",
      "team": "townsfolk"
    },
    {
      "name": "Tea Lady",
      "ability": "If both your alive neighbors are good, they can't die.",
      "night": "",
      "team": "townsfolk"
    },
    {
      "name": "Pacifist",
      "ability": "Executed good players might not die.",
      "night": "",
      "team": "townsfolk"
    },
    {
      "name": "Fool",
      "ability": "The 1st time you die, you don't.",
      "night": "",
      "team": "townsfolk"
    },
    {
      "name": "Goon",
      "ability": "Each night, the 1st player to choose you with their ability is drunk until dusk. You become their alignment.",
      "night": "",
      "team": "outsider"
    },
    {
      "name": "Lunatic",
      "ability": "you think you are a Demon, but you are not. The Demon knows who you are & who you choose at night.",
      "firstNight": "If there are 7 or more players, wake the Lunatic: Show the THESE ARE YOUR MINIONS token. Point to any players. Show the THESE CHARACTERS ARE NOT IN PLAY token. Show 3 good character tokens. Put the Lunatic to sleep. Wake the Demon. Show the YOU ARE info token and the Demon token. Show the THIS PLAYER IS info token and the Lunatic token, then point to the Lunatic.",
      "otherNight": "Do whatever needs to be done to simulate the Demon acting. Put the Lunatic to sleep. Wake the Demon. Show the Lunatic token & point to them, then their target(s).",
      "team": "outsider"
    },
    {
      "name": "Tinker",
      "ability": "You might die at any time.",
      "night": "The Tinker might die.",
      "team": "outsider"
    },
    {
      "name": "Moonchild",
      "ability": "When you learn that you died, publicly choose 1 alive player. Tonight, if it was a good player, they die.",
      "night": "If the Moonchild is due to kill a good player, they die.",
      "team": "outsider"
    },
    {
      "name": "Godfather",
      "ability": "You start knowing which Outsiders are in play. If 1 died today, choose a player tonight: they die. [-1 or +1 Outsider]",
      "firstNight": "Show the character tokens of all in-play Outsiders.",
      "otherNight": "If an Outsider died today, the Godfather chooses a player.",
      "team": "minion"
    },
    {
      "name": "Devil's Advocate",
      "ability": "Each night, choose a living player (different to last night): if executed tomorrow, they don't die.",
      "night": "The Devil's Advocate chooses a living player.",
      "team": "minion"
    },
    {
      "name": "Assassin",
      "ability": "Once per game, at night*, choose a player: they die, even if for some reason they could not.",
      "night": "The Assassin might choose a player.",
      "team": "minion"
    },
    {
      "name": "Mastermind",
      "ability": "If the Demon dies by execution (ending the game), player for 1 more day. If a player is then executed, their team loses.",
      "night": "",
      "team": "minion"
    },
    {
      "name": "Zombuul",
      "ability": "Each night*, if no-one died today, choose a player: they die. The 1st time you die, you live but register as dead.",
      "night": "If no one died today, the Zombuul chooses a player.",
      "team": "demon"
    },
    {
      "name": "Pukka",
      "ability": "Each night, choose a player: they are poisoned. The previously poisoned player dies then becomes healthy.",
      "firstNight": "The Pukka chooses a player.",
      "otherNight": "The Pukka chooses a player. The previously poisoned player dies then becomes healthy.",
      "team": "demon"
    },
    {
      "name": "Shabaloth",
      "ability": "Each night*, choose 2 players: they die. A dead player you chose last night might be regurgitated.",
      "night": "A previously chosen player mightbe resurrected. The Shabaloth chooses 2 players.",
      "team": "demon"
    },
    {
      "name": "Po",
      "ability": "Each night*, you may choose a player: they die. If your last choice was no-one, choose 3 players tonight.",
      "night": "The Po may choose a player OR chooses 3 players if they chose no-one last night.",
      "team": "demon"
    }
  ],
  "firstNight": [
    "Dusk",
    "Minion Info",
    {
      "name": "Lunatic",
      "ability": "you think you are a Demon, but you are not. The Demon knows who you are & who you choose at night.",
      "firstNight": "If there are 7 or more players, wake the Lunatic: Show the THESE ARE YOUR MINIONS token. Point to any players. Show the THESE CHARACTERS ARE NOT IN PLAY token. Show 3 good character tokens. Put the Lunatic to sleep. Wake the Demon. Show the YOU ARE info token and the Demon token. Show the THIS PLAYER IS info token and the Lunatic token, then point to the Lunatic.",
      "otherNight": "Do whatever needs to be done to simulate the Demon acting. Put the Lunatic to sleep. Wake the Demon. Show the Lunatic token & point to them, then their target(s).",
      "team": "outsider"
    },
    "Demon Info",
    {
      "name": "Sailor",
      "ability": "Each night, choose an alive player: either you or they are drunk until dusk. You can't die.",
      "night": "The Sailor chooses a living palyer.",
      "team": "townsfolk"
    },
    {
      "name": "Courtier",
      "ability": "Once per game, at night, choose a character: they are drunk for 3 nights & 3 days.",
      "night": "The Courtier might choose a character.",
      "team": "townsfolk"
    },
    {
      "name": "Godfather",
      "ability": "You start knowing which Outsiders are in play. If 1 died today, choose a player tonight: they die. [-1 or +1 Outsider]",
      "firstNight": "Show the character tokens of all in-play Outsiders.",
      "otherNight": "If an Outsider died today, the Godfather chooses a player.",
      "team": "minion"
    },
    {
      "name": "Devil's Advocate",
      "ability": "Each night, choose a living player (different to last night): if executed tomorrow, they don't die.",
      "night": "The Devil's Advocate chooses a living player.",
      "team": "minion"
    },
    {
      "name": "Pukka",
      "ability": "Each night, choose a player: they are poisoned. The previously poisoned player dies then becomes healthy.",
      "firstNight": "The Pukka chooses a player.",
      "otherNight": "The Pukka chooses a player. The previously poisoned player dies then becomes healthy.",
      "team": "demon"
    },
    {
      "name": "Grandmother",
      "ability": "You start knowing a good player & their character. If the Demon kills them, you die too.",
      "firstNight": "Point to the grandchild player & show their character token.",
      "otherNight": "If the grandchild was killed by the Demon, the Grandmother dies too.",
      "team": "townsfolk"
    },
    {
      "name": "Chambermaid",
      "ability": "Each night, choose 2 alive players (not yourself): you learn how many woke tonight due to their ability.",
      "night": "The Chambermaid chooses 2 living players. Give a finger signal.",
      "team": "townsfolk"
    },
    "Dawn"
  ],
  "otherNight": [
    "Dusk",
    {
      "name": "Sailor",
      "ability": "Each night, choose an alive player: either you or they are drunk until dusk. You can't die.",
      "night": "The Sailor chooses a living palyer.",
      "team": "townsfolk"
    },
    {
      "name": "Innkeeper",
      "ability": "Each night*, choose 2 players: they can't die tonight, but 1 is drunk until dusk.",
      "night": "The Innkeeper chooses 2 players.",
      "team": "townsfolk"
    },
    {
      "name": "Courtier",
      "ability": "Once per game, at night, choose a character: they are drunk for 3 nights & 3 days.",
      "night": "The Courtier might choose a character.",
      "team": "townsfolk"
    },
    {
      "name": "Gambler",
      "ability": "Each night*, choose a player & guess their character: if you guess wrong, you die.",
      "night": "The Gambler chooses a player & a character.",
      "team": "townsfolk"
    },
    {
      "name": "Devil's Advocate",
      "ability": "Each night, choose a living player (different to last night): if executed tomorrow, they don't die.",
      "night": "The Devil's Advocate chooses a living player.",
      "team": "minion"
    },
    {
      "name": "Lunatic",
      "ability": "you think you are a Demon, but you are not. The Demon knows who you are & who you choose at night.",
      "firstNight": "If there are 7 or more players, wake the Lunatic: Show the THESE ARE YOUR MINIONS token. Point to any players. Show the THESE CHARACTERS ARE NOT IN PLAY token. Show 3 good character tokens. Put the Lunatic to sleep. Wake the Demon. Show the YOU ARE info token and the Demon token. Show the THIS PLAYER IS info token and the Lunatic token, then point to the Lunatic.",
      "otherNight": "Do whatever needs to be done to simulate the Demon acting. Put the Lunatic to sleep. Wake the Demon. Show the Lunatic token & point to them, then their target(s).",
      "team": "outsider"
    },
    {
      "name": "Exorcist",
      "ability": "Each night*, choose a player (different to last night): the Demon, if chosen, learns who you are then doesn't wake tonight.",
      "night": "The Exorcist chooses a player. Put the Exorcist to sleep. If the Exorcist chose the Demon: Wake the Demon. Show the THIS CHARACTER SELECTED YOU & Exorcist tokens. Point to the Exorcist.",
      "team": "townsfolk"
    },
    {
      "name": "Zombuul",
      "ability": "Each night*, if no-one died today, choose a player: they die. The 1st time you die, you live but register as dead.",
      "night": "If no one died today, the Zombuul chooses a player.",
      "team": "demon"
    },
    {
      "name": "Pukka",
      "ability": "Each night, choose a player: they are poisoned. The previously poisoned player dies then becomes healthy.",
      "firstNight": "The Pukka chooses a player.",
      "otherNight": "The Pukka chooses a player. The previously poisoned player dies then becomes healthy.",
      "team": "demon"
    },
    {
      "name": "Shabaloth",
      "ability": "Each night*, choose 2 players: they die. A dead player you chose last night might be regurgitated.",
      "night": "A previously chosen player mightbe resurrected. The Shabaloth chooses 2 players.",
      "team": "demon"
    },
    {
      "name": "Po",
      "ability": "Each night*, you may choose a player: they die. If your last choice was no-one, choose 3 players tonight.",
      "night": "The Po may choose a player OR chooses 3 players if they chose no-one last night.",
      "team": "demon"
    },
    {
      "name": "Assassin",
      "ability": "Once per game, at night*, choose a player: they die, even if for some reason they could not.",
      "night": "The Assassin might choose a player.",
      "team": "minion"
    },
    {
      "name": "Godfather",
      "ability": "You start knowing which Outsiders are in play. If 1 died today, choose a player tonight: they die. [-1 or +1 Outsider]",
      "firstNight": "Show the character tokens of all in-play Outsiders.",
      "otherNight": "If an Outsider died today, the Godfather chooses a player.",
      "team": "minion"
    },
    {
      "name": "Professor",
      "ability": "Once per game, at night*, choose a dead player: if they are a Townsfolk, they are resurrected.",
      "night": "The Professor might choose a dead player.",
      "team": "townsfolk"
    },
    {
      "name": "Gossip",
      "ability": "Each day, you may make a public statement. Tonight, if it was true, a player dies.",
      "night": "If the Gossip is due to kill a player, they die.",
      "team": "townsfolk"
    },
    {
      "name": "Tinker",
      "ability": "You might die at any time.",
      "night": "The Tinker might die.",
      "team": "outsider"
    },
    {
      "name": "Moonchild",
      "ability": "When you learn that you died, publicly choose 1 alive player. Tonight, if it was a good player, they die.",
      "night": "If the Moonchild is due to kill a good player, they die.",
      "team": "outsider"
    },
    {
      "name": "Grandmother",
      "ability": "You start knowing a good player & their character. If the Demon kills them, you die too.",
      "firstNight": "Point to the grandchild player & show their character token.",
      "otherNight": "If the grandchild was killed by the Demon, the Grandmother dies too.",
      "team": "townsfolk"
    },
    {
      "name": "Chambermaid",
      "ability": "Each night, choose 2 alive players (not yourself): you learn how many woke tonight due to their ability.",
      "night": "The Chambermaid chooses 2 living players. Give a finger signal.",
      "team": "townsfolk"
    },
    "Dawn"
  ]
}
