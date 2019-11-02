const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

client.on('message', message => {
    if (message.content === '!ip'){
        message.channel.send(`Hey ${message.author}, The IP is `pixularcraft.tk``);
  	}
}); 

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
