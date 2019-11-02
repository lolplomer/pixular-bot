const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
    bot.user.setStatus('available')
    bot.user.setPresence({
        game: {
            name: 'pixularcraft.tk',
            type: "LISTENING",
            url: "https://pixularcraft.tk/"
});

client.on('message', message => {
    if (message.content === '!ip'){
        message.channel.send(`Hey ${message.author}, The IP is **pixularcraft.tk**`);
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
