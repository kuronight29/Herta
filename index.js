const { Client } = require('discord.js-selfbot-v13');
const { token } = require('./config.json');
const client = new Client({});

client.on('ready', async () => {
  console.log(`${client.user.username} is ready!`);
})

client.login(token);