const Eris = require("eris");
const keep_alive = require('./keep_alive.js') // node js


// Replace TOKEN with your bot account's token
const bot = new Eris(process.env.token, {
    intents: [
        "guildMessages"
    ]
});

bot.on("ready", () => { // When the bot is ready
    console.log("Ready!"); // Log "Ready!"
    bot.editStatus('Dnd', {name: 'Codes Drops Family & Support', type: 3, url: 'https://www.youtube.com/@GuntherSuper'})
});

// bot.on("ready", () => {
//   bot.editStatus("The only Gunther account. Be aware!");
//   console.log('ready')
// });

bot.on("error", (err) => {
  console.error(err); // or your preferred logger
});



bot.connect(); // Get the bot to connect to Discord
