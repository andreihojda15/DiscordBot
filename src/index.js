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

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    if (commandName === 'ping') {
        await interaction.reply('Pong!');
    } else if (commandName === 'server') {
        await interaction.reply(`${interaction.guild.name} discord server has ${interaction.guild.memberCount} members!`);
    } else if (commandName === 'user') {
        await interaction.reply(`Your tag is ${interaction.user.tag} and your ID is ${interaction.user.id}`);
    }
});

client.login(process.env.BOT_TOKEN);
