const { Client, MessageAttachment } = require('discord.js-selfbot-v13');
const { token } = require('./config.json');
const client = new Client({});

client.on('ready', async () => {
  console.log(`${client.user.username} is ready!`);
})

client.on('messageCreate', async message => {
  if (message.author.bot) return;
  if (message.content === '!work') {
    await message.channel.sendSlash('1165870665304379402', 'work');
    setTimeout(async () => {
        await message.channel.sendSlash('1165870665304379402', 'work');
    }, 3600000); 
  }
});

client.login(token);
