module.exports = (bot) => {

  bot.hear(/Hello!/, res => {
  return res.send('Hi there!')

  })

  bot.respond(/Whats your favorite food?/, res => {
    return res.send('I am a robot -- I do not eat food!')
  })

  bot.respond(/Hi Hubot! My name is (.*)/i, res => {
    // res.match is an array of matches
    console.log(res.match)

    const name = res.match[1]

    if (name === 'Whackbot'){
      return res.send('You are not Hubot -- I am Hubot!')
    } else {
      return res.reply(`Nice to meet you, ${name}!`)
    }
  })

  bot.respond(/add (.*) and (.*)/i, msg => {
    // parseInt() turns a string into an integer
    const a = parseInt(msg.match[1])
    const b = parseInt(msg.match[2])

    const sum = a + b

    return msg.reply(`${a} + ${b} = ${sum}`)
  })

  bot.respond(/What is your favorite (.*)\s?\?/, res => {
    const fav = res.match[1]

    console.log(fav)

    if (fav === 'food') {
      return res.reply('I am a robot--I do not eat food!')
    } else if (fav === 'band') {
      return res.reply('It is gotta be Daft Punk!')
    } else if (fav === 'programming language') {
      return res.reply('Javascript, of course!')
    } else {
      return res.reply(`I do not have a favorite ${fav}. What's yours?`)
    }
  })

    bot.respond(/Is it a (weekend|holiday)\s?\?/i, res => {
        const today = new Date()

          if (today.getDay() === 0 || today.getDay() === 6) {
            res.reply('Yes')
          } else {
            res.reply('No')
          }

    })

    bot.hear(/i did it/i, res => {
        res.send('Congratulations! Good job!')
    })

    bot.respond(/are you there?/i, res => {
        res.reply('Yes, usually here, and listening.')
    })

    bot.respond(/convert \$(.*) to btc/i, res => {
        const usd = res.match[1]
        res.reply(`That is about ${usd * 0.0024} in BTC`)

      })



	bot.hear(/What to eat in (.*)/i, res => {

    // take the data from user and save it into 'input'

    const input = res.match[1]

    // check if the input is a number

    const checkNum = isNaN(input)

    // dataset

		const eateries = [

		 	{
		    name: "Surly's American BBQ, Burgers & Beer",
        address: "182 Campbell St",
		    suburb: "Surry Hills",
        cuisine: "American",
		    postcode: "2010",
        googleMaps: "https://goo.gl/maps/TEZ8BxbxGxN2",
        description: "_For American burgers and stuff._"
		  },

		  {
		    name: "Kura",
        address: "3/76 Ultimo Rd",
		    suburb: "Haymarket",
		    cuisine: "Japanese",
		    postcode: "2000",
        googleMaps: "https://goo.gl/maps/qezJxAiiH8T2",
        description: "_Add a description to me!_"
		  },

      {
		    name: "Ramen Kan",
        address: "90 Hay St",
		    suburb: "Haymarket",
		    cuisine: "Japanese",
		    postcode: "2000",
        googleMaps: "https://goo.gl/maps/CaduXkYanwo",
        description: ""
		  },

      {
		    name: "Gumshara",
        address: "211/25-29 Dixon St",
		    suburb: "Haymarket",
		    cuisine: "Japanese",
		    postcode: "2000",
        googleMaps: "https://goo.gl/maps/Hkrn73Y5Rfs",
        description: "_Add a description to me!_"
		  },

      {
		    name: "Menya Noodle Bar",
        address: "2/1 Market St",
		    suburb: "Sydney",
		    cuisine: "Japanese",
		    postcode: "2000",
        googleMaps: "https://goo.gl/maps/ynaAYoN5ZXD2",
        description: "_Add a description to me!_"
		  },

      {
		    name: "Oiden Bowl Bar",
        address: "Shop 12, 537-551 George St",
		    suburb: "Sydney",
		    cuisine: "Japanese",
		    postcode: "2000",
        googleMaps: "https://goo.gl/maps/8gJHsZFAC3s",
        description: "_Add a description to me!_"
		  },

      {
		    name: "Mappen",
        address: "Shop 11, 537-551 George St",
		    suburb: "Sydney",
		    cuisine: "Japanese",
		    postcode: "2000",
        googleMaps: "https://goo.gl/maps/hZcPRdj3ZJt",
        description: "_Add a description to me!_"
		  },

      {
		    name: "Sushi Hotaru",
        address: "500 George St",
		    suburb: "Sydney",
		    cuisine: "Japanese",
		    postcode: "2000",
        googleMaps: "https://goo.gl/maps/RRE2NtP7Hxk",
        description: "_Add a description to me!_"
		  },

      {
		    name: "Ching Yip Coffee Lounge",
        address: "210/413 Sussex St",
		    suburb: "Haymarket",
		    cuisine: "Cantonese",
		    postcode: "2000",
        googleMaps: "https://goo.gl/maps/a7ER5Q1qvrx",
        description: "_Add a description to me!_"
		  },

      {
		    name: "Sun's Burmese Kitchen",
        address: "10 Tulloch St",
		    suburb: "Blacktown",
		    cuisine: "Burmese",
		    postcode: "2148",
        googleMaps: "https://goo.gl/maps/esLpq9BJntr",
        description: "_Cheap and tasty. Feel like I'm dining at someone's home._"
		  },

      {
		    name: "Hawa Charcoal Chicken",
        address: "43-45 South St",
		    suburb: "Granville",
		    cuisine: "BBQ Chicken",
		    postcode: "2142",
        googleMaps: "https://goo.gl/maps/YKbCijsPzPt",
        description: "_Vasty superior to El Jannah._"
		  },

      {
		    name: "Vinh Phat Chinese Seafood Restaurant",
        address: "12/10 Hughes St",
		    suburb: "Cabramatta",
		    cuisine: "Chinese",
		    postcode: "2166",
        googleMaps: "https://goo.gl/maps/o3C6nQZHpqC2",
        description: "_Quality yum cha for low price._"
		  },

      {
		    name: "Metro One Kebab Pizza and Pide",
        address: "309 Liverpool Rd",
		    suburb: "Ashfield",
		    cuisine: "Turkish",
		    postcode: "2131",
        googleMaps: "https://goo.gl/maps/pcMc9gQNZsL2",
        description: "_Best HSP in Sydney._"
		  },

      {
		    name: "Frangos Charcoal Chicken",
        address: "98 New Canterbury Rd",
		    suburb: "Petersham",
		    cuisine: "Portguese",
		    postcode: "2049",
        googleMaps: "https://goo.gl/maps/QKrsuRjt5Bq",
        description: "_Wonderfully cheap and tasty. Worth the wait._"
		  },

      {
		    name: "Shanghai Night Chinese Restaurant",
        address: "275 Liverpool Rd",
		    suburb: "Ashfield",
		    cuisine: "Chinese",
		    postcode: "2131",
        googleMaps: "https://goo.gl/maps/qyXXeP5BeYF2",
        description: "_Don't be confused by all the othe restaurants with similar names, this is one to go to._"
		  },

      {
		    name: "Pho Phd Vietnamese Restaurant",
        address: "260 Marrickville Rd",
		    suburb: "Marickville",
		    cuisine: "Vietnamese",
		    postcode: "2204",
        googleMaps: "https://goo.gl/maps/9uijFZU4tx62",
        description: "_Good broth that doesn't taste entirely like MSG._"
		  },

      {
		    name: "Mr Crackles",
        address: "155 Oxford St",
		    suburb: "Darlinghurst",
		    cuisine: "Sandwich",
		    postcode: "2010",
        googleMaps: "https://goo.gl/maps/16pH6eEEqcP2",
        description: "_So bad for you that it's good._"
		  },

      {
		    name: "The Yeeros Shop",
        address: "431 Illawarra Rd",
		    suburb: "Marickville",
		    cuisine: "Greek",
		    postcode: "2204",
        googleMaps: "https://goo.gl/maps/3iwn5LFDyc72",
        description: "_No nonsense, just big plates of meat, chips, tabouli and sauce._"
		  },
		]

    // If the input matches an of the object eatery.postcodes or suburbs, post this

      		function checkPostcode(eatery, input) {
      		    return eatery.postcode === input || eatery.suburb === input;
      		}

          // filter all the eateries with the checkPostcode() function

          const filteredEateries = eateries.filter((eatery) => checkPostcode(eatery,input))

          const eateryOutputs = filteredEateries.map(eatery =>
          `\n*${eatery.name}*\n*Address* | ${eatery.address}, ${eatery.suburb}\n*Cuisine* | ${eatery.cuisine}\n*Description* | ${eatery.description}\n*Google Maps* | ${eatery.googleMaps}`)

          const eateryList = `In ${input}, there is:\n` + eateryOutputs.join('\n')


          // if (eatery.postcode === input || eatery.suburb === input){
             res.send(eateryList)
          // }
          // else {
          //   res.send("Soz breh, no match.")
          // }


    // if there are no eateries for searched postcode, say "Sorry no entries. Would you like to submit one?" or "Try [closest suburbs]"

    // || <- or

    // add pricing (emoticon?)

    // suburbs AND/OR postcode

    // add entries (push()?), syntax for adding new eateries, add objects to the array

    // images of the restaurant?

    // add extra descriptions for certain eateries

    // tick/untick visited eateries

    // list all eateries so you can see what has been added

    // search for an eatery - using keyword or - list alphabetically

    // list by cuisine - list all cuisines

    // Randomise! - give me a random Eatery in Sydney or a suburb

    // Advanced - Ordered list by distance to you - show metres/kilometres to
        // Get street location - calculate closest - send back information

});

	bot.hear(/Insult me (.*)/i, res => {

        const input = res.match[1]


// Insultbot
// based on a list of random and not random words, the bot will provide you insults based on your input
// insult in shakespearian

if(input === "Shakespeare"){

  const verbs = [ "agatering", "leathern-jerkin", "rooting", "starvelling", "licking", "pooping", "scooping", "lying"]
  const nouns = [ "deformity", "tallow-catch", "plague-sore", "loon", "whoreson", "boil", "flesh-monger", "villian", "coward", "promise-breaker", "elf-skin", "neat’s-tongue", "bull’s-pizzle", "fool", "stock-fish", "worm", "boy", "monster", "hobby-horse", "guts", "toad", "prune", "beast", "sack", "Manningtree-ox", "vice", "iniquity", "ruffian", "vanity" ]
  const adjectives =  [ "elvish-mark’d", "abortive", "knotty-pated", "damned", "greasy", "obscene", "mountain-goat", "clay-brained", "cream-faced", "unfit", "loathsome", "fat", "foul", "notable", "endless", "hourly", "bald", "three-inch", "froward", "unable", "thick", "pigeon-liver’d", "dried", "lily-liver'd", "sick", "infected", "poisonous", "bunch-backed", "rank", "smell", "sour", "stewed", "backward", "grey", "father", "reverend", "bombard"]

  const verb = verbs[Math.floor(Math.random() * verbs.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];

  res.send(`Thou ${adjective} ${verb} ${noun}!`)

}

else if(input === "Pirate"){

  const verbs = [ "Swab the deck", "Dance with Jack Ketch", "We’ll hang ye by the gibbet", "I’ll plunder yer coffer", "Enough with yer bilge", "Ye’ll meet the rope’s end for that", "I’ll reduce yer ship to rubble", "We’ll keelhaul ya", "Dead men tell no tales", "I’ll feed thee to the sharks"]
  const nouns = [ "scurvy dog", "swine", "privateer", "scoundrel", "blowfish", "hog’s head", "salty swab", "parrot", "sorry sea dog", "kraken"]
  const adjectives =  [ "ye lily-livered", "ye pox faced", "ye grog-snarfing", "ye parrot loving", "ye scurvy infested", "ye yellow bellied", "ye mutinous", "ye hook handed", "ye one-eyed bow-legged", "ye lice infested"]

  const verb = verbs[Math.floor(Math.random() * verbs.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];

  res.send(`${verb} ${adjective} ${noun}!`)
}

else if(input === "Millennial"){
  res.send(`Working on in Millennial`)
}

else{
  res.send("Sorry you need to tell me to insult you properly, like this:\n'Insult me [Shakespeare | Pirate | Millennial]'")
}


	});
}

// insult in pirate
// add a random emoji at the end
// stack of ten insults
// send random insults to friends
