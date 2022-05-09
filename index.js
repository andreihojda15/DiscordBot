const { Client, Intents } = require('discord.js');
const dotenv = require('dotenv');
dotenv.config();

// Create a new client instance
const client = new Client({
    intents: [Intents.FLAGS.GUILDS]
});

// when the client is ready, run this code, only once
client.once('ready', () => {
    console.log('ready!');
});

client.login(process.env.BOT_TOKEN);