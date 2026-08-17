const sectsAndVioletsData = {
  "name": "Sects & Violets",
  "roles": [
    {
      "name": "Clockmaker",
      "ability": "You start knowing how many steps from the Demon to its nearest Minion.",
      "night": "Give a finger signal.",
      "team": "townsfolk"
    },
    {
      "name": "Dreamer",
      "ability": "Each night, choose a player (not yourself or Travellers): you learn 1 good & 1 evil character, 1 of which is correct.",
      "night": "The Dreamer points to a player. Show 1 good & 1 evil character token, 1 of which is their character.",
      "team": "townsfolk"
    },
    {
      "name": "Snake Charmer",
      "ability": "Each night, choose an alive player: a chosen Demon swaps characters & alignments with you & is then poisoned.",
      "team": "townsfolk",
      "night": "The Snake Charmer chooses a player. If they chose the Demon: Show the YOU ARE & Demon tokens. Give a thumbs down. Swap the Snake Charmer & Demon tokens. Put the old Snake Charmer to sleep. Wake the old Demon. Show the YOU ARE and Snake Charmer tokens & give a thumbs up."
    },
    {
      "name": "Mathematician",
      "ability": "Each night, you learn how many players' abilities worked abnormally (since dawn) due to another character's ability.",
      "night": "Give a finger signal.",
      "team": "townsfolk"
    },
    {
      "name": "Flowergirl",
      "ability": "Each night*, you learn if a Demon voted today.",
      "night": "Either nod or shake your head.",
      "team": "townsfolk"
    },
    {
      "name": "Town Crier",
      "ability": "Each night*, you learn if a Minion nominated today.",
      "night": "Either nod or shake your head.",
      "team": "townsfolk"
    },
    {
      "name": "Oracle",
      "ability": "Each night*, you learn how many dead players are evil.",
      "night": "Give a finger signal.",
      "team": "townsfolk"
    },
    {
      "name": "Savant",
      "ability": "Each day, you may visit the Storyteller to learn 2 things in private: 1 is true & 1 is false.",
      "team": "townsfolk"
    },
    {
      "name": "Seamstress",
      "ability": "Once per game, at night, choose 2 players (not yourself): you learn if they are the same alignment.",
      "night": "The Seamstress might choose 2 players. Nod or shake your head.",
      "team": "townsfolk"
    },
    {
      "name": "Philosopher",
      "ability": "Once per game, at night, choose a good character: gain that ability. If this character is in play, they are drunk.",
      "team": "townsfolk",
      "night": "The Philosopher might choose a character. If necessary, swap their character token."
    },
    {
      "name": "Artist",
      "ability": "Once per game, during the day, privately ask the Storyteller any yes/no question.",
      "team": "townsfolk"
    },
    {
      "name": "Juggler",
      "ability": "On your 1st day, publicly guess up to 5 players' characters. That night, you learn how many you got correct.",
      "night": "Give a finger signal.",
      "team": "townsfolk"
    },
    {
      "name": "Sage",
      "ability": "If the Demon kills you, you learn that it is 1 of 2 players.",
      "night": "If the Demon killed the Sage, wake the Sage and point to 2 players, 1 of which is the Demon.",
      "team": "townsfolk"
    },
    {
      "name": "Mutant",
      "ability": "If you are \"mad\" about being an Outsider, you might be executed.",
      "team": "outsider"
    },
    {
      "name": "Barber",
      "ability": "If you died today or tonight, the Demon may choose 2 players (not another Demon) to swap characters.",
      "night": "If the Barber died today or tonight, show the Demon the THIS CHARACTER SELECTED YOU & Barber tokens. If the Demon chose 2 players, wake one at a time. Show the YOU ARE token & their new character token.",
      "team": "outsider"
    },
    {
      "name": "Sweetheart",
      "ability": "When you die, 1 player is drunk from now on.",
      "night": "If the Sweetheart died, a player became drunk immediately. If you haven't done this yet, do so now.",
      "team": "outsider"
    },
    {
      "name": "Klutz",
      "ability": "When you learn that you died, publicly choose 1 alive player: if they are evil, your team loses.",
      "team": "outsider"
    },
    {
      "name": "Witch",
      "ability": "Each night, choose a player: if they nominate tomorrow, they die. If just 3 players live, you lose this ability.",
      "team": "minion",
      "night": "The Witch chooses a player."
    },
    {
      "name": "Cerenovus",
      "ability": "Each night, choose a player & a good character: they are \"mad\" they are this character tomorrow, or might be executed.",
      "team": "minion",
      "night": "The Cerenovus chooses a player & a character. Put the Cerenovus to sleep. Wake the target. Show the THIS CHARACTER SELECTED YOU token, the Cerenovus token, then the madness-character token."
    },
    {
      "name": "Pit-Hag",
      "ability": "Each night*, choose a player & a character they become (if not in play). If a Demon is made, deaths tonight are arbitrary.",
      "night": "The Pit-Hag chooses a player & a character. If they chose a character that is not in play: Put the Pit-Hag to sleep. Wake the target. Show the YOU ARE token & their new character token.",
      "team": "minion"
    },
    {
      "name": "Evil Twin",
      "ability": "You & an opposing player know each other. If the good player is executed, evil wins. Good can't win if you both live.",
      "team": "minion",
      "night": "Wake both twins. Allow eye contact. Show the good twin's character token to the Evil Twin & vice versa."
    },
    {
      "name": "Fang Gu",
      "ability": "Each night*, choose a player: they die. The 1st Outsider this kills becomes an evil Fang Gu & you die instead. [+1 Outsider]",
      "night": "The Fang Gu chooses a player. If they chose an Outsider (once only): Replace the Outsider token with the spare Fang Gu token. Put the Fang Gu to sleep. Wake the target. Show the YOU ARE and Fang Gu tokens & give a thumbs-down.",
      "team": "demon"
    },
    {
      "name": "Vigormortis",
      "ability": "Each night*, choose a player: they die. Minions you kill keep their ability & poison 1 Townsfolk neighbor. [-1 Outsider]",
      "night": "The Vigormortis chooses a player. If that player is a Minion, poison neighboring Townsfolk.",
      "team": "demon"
    },
    {
      "name": "No Dashii",
      "ability": "Each night*, choose a player: they die. Your 2 Townsfolk neighbors are poisoned.",
      "night": "The No Dashii chooses a player.",
      "team": "demon"
    },
    {
      "name": "Vortox",
      "ability": "Each night*, choose a player: they die. Townsfolk abilities yield false info. Each day, if no-one is executed, evil wins.",
      "night": "The Vortox chooses a player.",
      "team": "demon"
    }
  ],
  "firstNight": [
    "Dusk",
    "Minion Info",
    "Demon Info",
    {
      "name": "Philosopher",
      "ability": "Once per game, at night, choose a good character: gain that ability. If this character is in play, they are drunk.",
      "team": "townsfolk",
      "night": "The Philosopher might choose a character. If necessary, swap their character token."
    },
    {
      "name": "Snake Charmer",
      "ability": "Each night, choose an alive player: a chosen Demon swaps characters & alignments with you & is then poisoned.",
      "team": "townsfolk",
      "night": "The Snake Charmer chooses a player. If they chose the Demon: Show the YOU ARE & Demon tokens. Give a thumbs down. Swap the Snake Charmer & Demon tokens. Put the old Snake Charmer to sleep. Wake the old Demon. Show the YOU ARE and Snake Charmer tokens & give a thumbs up."
    },
    {
      "name": "Evil Twin",
      "ability": "You & an opposing player know each other. If the good player is executed, evil wins. Good can't win if you both live.",
      "team": "minion",
      "night": "Wake both twins. Allow eye contact. Show the good twin's character token to the Evil Twin & vice versa."
    },
    {
      "name": "Witch",
      "ability": "Each night, choose a player: if they nominate tomorrow, they die. If just 3 players live, you lose this ability.",
      "team": "minion",
      "night": "The Witch chooses a player."
    },
    {
      "name": "Cerenovus",
      "ability": "Each night, choose a player & a good character: they are \"mad\" they are this character tomorrow, or might be executed.",
      "team": "minion",
      "night": "The Cerenovus chooses a player & a character. Put the Cerenovus to sleep. Wake the target. Show the THIS CHARACTER SELECTED YOU token, the Cerenovus token, then the madness-character token."
    },
    {
      "name": "Clockmaker",
      "ability": "You start knowing how many steps from the Demon to its nearest Minion.",
      "night": "Give a finger signal.",
      "team": "townsfolk"
    },
    {
      "name": "Dreamer",
      "ability": "Each night, choose a player (not yourself or Travellers): you learn 1 good & 1 evil character, 1 of which is correct.",
      "night": "The Dreamer points to a player. Show 1 good & 1 evil character token, 1 of which is their character.",
      "team": "townsfolk"
    },
    {
      "name": "Seamstress",
      "ability": "Once per game, at night, choose 2 players (not yourself): you learn if they are the same alignment.",
      "night": "The Seamstress might choose 2 players. Nod or shake your head.",
      "team": "townsfolk"
    },
    {
      "name": "Mathematician",
      "ability": "Each night, you learn how many players' abilities worked abnormally (since dawn) due to another character's ability.",
      "night": "Give a finger signal.",
      "team": "townsfolk"
    },
    "Dawn"
  ],
  "otherNight": [
    "Dusk",
    {
      "name": "Philosopher",
      "ability": "Once per game, at night, choose a good character: gain that ability. If this character is in play, they are drunk.",
      "team": "townsfolk",
      "night": "The Philosopher might choose a character. If necessary, swap their character token."
    },
    {
      "name": "Snake Charmer",
      "ability": "Each night, choose an alive player: a chosen Demon swaps characters & alignments with you & is then poisoned.",
      "team": "townsfolk",
      "night": "The Snake Charmer chooses a player. If they chose the Demon: Show the YOU ARE & Demon tokens. Give a thumbs down. Swap the Snake Charmer & Demon tokens. Put the old Snake Charmer to sleep. Wake the old Demon. Show the YOU ARE and Snake Charmer tokens & give a thumbs up."
    },
    {
      "name": "Witch",
      "ability": "Each night, choose a player: if they nominate tomorrow, they die. If just 3 players live, you lose this ability.",
      "team": "minion",
      "night": "The Witch chooses a player."
    },
    {
      "name": "Cerenovus",
      "ability": "Each night, choose a player & a good character: they are \"mad\" they are this character tomorrow, or might be executed.",
      "team": "minion",
      "night": "The Cerenovus chooses a player & a character. Put the Cerenovus to sleep. Wake the target. Show the THIS CHARACTER SELECTED YOU token, the Cerenovus token, then the madness-character token."
    },
    {
      "name": "Pit-Hag",
      "ability": "Each night*, choose a player & a character they become (if not in play). If a Demon is made, deaths tonight are arbitrary.",
      "night": "The Pit-Hag chooses a player & a character. If they chose a character that is not in play: Put the Pit-Hag to sleep. Wake the target. Show the YOU ARE token & their new character token.",
      "team": "minion"
    },
    {
      "name": "Fang Gu",
      "ability": "Each night*, choose a player: they die. The 1st Outsider this kills becomes an evil Fang Gu & you die instead. [+1 Outsider]",
      "night": "The Fang Gu chooses a player. If they chose an Outsider (once only): Replace the Outsider token with the spare Fang Gu token. Put the Fang Gu to sleep. Wake the target. Show the YOU ARE and Fang Gu tokens & give a thumbs-down.",
      "team": "demon"
    },
    {
      "name": "Vigormortis",
      "ability": "Each night*, choose a player: they die. Minions you kill keep their ability & poison 1 Townsfolk neighbor. [-1 Outsider]",
      "night": "The Vigormortis chooses a player. If that player is a Minion, poison neighboring Townsfolk.",
      "team": "demon"
    },
    {
      "name": "No Dashii",
      "ability": "Each night*, choose a player: they die. Your 2 Townsfolk neighbors are poisoned.",
      "night": "The No Dashii chooses a player.",
      "team": "demon"
    },
    {
      "name": "Vortox",
      "ability": "Each night*, choose a player: they die. Townsfolk abilities yield false info. Each day, if no-one is executed, evil wins.",
      "night": "The Vortox chooses a player.",
      "team": "demon"
    },
    {
      "name": "Barber",
      "ability": "If you died today or tonight, the Demon may choose 2 players (not another Demon) to swap characters.",
      "night": "If the Barber died today or tonight, show the Demon the THIS CHARACTER SELECTED YOU & Barber tokens. If the Demon chose 2 players, wake one at a time. Show the YOU ARE token & their new character token.",
      "team": "outsider"
    },
    {
      "name": "Sweetheart",
      "ability": "When you die, 1 player is drunk from now on.",
      "night": "If the Sweetheart died, a player became drunk immediately. If you haven't done this yet, do so now.",
      "team": "outsider"
    },
    {
      "name": "Sage",
      "ability": "If the Demon kills you, you learn that it is 1 of 2 players.",
      "night": "If the Demon killed the Sage, wake the Sage and point to 2 players, 1 of which is the Demon.",
      "team": "townsfolk"
    },
    {
      "name": "Dreamer",
      "ability": "Each night, choose a player (not yourself or Travellers): you learn 1 good & 1 evil character, 1 of which is correct.",
      "night": "The Dreamer points to a player. Show 1 good & 1 evil character token, 1 of which is their character.",
      "team": "townsfolk"
    },
    {
      "name": "Flowergirl",
      "ability": "Each night*, you learn if a Demon voted today.",
      "night": "Either nod or shake your head.",
      "team": "townsfolk"
    },
    {
      "name": "Town Crier",
      "ability": "Each night*, you learn if a Minion nominated today.",
      "night": "Either nod or shake your head.",
      "team": "townsfolk"
    },
    {
      "name": "Oracle",
      "ability": "Each night*, you learn how many dead players are evil.",
      "night": "Give a finger signal.",
      "team": "townsfolk"
    },
    {
      "name": "Seamstress",
      "ability": "Once per game, at night, choose 2 players (not yourself): you learn if they are the same alignment.",
      "night": "The Seamstress might choose 2 players. Nod or shake your head.",
      "team": "townsfolk"
    },
    {
      "name": "Juggler",
      "ability": "On your 1st day, publicly guess up to 5 players' characters. That night, you learn how many you got correct.",
      "night": "Give a finger signal.",
      "team": "townsfolk"
    },
    {
      "name": "Mathematician",
      "ability": "Each night, you learn how many players' abilities worked abnormally (since dawn) due to another character's ability.",
      "night": "Give a finger signal.",
      "team": "townsfolk"
    },
    "Dawn"
  ]
}
