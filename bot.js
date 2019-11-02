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
    if (message.content === '-ip' or 'Whats the ip?'){
    	message.reply('The IP is **play.pixularcraft.tk**');
        const attachment = new Attachment('https://i.imgur.com/w3duR07.png');
        message.channel.send(attachment);
  	}
}); 

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
