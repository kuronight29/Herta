const { Client, MessageAttachment } = require('discord.js-selfbot-v13');
const { token } = require('./config.json');
const client = new Client({});
const schedule = require('node-schedule');

client.on('ready', async () => {
  console.log(`${client.user.username} is ready!`);
})

client.on('messageCreate', async message => {
  if (message.author.bot) return;
  if (message.content === 's!work') {
    await message.channel.sendSlash('1165870665304379402', 'work');
    console.log(`${client.user.username} đã work`);
    setTimeout(async () => {
        console.log(`${client.user.username} đã work`);
        await message.channel.sendSlash('1165870665304379402', 'work');
    }, 3600000);
  }
});

schedule.scheduleJob('0 0 * * *', async function(){
  const channel = client.channels.cache.get('1165513340697718814');
  console.log(`${client.user.username} đã nhận daily`);
  await channel.sendSlash('1165870665304379402', 'daily');
});

client.login(token);

